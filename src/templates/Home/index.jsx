import { Component } from "react";

import "./styles.css";

import { Posts } from "../../components/Posts";
import { loadPosts } from "../../utils/load-posts";
import { Button } from "../../components/Button";

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 99,
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  // componentDidUpdate() {
  //   const page = this.state.page;
  //   this.setState({ page: page + 9 });
  //   console.log("clicado");
  // }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(0, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    this.setState({
      page: nextPage,
      posts: [...posts, ...nextPosts],
    });
  };

  render() {
    const { posts, allPosts, page, postsPerPage } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    return (
      <section className="container">
        <Posts posts={posts}></Posts>
        <div className="button-container">
          <Button
            disabled={noMorePosts}
            onClick={this.loadMorePosts}
            text="Load more posts"
          />
        </div>
      </section>
    );
  }
}
