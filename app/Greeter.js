import React, {Component} from 'react'
import config from './config.json';

import styles from './app.css';

class Greeter extends Component{
  render() {
    return (
      <div className="test">
        {config.greetText}
        Woot woot
      </div>
    );
  }
}

export default Greeter;