import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd';

import { setWatch } from '../../actions/addToWatcher';
import { TXSList } from '../../components/txList';

class UnconfirmedList extends React.Component {

  handleTXSubscribe = tx => {
    this.props.setWatch(tx.id);
  }

  render() {
    const { unconfirm, watch } = this.props;

    return (
      <>
        <TXSList
          title={"Unconfirmed TXs"}
          txs={unconfirm}
          selected={watch}
          actionElement={<Icon type="notification" />}
          actionHandler={this.handleTXSubscribe}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  unconfirm: state.transactions.unconfirm,
  watch: state.transactions.watch
})

export default connect(
  mapStateToProps,
  {
    setWatch
  }
)(UnconfirmedList);