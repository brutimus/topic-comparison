//@codekit-prepend "../bower_components/jquery/dist/jquery.js"
//@codekit-prepend "comparator.js"

$(document).ready(function() {
	d3.select('.container').call(comparator());
});