import { render, screen } from "@testing-library/react";
import { Posts } from ".";

import { postsPropsMock } from "../PostCard/mock";

const props = postsPropsMock;

describe("<Posts />", () => {
  test("should render Posts", () => {
    render(<Posts {...props} />);

    expect(
      screen.getAllByRole("heading", { name: /title post /i })
    ).toHaveLength(5);
    expect(screen.getAllByRole("img", { name: /title post /i })).toHaveLength(
      5
    );
    expect(screen.getAllByText(/body post/i)).toHaveLength(5);
    expect(screen.getByRole("img", { name: /title post 2/i })).toHaveAttribute(
      "src",
      "img/img-post2.png"
    );
  });

  test("should not render posts", () => {
    render(<Posts />);
    expect(
      screen.queryByRole("heading", { name: /title post /i })
    ).not.toBeInTheDocument();
  });

  test("should length posts is empty", () => {
    render(<Posts />);
    expect(
      screen.queryAllByRole("heading", { name: /title post /i })
    ).toHaveLength(0);
  });

  test("should match snapshot", () => {
    const { container } = render(<Posts {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
