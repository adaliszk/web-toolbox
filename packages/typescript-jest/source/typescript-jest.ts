import testdeckSrc from '@testdeck/jest'
import chaiSrc from 'chai'

// region Testdeck

export const testdeck = testdeckSrc

// suite, test, slow, timeout, retries, pending, only, skip, params
export * from '@testdeck/jest'

// BDD naming
export const describe = testdeckSrc.suite
export const does = testdeckSrc.test
export const it = testdeckSrc.test

// endregion

// region Chai

export const chai = chaiSrc

// expect, should, use, util, assert
export const expect = chaiSrc.expect
export const should = chaiSrc.should
export const use = chaiSrc.use
export const util = chaiSrc.util
export const assert = chaiSrc.assert

// endregion
