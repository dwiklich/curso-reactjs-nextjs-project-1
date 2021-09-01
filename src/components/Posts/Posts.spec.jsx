import { render, screen } from '@testing-library/react';
import { Posts } from '.';

import { postsPropsMock } from '../PostCard/mock';

const props = postsPropsMock;

describe('<Posts />', () => {
  test('should render Posts', () => {
    render(<Posts {...props} />);

    expect(screen.getAllByRole('heading', { name: /title post /i })).toHaveLength(5);
    expect(screen.getAllByRole('img', { name: /title post /i })).toHaveLength(5);
    expect(screen.getAllByText(/body post/i)).toHaveLength(5);
    expect(screen.getByRole('img', { name: /title post 2/i })).toHaveAttribute('src', 'img/img-post2.png');
  });

  test('should not render posts', () => {
    render(<Posts />);
    expect(screen.queryByRole('heading', { name: /title post /i })).not.toBeInTheDocument();
  });

  test('should length posts is empty', () => {
    render(<Posts />);
    expect(screen.queryAllByRole('heading', { name: /title post /i })).toHaveLength(0);
  });

  test('should match snapshot', () => {
    const { container } = render(<Posts {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should name of prop "posts" value default equal []', () => {
    const { container, debug } = render(<Posts />);

    expect(screen.queryAllByRole('heading')).toHaveLength(0);
    expect(screen.queryAllByRole('img')).toHaveLength(0);
    expect(screen.queryAllByText(/body post/i)).toHaveLength(0);
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    expect(container.querySelector('.posts')).toHaveClass('posts');
    expect(container.querySelector('.posts')).toBeInTheDocument();
    debug();
  });
});
