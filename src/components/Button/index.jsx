// import { Component } from "react";
import P from 'prop-types';

import './styles.css';

export const Button = ({ text, onClick, disabled = false }) => {
  return (
    <button disabled={disabled} onClick={onClick} className="button">
      {text}
    </button>
  );
};

//dando valor default em JS
Button.defaultProps = {
  disabled: false,
};

//dando valor propTypes em JS
Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};
