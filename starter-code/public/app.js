console.log('app.js connected');
$(document).ready(function(){
  console.log('DOM ready');
});

$.ajax({
  type: 'GET',
  url: 'http://localhost:3000/pickanumber',
  dataType: 'json',
  success: function(data) {
    console.log("Request successful");
  }
});
