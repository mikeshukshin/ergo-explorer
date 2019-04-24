import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { Col } from 'antd';

import { Container } from '../../components/container';

class Header extends React.Component {
  render() {
    const { unconfirm } = this.props;

    return (
      <Wrapper>
        <Container>
          <Col span={24}>
          header
          </Col>

        </Container>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  unconfirm: state.transactions.unconfirm,
})

export const HeaderContainer = connect(
  mapStateToProps
)(Header);

const Wrapper = styled.div`
  height: 60px;
  background: var(--primary);
  margin-bottom: 20px;
  color: white;
`;