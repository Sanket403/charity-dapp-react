import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { NavbarMain } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Donate} from './Container/Donate/Donate';
import { Participation} from './Container/Participation/Participation';
import {PastCampagins} from './Container/Campaigns/PastCampagins';
import {ActiveCampagins} from './Container/Campaigns/ActiveCampagins';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarMain />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/donate" exact component={Donate} />
          <Route path="/participation" exact component={Participation} />
          <Route path="/pst-camp" exact component={PastCampagins} />
          <Route path="/act-camp" exact component={ActiveCampagins} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
