# Trying to reproduce jest ReferenceError

Getting error
`ReferenceError: Cannot access 'mockPlaySoundFile' before initialization` when
running `npm test`.

Related to https://github.com/facebook/jest/issues/10996

Trying to use the
[module factory parameter](https://jestjs.io/docs/es6-class-mocks#calling-jestmock-with-the-module-factory-parameter).
