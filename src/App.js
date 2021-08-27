import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: "O titulo 1111",
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
  timeOutUpdate = null;

  handleTimeOut = () => {
    setTimeout(() => {
      const { posts, counter } = this.state;
      posts[0].title = "O título mudou";

      console.log("Montado componente");
      // console.log(`counter: ${this.state.counter}`);

      this.setState({
        counter: counter + 1,
        posts: [...posts],
      });
    }, 2000);
  };

  /*
    Link para diagrama: React Lifecycle Methods Diagram

     https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

  */

  // componentDidMount -> atualiza uma vez o estado do componente assim que renderiza
  componentDidMount() {
    // setInterval fica atualizando o componente com o tempo inserido na function setInterval. Se transforma num compomentDidUpdate
    // setInterval(() => {
    //   console.log("Componente atulizando a cada 2 segundos");
    // }, 2000);

    this.handleTimeOut();

    console.log("Componente apos handleTimeOut");
  }

  // componentDidUpdate -> atualiza o estado do componente a cada segundo
  componentDidUpdate() {
    this.handleTimeOut();
  }

  // componentWillUnmount -> executa toda vez que o componente for criado ou atualizado
  componentWillUnmount() {
    // limpa o cache do react pois pode ficar cache e bugar o componente
    clearTimeout(this.timeOutUpdate);
  }

  render() {
    const { posts, counter } = this.state;

    return (
      <div className="App">
        <p>counter: {counter}</p>
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
