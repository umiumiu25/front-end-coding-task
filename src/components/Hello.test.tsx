import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

describe("Hello component", () => {
  it("renders correctly", () => {
    render(<Hello name="Vitest" />);
    expect(screen.getByText("Hello, Vitest!")).toBeInTheDocument();
  });
});
