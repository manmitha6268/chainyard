import React, {Component} from 'react';
import axios from 'axios';
import BlockDetails from './BlockDetails';
import LatestBlockDetails from './LatestBlock';

export default class BlockList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      blockList: [],
      selectedBlock: null,
      isLatestBlock: false,
    }
  }

  //function which is called the first time the component loads
  componentDidMount() {
    // Function to get the Block List Data from json
    axios.get('json/blockList.json').then(response => {
      this.setState({blockList: response.data.blocks})
    });
  }

  render() {

    if (!this.state.blockList.length) {
        return (
          <p>Loading data</p>
        )
    }

    const blockListItems = this.state.blockList.map(block => 
              <div key={block.uniq_id} className="block-list-item">
                  <p>Block #: <span>{block.uniq_id}</span></p>
                  <button className="block-view-button" onClick={() => this.setState({selectedBlock: block.uniq_id, isLatestBlock: false})}>
                      Click to View Details
                  </button>
              </div>  
    )

    let latest;
    if(this.state.isLatestBlock) {
       latest = <LatestBlockDetails val={this.state.isLatestBlock}/>
    }

    return (
      <div className="main-div">
        <div className="left-nav">
            <h1> BLOCKS </h1><hr/>
            {blockListItems}
            <button className="block-view-button latest" onClick={() => this.setState({isLatestBlock: true, selectedBlock: "latest"})}>
                Click to View Latest Block 
            </button>
        </div>
        <div className="right-section">
          <BlockDetails val={this.state.selectedBlock}/>
          {latest}
        </div>
      </div>
    )
  }

}