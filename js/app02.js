// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-term').attr('disabled', false);
}

// Search for a specified string.
function search() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#search-results').html('<pre>' + str + '</pre>');
  });
}

$(function(){

$("#search-term").click(function(e){
  handleAPILoaded();
  search();
  console.log(str);
});


});

