import template from './dinner.html';
import controller from './dinner.controller';

let dinnerComponent = {
	bindings: {},
	template,
	controller: ['$rootScope', '$interval', controller],
	controllerAs: '$ctrl',
}

export default dinnerComponent;