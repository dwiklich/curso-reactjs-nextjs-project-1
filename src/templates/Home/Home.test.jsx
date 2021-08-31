import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';

import { Home } from './index';

const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts', async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: 'title handler 1',
          body: 'body handler 1',
        },
        {
          userId: 2,
          id: 2,
          title: 'title handler 2',
          body: 'body handler 2',
        },
        {
          userId: 3,
          id: 3,
          title: 'title handler 3',
          body: 'body handler 3',
        },
        {
          userId: 4,
          id: 4,
          title: 'title handler 4',
          body: 'body handler 4',
        },
      ]),
    );
  }),
  rest.get('https://jsonplaceholder.typicode.com/photos', async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          url: 'img/img-handler-1.jpg',
        },
        {
          url: 'img/img-handler-2.jpg',
        },
        {
          url: 'img/img-handler-3.jpg',
        },
        {
          url: 'img/img-handler-4.jpg',
        },
        {
          url: 'img/img-handler-5.jpg',
        },
      ]),
    );
  }),
];

const server = setupServer(...handlers);

describe('<Home />', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => server.resetHandlers());

  afterAll(() => {
    server.close();
  });

  test('should render search, posts and load more', async () => {
    // expect(1).toBe(1);
    const { debug } = render(<Home />);
    const noMorePosts = screen.getByText('Não existem posts =x');
    expect(noMorePosts).toBeInTheDocument();

    await waitForElementToBeRemoved(noMorePosts);
    debug();
    // const linkElement = screen.debug('Load more posts');
    // expect(linkElement).toBeInTheDocument();
  });
});
