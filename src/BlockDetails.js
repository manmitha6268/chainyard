import React, {Component} from 'react';
import axios from 'axios';
import BlockTransaction from './BlockTransaction';

export default class BlockDetails extends Component {

  constructor(props) {
    super(props)
    this.state = {
      blockDetails: []
    }
  }

  //function which is called the first time the component loads
  componentDidMount() {
    // Function to get the Block Detail Data from json
    axios.get('json/blockDetails.json').then(response => {
      this.setState({blockDetails: response.data.block_details})
    });
  }

  render() {

    if (!this.state.blockDetails.length) {
        return (
          <p>Loading data</p>
        )
    } else if (this.props.val === "latest") {
      return null;
    } else if (!this.props.val) {
        return (
          <h1>WELCOME!</h1>
        )
    }

    const blockDetailItems = this.state.blockDetails.filter(d => this.props.val === d.uniq_id).map(detail => (
                <div key={detail.uniq_id}>
                  <p>Block #: <span>{detail.uniq_id}</span></p>
                  <p>Hash: <span>{detail.hash}</span></p>
                  <p>Height: <span>{detail.height}</span></p>
                  <p>Time: <span>{detail.time}</span></p>
                  <p>Version: <span>{detail.ver}</span></p>
                  <p>Previous Block: <span>{detail.prev_block}</span></p>
                  <p>MRKL Root: <span>{detail.mrkl_root}</span></p>
                  <p>Bits: <span>{detail.bits}</span></p>
                  <p>Size: <span>{detail.size}</span></p>
                  <p>Block Index: <span>{detail.block_index}</span></p>
                  <p>Relayed By: <span>{detail.relayed_by}</span></p>
              </div> 
        )
    );

    return (
      <div>
        <div>
            <h1> BLOCK DETAILS </h1><hr/>
            {blockDetailItems}
        </div>
        <div>
          <BlockTransaction val={this.props.val}/>
        </div>
      </div>
    )
  }

}
