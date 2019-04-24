import React from 'react';
import { string, arrayOf, object, element } from 'prop-types';
import styled from '@emotion/styled';

const TXItem = ({tx, action, actionClick, selected}) => 
  <Item onClick={actionClick} selected={selected}>
    <ItemTitle>
    {tx.id}
    </ItemTitle>
    {action && selected && (
      <ItemAction>
        {action}
      </ItemAction>
    )}
  </Item>

export class TXSList extends React.Component {

  static propTypes = {
    title: string,
    txs: arrayOf(object).isRequired,
    actionElement: element
  }

  static defaultProps = {
    title: 'TXList',
  }

  render() {
    const { title, txs, actionElement, actionHandler, selected } = this.props;

    return (
      <Wrapper>
        <Title>{title} ({txs.length})</Title>
        <HorLine />
        {txs.map(tx => {
          const handle = () => actionHandler(tx);
          const isSelected = selected ? selected.includes(tx.id) : false;

          return (
            <TXItem 
              key={tx.id} 
              tx={tx}
              selected={isSelected}
              action={actionElement} 
              actionClick={handle}/>
          )
        })}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h3`
  font-size: 120%;
`;

const HorLine = styled.hr`
  border: none; 
  background-color: var(--primary); 
  height: 2px;
`

const ItemTitle = styled.div``;
const ItemAction = styled.div`
  display: block;
  margin-left: 20px;
  margin-bottom: 5px;
`;

const Item = styled.div`
  height: 28px;
  display: flex;
  font-size: 110%;
  cursor: pointer;
`;
