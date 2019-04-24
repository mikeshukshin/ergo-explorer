import React from 'react';
import { connect } from 'react-redux';
import { TXSList } from '../../components/txList';

class ConfirmedList extends React.Component {
  render() {
    const { confirm } = this.props;

    return (
      <>
        <TXSList
          title={"Confirmed TXs"}
          txs={confirm}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  confirm: state.transactions.confirm,
})

export default connect(
  mapStateToProps,
)(ConfirmedList);