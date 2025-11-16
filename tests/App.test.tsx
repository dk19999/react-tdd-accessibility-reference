import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("App accessibility", () => {
  it("provides an accessible label for the numbers input", () => {
    render(<App/>);

    const textarea = screen.getByLabelText(/numbers to calculate/i);

    expect(textarea).toBeInTheDocument();
  });
});
