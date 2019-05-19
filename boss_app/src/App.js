import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, List } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import Input from 'antd-mobile/lib/input-item/Input'
import {connect} from 'react-redux'
import { actADD, actADDAsync } from './index.redux'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: 3,
  //     name: [1, 2, 3]
  //   }
  //   // this.addName = this.addName.bind(this);
  // }

  addName = (name) => {
    // this.props.store.dispatch(actADD());
    // store.actADDAsync(name)
  }

  render() {
    const store = this.props.store;
    const actADD = this.props.actADD;
    const actADDAsync = this.props.actADDAsync;
    // const nameList = store.getState();
    const nameList = this.props.name
    return (
      <div>
        <List>
          {nameList.map((v, index) => {
            return (
              <List.Item key={index}>
                {v}
              </List.Item>
            );
          })}
        </List>
        <Input></Input>
        <Button
          type='primary'
          onClick={() => {actADDAsync('ericao')}}
        >
          点我加一
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {name: state}
}

const mapDispatchToProps = {actADD, actADDAsync}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
