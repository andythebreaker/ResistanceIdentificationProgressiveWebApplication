import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import { KMeans } from "scikitjs";
import { PieChart } from "react-minimal-pie-chart";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
var pixels = require("image-pixels");

export class Welcome extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      canvasA: {
        canvasWidth: 10,
        canvasHeight: 10,
        canvasURL: "./logo512.png", //前端可視路徑
        pixW: -87,
        pixH: -87,
        nClustersT: props.nClustersT,
        pieDataNum: [],
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
        pixW: -87,
        pixH: -87,
        nClustersT: this.state.canvasA.nClustersT,
        pieDataNum: [],
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
    var tmp_stat = this.state.canvasA;
    tmp_stat["canvasWidth"] =
      et.parentNode.parentNode.getElementsByClassName("rtW")[0].innerText;
    tmp_stat["canvasHeight"] =
      et.parentNode.parentNode.getElementsByClassName("rtH")[0].innerText;
    tmp_stat["canvasURL"] =
      et.parentNode.parentNode.getElementsByClassName("rtU")[0].innerText;
    this.setState({
      canvasA: tmp_stat,
    });
  }

  dokmeans(et) {
    console.log("dokmeans");
    var imgurl =
      et.parentNode.parentNode.getElementsByClassName("rtU")[0].innerText;
    async function dokmeansAsync(t) {
      function howMuchIsRepeated_es6(arr) {
        //https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript
        // count is [ [valX, count], [valY, count], [valZ, count]... ];
        const count = [...new Set(arr)].map((val) => [
          val,
          arr.join("").split(val).length - 1,
        ]);

        for (let i = 0; i < count.length; i++) {
          console.log(`Value ${count[i][0]} is repeated ${count[i][1]} times`);

          /////////////////////////////
          var tmp_statz = t.state.canvasA;
          tmp_statz["pieDataNum"].push({
              //TODO:add color to pie chart
            title: count[i][0],
            value: count[i][1],
            color: "#E38627",
          });
          t.setState({
            canvasA: tmp_statz,
          });
          /////////////////////////////////
        }
      }
      var { data, width, height } = await pixels(imgurl);
      /////////////////////////////
      var tmp_stat = t.state.canvasA;
      tmp_stat["pixW"] = width;
      tmp_stat["pixH"] = height;
      t.setState({
        canvasA: tmp_stat,
      });
      /////////////////////////////////
      //console.log(Array.from(data));
      //let X = Array.from(data);
      const n = 4;
      var ceil = Math.ceil;
      let X = Array.from(Array(ceil(data.length / n)), (_, i) =>
        data.slice(i * n, i * n + n - 1)
      ); //https://stackoverflow.com/questions/8495687/split-array-into-chunks
      console.log(X);
      /*arr1 = [[1, 2], [3, 4]];
      [ [ 1, 2 ], [ 3, 4 ] ]
      > arr1.flat();
      [ 1, 2, 3, 4 ]*/
      const kmean = new KMeans({ nClusters: t.state.canvasA.nClustersT });
      var kfp = kmean.fitPredict(X);
      kfp.array().then(function (d) {
        console.log(d);
        howMuchIsRepeated_es6(d.flat());
      });
    }
    dokmeansAsync(this);
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
              <Stack spacing={2} direction="row">
                <Button
                  color="secondary"
                  variant="text"
                  style={{
                    background: "#ddb98b",
                    height: "0.1vh",
                    padding: "10 0 0 0vh",
                  }}
                  onClick={(e) => {
                    this.dokmeans(e.target);
                  }}
                >
                  dokmeans
                </Button>
              </Stack>
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
            <td>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Stack direction="row" spacing={1}>
                        <Chip label="寬" variant="outlined" />
                        <Chip label={this.state.canvasA.pixW} />
                        <Chip label="高" variant="outlined" />
                        <Chip label={this.state.canvasA.pixH} />
                      </Stack>{" "}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <PieChart
                        style={{ height: "14vh" }}
                        data={this.state.canvasA.pieDataNum}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
