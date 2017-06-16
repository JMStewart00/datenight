import template from './activity.html';
import controller from './activity.controller';

let activityComponent = {
	bindings: {},
	template,
	controller: ['$rootScope', '$interval', controller],
	controllerAs: '$ctrl'
};

export default activityComponent;