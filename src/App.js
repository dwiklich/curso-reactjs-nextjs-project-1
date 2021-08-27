import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "O titulo 1",
        body: "O corpo 1",
      },
      {
        id: 2,
        title: "O titulo 2",
        body: "O corpo 2",
      },
      {
        id: 3,
        title: "O titulo 3",
        body: "O corpo 3",
      },
      {
        id: 4,
        title: "O titulo 4",
        body: "O corpo 4",
      },
      {
        id: 5,
        title: "O titulo 5",
        body: "O corpo 5",
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
