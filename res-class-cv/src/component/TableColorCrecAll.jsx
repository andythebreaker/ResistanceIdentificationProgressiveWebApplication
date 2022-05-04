import React from "react";
import { Welcome } from './KmeansBtn.jsx'

export function TableCCall(props) {
  return <div className="tableCC">
    <table className="table table-striped table-bordered table-hover">
        <tbody>
            <tr><td>背景</td><td><Welcome nClustersT={5}/></td></tr>
            <tr><td>電阻本體</td><td><Welcome nClustersT={8}/></td></tr>
            <tr><td>色塊1</td><td><Welcome nClustersT={3}/></td></tr>
            <tr><td>色塊2</td><td><Welcome nClustersT={3}/></td></tr>
            <tr><td>色塊3</td><td><Welcome nClustersT={3}/></td></tr>
            <tr><td>色塊4</td><td><Welcome nClustersT={3}/></td></tr>
            <tr><td>色塊5</td><td><Welcome nClustersT={3}/></td></tr>
            <tr><td>色塊6</td><td><Welcome nClustersT={3}/></td></tr>
            <tr><td>色塊7</td><td><Welcome nClustersT={3}/></td></tr>
            <tr><td>色塊8</td><td><Welcome nClustersT={3}/></td></tr>
            <tr><td>色塊9</td><td><Welcome nClustersT={3}/></td></tr>
            <tr><td>色塊10</td><td><Welcome nClustersT={3}/></td></tr>
            <tr><td>色塊11</td><td><Welcome nClustersT={3}/></td></tr>
            <tr><td>色塊12</td><td><Welcome nClustersT={3}/></td></tr>
        </tbody>
    </table>
  </div>;
}
