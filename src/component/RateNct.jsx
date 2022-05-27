import React/*, { Component, useState }*/ from "react";
import { Rating, Message } from "semantic-ui-react";

export class RateNct extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nrt: props.nctNrt ,
    cpc: props.cpc ,};
  }
  render() {
    return (
      <div>
        <Message compact>{this.state.nrt}</Message>
        <Rating
          defaultRating={this.state.nrt}
          icon="star"
          size="mini"
          maxRating={20}
          onRate={(e, { rating, mr }) => {
            this.setState({nrt: rating});
            this.state.cpc.cpcNtc(rating, this.state.cpc);
          }}
        />
      </div>
    );
  }
}
