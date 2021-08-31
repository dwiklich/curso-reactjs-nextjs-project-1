import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextInput } from ".";

// const props = {
//   searchValue: 2,
//   handleChange: 1,
// };

describe("<TextInput />", () => {
  test("should have a value of searchValue", () => {
    const fn = jest.fn();

    render(
      <TextInput handleChange={fn} searchValue={"texto digitado do input"} />
    );

    const input = screen.getByPlaceholderText(/Type your search/i);

    expect(input).toHaveProperty("value", "texto digitado do input");
    expect(input.value).toBe("texto digitado do input");
  });

  test("should call handleChange function on each key pressed", () => {
    const fn = jest.fn();

    render(<TextInput handleChange={fn} />);

    const input = screen.getByPlaceholderText(/Type your search/i);

    const value = "o valor";

    userEvent.type(input, value);

    expect(input).toHaveAttribute("id", "pesquisa");
    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  test("should match snapshot", () => {
    const fn = jest.fn();

    const { container } = render(
      <TextInput handleChange={fn} searchValue={"texto digitado do input"} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
