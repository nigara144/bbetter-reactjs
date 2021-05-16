import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import LoggedIn from './components/pages/LoggedIn';
import LoggedOrg from './components/pages/LoggedOrg';
import MyActivities from './components/pages/MyActivities';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';
import SignUpOrganizer from './components/pages/SignUpOrganizer';
import Tips from './components/pages/Tips';
import Knowledge from './components/pages/Knowledge';
import Food from './components/pages/Food';
import Volunteer from './components/pages/Volunteer';
import CaesareaBeachCleanUp from './components/pages/VolunteerActivities/CaesareaBeachCleanUp';
import HaderaTreePlant from './components/pages/VolunteerActivities/HaderaTreePlant';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>

        <Route path='/logged-in' exact component={LoggedIn} />
        <Route path='/logged-org' exact component={LoggedOrg} />
        <Route path='/volunteer' exact component={Volunteer} />
        <Route path='/MyActivities' exact component={MyActivities} />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/about' exact component={About} />
          <Route path='/sign-up' exact component={SignUp} />
          <Route path='/sign-up-organizer' exact component={SignUpOrganizer} />
          <Route path='/caesarea-beach' exact component={CaesareaBeachCleanUp} />
          <Route path='/hadera-tree-plant' exact component={HaderaTreePlant} />
          <Route path='/tips-cards' exact component={Tips} />
          <Route path='/knowledge' exact component={Knowledge} />
          <Route path='/food' exact component={Food} />

          <Route path='/fork' component={() => {
            window.location.href = 'https://www.forksoverknives.com/recipes/vegan-menus-collections/easy-plant-based-recipes/';
            return null;
          }} />
          <Route path='/sustainable' component={() => {
            window.location.href = 'https://www.godairyfree.org/news/sustainable-recipes-earth-day';
            return null;
          }} />
          <Route path='/cookinglight' component={() => {
            window.location.href = 'https://www.cookinglight.com/food/vegetarian/plant-based-recipes-for-a-year-of-meatless-mondays';
            return null;
          }} />
          <Route path='/air' component={() => {
            window.location.href = 'https://www.nationalgeographic.org/encyclopedia/air-pollution/';
            return null;
          }} />
          <Route path='/ocean' component={() => {
            window.location.href = 'https://www.nationalgeographic.org/lesson/human-impacts-world-ocean/';
            return null;
          }} />
          <Route path='/wildfires' component={() => {
            window.location.href = 'https://www.nationalgeographic.org/encyclopedia/wildfires/';
            return null;
          }} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
