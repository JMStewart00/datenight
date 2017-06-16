import dinnerComponent from './dinner.component';

let dinnerModule = angular.module('dinner', [])
.component('dinner', dinnerComponent);

export default dinnerModule;