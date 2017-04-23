(function() {
    'use strict';
    
    mainApp.config(function($routeProvider) {
        $routeProvider
            .when("/", {templateUrl : "./templates/alboms.html"})
            .when("/photos", {templateUrl : "./templates/photos.html"})
            .when("/photo", {templateUrl : "./templates/photo.html"});
            $routeProvider.otherwise("/");
    });
})();