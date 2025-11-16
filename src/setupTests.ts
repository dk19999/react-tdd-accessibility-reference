import { expect } from "vitest";
import * as matchers from "@testing-library/jest-dom/matchers";
import { toHaveNoViolations } from "jest-axe";

expect.extend(matchers);
expect.extend({ toHaveNoViolations } as unknown as Record<string, any>);
