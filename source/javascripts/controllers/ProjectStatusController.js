app.controller('ProjectStatusController', function($scope, $http) {

  /* retrieves data from json. Data folder not used as
    it has a convention with middlmean, so I named the dir "json"
    for distinction
  */
  $http.get('javascripts/json/challenge.json').
    success(function(data, status, headers, config) {
      $scope.projects = data.projects;
    }).
    error(function(data, status, headers, config) {
      console.log('Failed to load project list @ challenge.json');
    });

  // Tracks current filter for list
  $scope.filters = {
    active: ''
  };

  // Ordering
  $scope.predicate = 'id';

  // currently displayed details
  $scope.selectedProject = {};

  $scope.showDetails = function(project){
    $scope.selectedProject = project;
  };

});
