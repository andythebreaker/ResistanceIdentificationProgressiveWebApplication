import React from "react";

export class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canvasA: {
        canvasWidth: 800,
        canvasHeight: 600,
      },
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.setState({
      canvasA: {
        canvasWidth: 800,
        canvasHeight: 600,
      },
    });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    const context = this.canvasA.getContext("2d");

    const image = new Image();
    image.src = "./logo512.png"; //前端可視路徑
    image.onload = () => {
      context.drawImage(image, 0, 0, this.canvasA.width, this.canvasA.height);
    };
  }

  onchangeW(aaa) {
    console.log(aaa.target);
    this.setState({
      canvasA: {
        canvasWidth: parseFloat(aaa.target.value),
        canvasHeight: this.state.canvasA.canvasHeight,
      },
    });
  }

  onchangeH(aaa) {
    console.log(aaa.target);
    this.setState({
      canvasA: {
        canvasWidth: this.state.canvasA.canvasWidth,
        canvasHeight: parseFloat(aaa.target.value),
      },
    });
  }

  render() {
    return (
      <div>
        <canvas
          className="WCWC"
          ref={(canvasA) => (this.canvasA = canvasA)}
          width={this.state.canvasA.canvasWidth}
          height={this.state.canvasA.canvasHeight}
        />
        <p>width</p>
        <input
          type="number"
          value={this.state.canvasA.canvasWidth}
          onChange={(e) => {
            this.onchangeW(e);
          }}
        />
        <p>height</p>
        <input
          type="number"
          value={this.state.canvasA.canvasHeight}
          onChange={(e) => {
            this.onchangeH(e);
          }}
        />
      </div>
    );
  }
}
