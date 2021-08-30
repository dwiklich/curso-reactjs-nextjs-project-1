// import { Component } from "react";

import "./styles.css";

export const Button = ({ text, onClick, disabled }) => {
  return (
    <button disabled={disabled} onClick={onClick} className="button">
      {text}
    </button>
  );
};

// export class Button2 extends Component {
//   render() {
//     const { text, onClick, disabled } = this.props;

//     return (
//       <button disabled={disabled} onClick={onClick} className="button">
//         {text}
//       </button>
//     );
//   }
// }
