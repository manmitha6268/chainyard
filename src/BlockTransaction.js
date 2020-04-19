import React, {Component} from 'react';
import axios from 'axios';

export default class BlockTransaction extends Component {

  constructor(props) {
    super(props)
    this.state = {
      blockTransaction: []
    }
  }

  //function which is called the first time the component loads
  componentDidMount() {
    // Function to get the Block Transaction Data from json
    axios.get('json/blockTransaction.json').then(response => {
      this.setState({blockTransaction: response.data.block_transactions})
    });
  }

  render() {

    if (!this.state.blockTransaction.length) {
        return (
          <p>Loading data</p>
        )
    } else if (!this.props.val) {
        return (
          <h1>No Transaction Details to show</h1>
        )
    }

    const blockTransactionItems = this.state.blockTransaction.filter(t => this.props.val === t.block_id).map(trans => (
                <div key={trans.uniq_id}>
                  <p>Hash: <span>{trans.hash}</span></p>
                  <p>Block ID: <span>{trans.block_id}</span></p>
                  <p>Size: <span>{trans.size}</span></p>
                  <p>Relayed By: <span>{trans.relayed_by}</span></p>
                  <p>TX Index: <span>{trans.tx_index}</span></p>
                  <p>In: <span>{trans.vin_sz}</span></p>
                  <p>Out: <span>{trans.vout_sz}</span></p>
                </div>  
        )
    );

    return (
      <div>
          <h1> BLOCK TRANSACTION </h1><hr/>
          {blockTransactionItems}
      </div>
    )
  }

}
