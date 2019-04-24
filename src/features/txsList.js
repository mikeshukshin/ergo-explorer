import React from 'react';
import { connect } from 'react-redux';

const TXItem = ({tx}) => 
  <div>{tx.id}</div>

class TXSList extends React.Component {
  render() {
    const { list } = this.props;

    return (
      <div className="App">
        {list.map(tx => 
          <TXItem key={tx.id} tx={tx} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.transactions.list
})

export const TXSListContainer = connect(
  mapStateToProps
)(TXSList);