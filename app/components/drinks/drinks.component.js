import template from './drinks.html';
import controller from './drinks.controller';

let drinksComponent = {
	bindings: {},
	template,
	controller: ['$rootScope', '$interval', controller],
	controllerAs: '$ctrl'
};

export default drinksComponent;