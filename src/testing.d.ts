/// <reference types="@testing-library/jest-dom" />

import "vitest";

declare module "vitest" {
  interface Assertion<T = any> extends jest.Matchers<void, T> {}
}
