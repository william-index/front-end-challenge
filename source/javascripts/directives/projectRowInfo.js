app.directive('projectRowInfo', function() {
	return {
		restrict: 'E',
		scope: {
			info: '='
		},
		templateUrl: 'angular_templates/projectRowInfo.html'
	}
});
