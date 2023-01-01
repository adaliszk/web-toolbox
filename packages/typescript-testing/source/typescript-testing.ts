// noinspection JSUnusedGlobalSymbols

import * as testdeckSrc from '@testdeck/vitest'
import * as vitestSrc from 'vitest'
import * as chaiSrc from 'chai'

// region Library exports
export const testdeck = testdeckSrc
export const vitest = vitestSrc
export const chai = chaiSrc
// suite, test, slow, timeout, retries, pending, only, skip, params
export * from '@testdeck/vitest'
// endregion

// BDD-style feature mapping
export const describe = testdeckSrc.suite
export const does = testdeckSrc.test
export const it = testdeckSrc.test
export const expect = chaiSrc.expect
export const should = chaiSrc.should
export const use = chaiSrc.use
export const util = chaiSrc.util
export const assert = chaiSrc.assert
// endregion
