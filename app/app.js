import appComponent from './app.component';
import navbarComponent from './components/navbar/navbar.component';
import dinnerComponent from './components/dinner/dinner.component';
import activityComponent from './components/activity/activity.component';
import drinksComponent from './components/drinks/drinks.component';
import dotenv from '../dist/env.json';


angular.module('app', [])
.component('app', appComponent)
.component('navbar', navbarComponent)
.component('dinner', dinnerComponent)
.component('activity', activityComponent)
.component('drinks', drinksComponent)