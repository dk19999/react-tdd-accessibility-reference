import userEvent from "@testing-library/user-event";

import { render, screen } from "@testing-library/react";
import App from "../src/App";
import { axe } from "jest-axe";

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

  it("shows an error message as an alert when input is invalid", async () => {
    const user = userEvent.setup();
    render(<App />);

    const textarea = screen.getByLabelText(/numbers to calculate/i);
    const button = screen.getByRole("button", { name: /calculate/i });

    await user.type(textarea, "1,a,3");
    await user.click(button);

    const alert = await screen.findByRole("alert");

    expect(alert).toHaveTextContent(/invalid input/i);
  });

  it("announces result updates in a live region", async () => {
    const user = userEvent.setup();
    render(<App />);

    const textarea = screen.getByLabelText(/numbers to calculate/i);
    await user.type(textarea, "1,2,3");
    await user.click(screen.getByRole("button", { name: /calculate/i }));

    const status = screen.getByRole("status");

    expect(status).toHaveTextContent(/result:\s*6/i);
  });

  it("has no obvious accessibility violations", async () => {
    const { container } = render(<App />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
