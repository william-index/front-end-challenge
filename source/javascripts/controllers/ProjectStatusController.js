/*
* Main Controller for the application
* @class ProjectStatusController
*/
app.controller('ProjectStatusController', function($scope, $http) {

  /*
    retrieves data from json. Data folder not used as
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

  /**
  * Updates the active project and appends
  *   class for active state of project details
  *   lightbox view
  * @method showDetails
  * @memberof ProjectStatusController
  *
  * @param {object} project
  **/
  $scope.showDetails = function(project){
    var _detail_view = angular.element(document.getElementById("project_details"));
    _detail_view.addClass("project_details--active")
    $scope.selectedProject = project;
  };

  /**
  * Simple removes the active class from the
  *   detail view allow it to animate out
  *   based on css
  * @method hideDetails
  * @memberof ProjectStatusController
  **/
  $scope.hideDetails = function(){
    var _detail_view = angular.element(document.getElementById("project_details"));
    _detail_view.removeClass("project_details--active")
  }

});
