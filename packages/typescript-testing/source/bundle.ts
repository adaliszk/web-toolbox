// noinspection JSUnusedGlobalSymbols

import type * as testdeckCore from '@testdeck/core'
import * as testdeckSrc from '@testdeck/vitest'
import * as vitestSrc from 'vitest'
import * as chaiSrc from 'chai'

// region Library exports
export { defineConfig } from 'vitest/config'
export const testdeck = testdeckSrc
export const vitest = vitestSrc
export const chai = chaiSrc
// suite, test, slow, timeout, retries, pending, only, skip, params
export * from '@testdeck/vitest'
// endregion

// BDD-style feature mapping
export const describe: testdeckCore.SuiteDecorator = testdeckSrc.suite
export const does: testdeckCore.TestDecorator = testdeckSrc.test
export const it: testdeckCore.TestDecorator = testdeckSrc.test
export const expect = chaiSrc.expect
export const should = chaiSrc.should
export const use = chaiSrc.use
export const util = chaiSrc.util
export const assert = chaiSrc.assert
// endregion
