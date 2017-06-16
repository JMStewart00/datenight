class navbarCtrl {
	constructor($rootScope, $interval) {
		let ctrl = this;
		ctrl.$rootScope = $rootScope;
	
		
	}; // constructor

	randomize() {
		location.reload();
	}

} //navbarCtrl


export default navbarCtrl;