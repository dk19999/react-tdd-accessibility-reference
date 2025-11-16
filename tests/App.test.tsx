import userEvent from "@testing-library/user-event";

import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("App accessibility", () => {
  it("provides an accessible label for the numbers input", () => {
    render(<App />);

    const textarea = screen.getByLabelText(/numbers to calculate/i);

    expect(textarea).toBeInTheDocument();
  });

  it("calculates and displays the sum for valid input", async () => {
    const user = userEvent.setup();
    render(<App />);

    const textarea = screen.getByLabelText(/numbers to calculate/i);
    await user.type(textarea, "1,2,3");

    const button = screen.getByRole("button", { name: /calculate/i });

    await user.click(button);

    expect(screen.getByText(/result:\s*6/i)).toBeInTheDocument();
  });
});
