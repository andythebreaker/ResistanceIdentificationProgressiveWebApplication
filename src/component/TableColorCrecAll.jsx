import React, { /*Component ,*/useState} from "react";
import { Welcome } from './KmeansBtn.jsx';
import {/* Rating ,*/Message} from 'semantic-ui-react';

export function TableCCall(props) {
  const [/*nct*/, /*setNct*/] = useState([5,8,3,3,3,3,3,3,3,3,3,3,3,3]);
  return <div className="tableCC">
    <table className="table table-striped table-bordered table-hover" style={{ transform: "scale(0.7)"}} >
        <tbody>
            <tr><td><Message compact>背景</Message></td><td><Welcome nClustersT={5}/></td></tr>
            <tr><td><Message compact>電阻本體</Message></td><td><Welcome nClustersT={8}/></td></tr>
            <tr><td><Message compact>色塊1</Message></td><td><Welcome nClustersT={3}/></td></tr>
            <tr><td><Message compact>色塊2</Message></td><td><Welcome nClustersT={3}/></td></tr>
            <tr><td><Message compact>色塊3</Message></td><td><Welcome nClustersT={3}/></td></tr>
            <tr><td><Message compact>色塊4</Message></td><td><Welcome nClustersT={3}/></td></tr>
            <tr><td><Message compact>色塊5</Message></td><td><Welcome nClustersT={3}/></td></tr>
            <tr><td><Message compact>色塊6</Message></td><td><Welcome nClustersT={3}/></td></tr>
            <tr><td><Message compact>色塊7</Message></td><td><Welcome nClustersT={3}/></td></tr>
            <tr><td><Message compact>色塊8</Message></td><td><Welcome nClustersT={3}/></td></tr>
            <tr><td><Message compact>色塊9</Message></td><td><Welcome nClustersT={3}/></td></tr>
            <tr><td><Message compact>色塊10</Message></td><td><Welcome nClustersT={3}/></td></tr>
            <tr><td><Message compact>色塊11</Message></td><td><Welcome nClustersT={3}/></td></tr>
            <tr><td><Message compact>色塊12</Message></td><td><Welcome nClustersT={3}/></td></tr>
        </tbody>
    </table>
  </div>;
}
