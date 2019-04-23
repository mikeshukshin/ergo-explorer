import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  console.log(state);

  return state;
}

@connect(
  mapStateToProps
)
export class TXSList extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Hello everybody
        </header>
      </div>
    );
  }
}