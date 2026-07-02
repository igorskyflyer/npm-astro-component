// @vitest-environment happy-dom
// Created via @igorskyflyer/astro-component by Igor Dimitrijević (@igorskyflyer)

import { renderAstroComponent } from '@igorskyflyer/astro-render-component'
import { describe, expect, it } from 'vitest'
import MyComponent from '../MyComponent.astro'

describe('My Astro component test', () => {
  it('My test', async () => {
    const result = await renderAstroComponent(MyComponent)

    expect(result.textContent).toBe('🌟 Hello World! 🚀')
  })
})
