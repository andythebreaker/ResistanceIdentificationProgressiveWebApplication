import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canvasA: {
        canvasWidth: 10,
        canvasHeight: 10,
        canvasURL: "./logo512.png", //前端可視路徑
      },
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.setState({
      canvasA: {
        canvasWidth: 10,
        canvasHeight: 10,
        canvasURL: "./logo512.png", //前端可視路徑
      },
    });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    const context = this.canvasA.getContext("2d");

    const image = new Image();
    image.src = this.state.canvasA.canvasURL;
    image.onload = () => {
      context.drawImage(image, 0, 0, this.canvasA.width, this.canvasA.height);
    };
  }

  onchangeW(aaa) {
    //console.log(aaa.target);
    var tmp_stat = this.state.canvasA;
    tmp_stat["canvasWidth"] = parseFloat(aaa.value);
    this.setState({
      canvasA: tmp_stat,
    });
  }

  onchangeH(aaa) {
    //console.log(aaa.target);
    var tmp_stat = this.state.canvasA;
    tmp_stat["canvasHeight"] = parseFloat(aaa.value);
    this.setState({
      canvasA: tmp_stat,
    });
  }

  onchangeURL(aaa) {
    //console.log(aaa.target);
    var tmp_stat = this.state.canvasA;
    tmp_stat["canvasURL"] = aaa.value;
    this.setState({
      canvasA: tmp_stat,
    });
  }

  onchangeRefresh(et) {
    console.log("onchangeRefresh");
    console.log(
      et.parentNode.parentNode.getElementsByClassName("rtW")[0].innerText
    );
    console.log(
      et.parentNode.parentNode.getElementsByClassName("rtH")[0].innerText
    );
    console.log(
      et.parentNode.parentNode.getElementsByClassName("rtU")[0].innerText
    );
    this.setState({
      canvasA: {
        canvasWidth: parseFloat(
          et.parentNode.parentNode.getElementsByClassName("rtW")[0].innerText
        ),
        canvasHeight: parseFloat(
          et.parentNode.parentNode.getElementsByClassName("rtH")[0].innerText
        ),
        canvasURL:
          et.parentNode.parentNode.getElementsByClassName("rtU")[0].innerText,
      },
    });
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <canvas
                className="WCWC"
                ref={(canvasA) => (this.canvasA = canvasA)}
                width={this.state.canvasA.canvasWidth}
                height={this.state.canvasA.canvasHeight}
              />
            </td>
            <td>
              <p>width</p>
              <input
                type="number"
                value={this.state.canvasA.canvasWidth}
                onChange={(e) => {
                  this.onchangeW(e.target);
                }}
              />
              <p>height</p>
              <input
                type="number"
                value={this.state.canvasA.canvasHeight}
                onChange={(e) => {
                  this.onchangeH(e.target);
                }}
              />
              <input
                className="reactTransImagePath"
                type="text"
                value={this.state.canvasA.canvasURL}
                onChange={(e) => {
                  this.onchangeURL(e.target);
                }}
              />
              <Card sx={{ maxWidth: 275 }}>
                <CardContent>
                  <Typography className="rtW">
                    {this.state.canvasA.canvasWidth}
                  </Typography>
                  <Typography className="rtH">
                    {this.state.canvasA.canvasHeight}
                  </Typography>
                  <Typography className="rtU">
                    {this.state.canvasA.canvasURL}
                  </Typography>
                  <Typography> 強制更新</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    className="reactTransRefresh"
                    onClick={(e) => {
                      this.onchangeRefresh(e.target);
                    }}
                    size="small"
                  >
                    <Typography> 強制更新</Typography>
                  </Button>
                </CardActions>
              </Card>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
