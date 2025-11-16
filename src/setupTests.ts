import "@testing-library/jest-dom";
import { expect } from "vitest";
import { toHaveNoViolations } from "jest-axe";

expect.extend({ toHaveNoViolations } as unknown as Record<string, any>);