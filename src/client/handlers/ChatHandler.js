import React from 'react';
import {RouteHandler} from 'react-router';

export default class ChatHandler extends React.Component {

  static contextTypes = {
    router: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      curConvo: null,
    };
  }

  render() {
    return (
      <RouteHandler />
    );
  }
}
