import { Button } from '.';
import { /*fireEvent,*/ render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<Button />', () => {
  it("should render the button with the text 'Load more'", () => {
    const fn = jest.fn();

    render(<Button onClick={fn} text="Load more" />);

    expect.assertions(1);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<Button onClick={fn} text="Load more" />);

    const button = screen.getByRole('button', { name: /load more/i });

    //  Faz a mesma q a de baixo, porem tem menas opcoes de test
    // fireEvent.click(button);
    userEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled true', () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} disabled={true} />);

    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should be disabled when disabled false', () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} disabled={false} />);

    expect(screen.getByRole('button')).toBeEnabled();
  });

  it('should name of prop "disabled" value default equal false', () => {
    const fn = jest.fn();
    const { debug } = render(<Button text="Load more" onClick={fn} />);
    const button = screen.getByRole('button');
    // const tem = button.hasAttribute('disabled');
    // console.log(tem);
    expect(button).toHaveProperty('disabled', false);
    expect(screen.getByRole('button')).toBeInTheDocument();
    debug();
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} disabled={false} />);

    expect(screen.getByRole('button')).toBeEnabled();
  });
});
