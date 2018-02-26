import React, {Component} from 'react';
import './App.css';
import {addListener, removeListener, isAuthorized} from './AuthorizeApi';
import {Redirect, Route, Switch, Link, NavLink} from 'react-router-dom';
import Home from './Home';
import Auth from './Auth';
import Public from './Public';
import Private from './Private';


class App extends Component {
  state = {
    isAuthorized
  }

  componentDidMount() {
    addListener(this.handleAuthorize);
  }

  componentWillUnmount() {
    removeListener(this.handleAuthorize);
  }

  handleAuthorize = isAuthorized => {
    this.setState({isAuthorized});
  }

  render() {
    const {isAuthorized} = this.state;
    //const {location:{pathname}} = this.props;
    return <div>        
        <nav>
          <ul>
            <li> <NavLink to={'/private'}>Секретная страница</NavLink>  </li>
            <li> <NavLink to={'/auth'}>Войти</NavLink></li>
            <li><NavLink to={'/public'}>Публичная страница</NavLink></li>
            <li><NavLink to={'/'}>Главная</NavLink></li>
          </ul>
        </nav>
        <hr/>
        {/* {!isAuthorized && } */}
        <Switch>
          {isAuthorized === false && <Redirect from="/private" to="/auth" />}
          {isAuthorized && <Route path="/private" exact component={Private} />}
          <Route path="/public" exact component={Public} />
          <Route path="/auth" exact component={Auth} />
          <Route path="/" exact component={Home} />  
          {isAuthorized === false && <Redirect from="/*" to="/" />      }  
        </Switch>
      </div>;
  }
}

export default App;
