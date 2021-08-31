import { Button } from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<Button />", () => {
  it("should render the button with the text 'Load more'", () => {
    render(<Button text="Load more" />);

    expect.assertions(1);

    const button = screen.getByRole("button", { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it("should call function on button click", () => {
    const fn = jest.fn();
    render(<Button onClick={fn} text="Load more" />);

    const button = screen.getByRole("button", { name: /load more/i });

    //  Faz a mesma q a de baixo, porem tem menas opcoes de test
    // fireEvent.click(button);
    userEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should be disabled when disabled true", () => {
    render(<Button disabled={true} />);

    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("should be disabled when disabled false", () => {
    render(<Button disabled={false} />);

    expect(screen.getByRole("button")).toBeEnabled();
  });

  it("should match snapshot", () => {
    render(<Button disabled={false} />);

    expect(screen.getByRole("button")).toBeEnabled();
  });
});
