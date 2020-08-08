import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { NavbarMain } from './components/Navbar/Navbar';
import { TokenExchange } from './components/TokenExchange/TokenExchange';
import { Transfer } from './components/Transfer/Transfer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarMain />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/token-exchange" exact component={TokenExchange} />
          <Route path="/transfer" exact component={Transfer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
