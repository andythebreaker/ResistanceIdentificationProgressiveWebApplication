import React, { PureComponent } from "react";
import styled from "styled-components";
/*https://www.npmjs.com/package/react-back-to-top-button*/
const Button = styled.button({
  fontSize: "45px",
  position: "fixed",
  right: "1vw",
  bottom: "1vh",
  margin: "1vh 1vh 1vw 1vw",
  borderRadius: "50%",
  border: "none",
  opacity: "0.99",
  visibility: "visible",
  cursor: "pointer",
  outline: "none",
  background: "#ffc0cb",
  height: "10vh",
  width: "10vw",
});

export class BackToTop extends PureComponent {
  state = {
    isAtRange: false,
  };

  moveToTop = () => {
    console.log("ONCLICK");
  };

  render() {
    return (
      <Button
        className="back-to-top"
        onClick={this.moveToTop}
        style={this.props.style}
      >
        {this.props.children || "UP"}
      </Button>
    );
  }
}
