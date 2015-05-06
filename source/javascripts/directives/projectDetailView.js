app.directive('projectDetailView', function() {
	return {
		restrict: 'E',
		scope: {
			info: '='
		},
		templateUrl: 'angular_templates/projectDetailView.html'
	}
});
