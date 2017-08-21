$(function() {

  // your code will go here
  $.ajax('https://www.codeschool.com/users/rycz.json', {
  	dataType: 'jsonp',
  	success: function(response) {
  		var badgeDiv = $('#badges');
  		$.each(response.courses.completed, function(index, course) {
  			var html = '<div class="course">';
  			html += '<h3>' + course.title + '</h3>';
  			html += '<img src="' + course.badge + '">';
  			html += '<a class="btn btn-primary" target="_blank" href="' + course.url + '">See Course</a>';
  			html += '</div>';
  			badgeDiv.append(html);
  		});
  	}
  });

});
