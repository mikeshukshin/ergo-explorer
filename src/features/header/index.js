import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { Select } from 'antd';
import { Container } from '../../components/container';

import { setBlocksToConfirm } from '../../actions';

const Option = Select.Option;

class Header extends React.Component {
  render() {
    const { blockToConfirm, setBlocksToConfirm, info } = this.props;

    return (
      <Wrapper>
        <Container><Insider>
          <Title>Ergo TX Watcher</Title>
          <div>
            Current block: <b>
            {info.headersHeight}
            </b>
          </div>
          <div>
            Confirmations to notify&nbsp;
            <Select value={blockToConfirm} style={{ width: 50 }} onChange={setBlocksToConfirm}>
              <Option value={0}>0</Option>
              <Option value={1}>1</Option>
              <Option value={2}>2</Option>
              <Option value={3}>3</Option>
              <Option value={4}>4</Option>
              <Option value={5}>5</Option>
              <Option value={6}>6</Option>
            </Select>
          </div>
        </Insider></Container>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  blockToConfirm: state.transactions.blockToConfirm,
  info: state.transactions.info,
})

export const HeaderContainer = connect(
  mapStateToProps,
  {
    setBlocksToConfirm
  }
)(Header);

const Wrapper = styled.div`
  height: 60px;
  background: var(--primary);
  margin-bottom: 20px;
  color: var(--contrast-color);
`;

const Title = styled.h2`
  color: var(--contrast-color);
`;

const Insider = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;