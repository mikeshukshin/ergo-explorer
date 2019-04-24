import React from 'react';
import { connect } from 'react-redux';
import { TXSList } from '../../components/txList';

class ConfirmedList extends React.Component {
  render() {
    const { mined } = this.props;

    return (
      <>
        <TXSList
          title={"Wait for confirmations"}
          txs={mined}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  mined: state.transactions.mined,
})

export default connect(
  mapStateToProps,
)(ConfirmedList);