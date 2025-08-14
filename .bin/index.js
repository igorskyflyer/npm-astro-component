#!/usr/bin/env node
// Author: Igor Dimitrijević (@igorskyflyer)

import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import { fileURLToPath } from 'node:url'
import { execSync } from 'node:child_process'
import inquirer from 'inquirer'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const args = process.argv.slice(2)
const isDryRun = args.includes('--dry')
const filteredArgs = args.filter((arg) => !arg.startsWith('--'))
const target = filteredArgs[0]

if (!target) {
  console.log('🚀 Usage: astro-component <destination> [--dry]')
  process.exit(0)
}

const source = path.resolve(__dirname, '../data')
const resolvedTarget = path.resolve(target)

if (
  fs.existsSync(resolvedTarget) &&
  fs.readdirSync(resolvedTarget).length > 0
) {
  console.error(`❌ Destination "${resolvedTarget}" is not empty.`)
  process.exit(1)
}

function walkRecursive(src, dest, onFile, onDir) {
  onDir?.(src, dest)

  for (const item of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, item.name)
    const destPath = path.join(dest, item.name)

    if (item.name.endsWith('node_modules')) continue

    if (item.isDirectory()) {
      walkRecursive(srcPath, destPath, onFile, onDir)
    } else {
      onFile?.(srcPath, destPath)
    }
  }
}

function copyRecursive(src, dest) {
  walkRecursive(
    src,
    dest,
    (srcPath, destPath) => fs.copyFileSync(srcPath, destPath),
    (srcPath, destPath) => fs.mkdirSync(destPath, { recursive: true })
  )
}

function previewRecursive(src, dest) {
  walkRecursive(
    src,
    dest,
    (_, destPath) => {
      console.log(`📄 ${path.relative(process.cwd(), destPath)}`)
    },
    (_, destPath) => {
      console.log(`📁 ${path.relative(process.cwd(), destPath)}${path.sep}`)
    }
  )
}

try {
  if (isDryRun) {
    console.log(
      `🔍 Dry run: previewing files to be copied to "${resolvedTarget}"\n`
    )
    previewRecursive(source, resolvedTarget)
  } else {
    copyRecursive(source, resolvedTarget)
    console.log(`✅ Files copied to: ${resolvedTarget}\n`)

    const { installDeps } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'installDeps',
        message: 'Do you want to install the dependencies now?',
        default: true
      }
    ])

    if (installDeps) {
      try {
        execSync('npm install', { stdio: 'ignore', cwd: resolvedTarget })
        console.log('📦 Dependencies installed.')
      } catch (err) {
        console.error('❌ Failed to install dependencies:', err)
      }
    } else {
      console.log('🚫 Skipped dependency installation.')
    }

    const closers = [
      '✨ Make it count!',
      '🚀 Ready for liftoff!',
      '🧪 Time to test, tweak, and triumph!',
      '🔧 Now go build something brilliant!',
      '🌟 Let the creativity begin!'
    ]
    const closer = closers[Math.floor(Math.random() * closers.length)]

    console.info(`\n${closer}`)
  }
} catch (err) {
  console.error('💥 Operation failed:', err.message)
  process.exit(1)
}
