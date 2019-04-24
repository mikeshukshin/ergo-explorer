import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd';

import { setWatch } from '../../actions';
import { TXSList } from '../../components/txList';

class UnconfirmedList extends React.Component {

  handleTXSubscribe = tx => {
    this.props.setWatch(tx);
  }

  render() {
    const { unconfirm, watch } = this.props;
    const selected = watch.map(tx => tx.id);

    return (
      <>
        <TXSList
          title={"Unconfirmed TXs"}
          txs={unconfirm}
          selected={selected}
          actionElement={<Icon type="bell" />}
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