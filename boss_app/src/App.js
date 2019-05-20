import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, List } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import Input from 'antd-mobile/lib/input-item/Input'
import { connect } from 'react-redux'
import './config'

class App extends React.Component {

  addName = (name) => {
    // this.props.store.dispatch(actADD());
    // store.actADDAsync(name)
  }

  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    return <h1>Hello World</h1>;
  }
}

export default App;
