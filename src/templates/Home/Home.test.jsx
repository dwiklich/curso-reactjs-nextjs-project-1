import { render, screen } from "@testing-library/react";
import { Home } from "./index";

describe("<Home />", () => {
  test("is a dummy test", () => {
    // expect(1).toBe(1);
    render(<Home />);
    const linkElement = screen.getByText("Load more posts");
    expect(linkElement).toBeInTheDocument();
  });
});
