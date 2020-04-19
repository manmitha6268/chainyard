import React, {Component} from 'react';
import axios from 'axios';

export default class LatestBlockDetails extends Component {

  constructor(props) {
    super(props)
    this.state = {
      latestBlockDetails: []
    }
  }

  //function which is called the first time the component loads
  componentDidMount() {
    // Function to get the Block Detail Data from json
    axios.get('json/latestBlock.json').then(response => {
      this.setState({latestBlockDetails: response.data})
    })
  }

  render() {

    if (!this.state.latestBlockDetails || !this.props.val) {
      return null;
    }

    const latestBlockDetailItems = this.state.latestBlockDetails;

    return (
        <div>
            <h1> LATEST BLOCK DETAILS </h1><hr/>
            <p>Hash: <span>{latestBlockDetailItems.hash}</span></p>
            <p>Time: <span>{latestBlockDetailItems.time}</span></p>
            <p>Height: <span>{latestBlockDetailItems.height}</span></p>
            <p>Block Index: <span>{latestBlockDetailItems.block_index}</span></p>
        </div>
    )
  }

}
