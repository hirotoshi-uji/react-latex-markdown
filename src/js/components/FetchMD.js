import React from 'react';
import MText from './text.md';
import Markdown from './Markdown';

export default class FetchMD extends React.Component {
  constructor(props) {
    super(props)
    this.state ={ md: "" }
  }

  componentDidMount() {
    fetch(MText).then((res) => res.text()).then((md) => {this.setState({ md })})
  }

  render() {
    return ( <Markdown>{this.state.md}</Markdown> );
  }
}
