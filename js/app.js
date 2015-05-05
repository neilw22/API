
$(function(){
  $('#search-term').click(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
    $('#query').val('');
  });
});

function getRequest(searchTerm){
  var params = {
    part: "snippet",
    // fields: "items(snippet(thumbnails(medium(url))))",
    key: "AIzaSyCp7WNFq9klE0KC73yKukMPYgWcXfVX5f8",
    q: searchTerm,
    r: 'json'
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
  	// console.log(data.items[0].snippet.thumbnails.medium.url);
    showResults(data.items);
  });
}

function showResults(results){
  var html = "";
  $.each(results, function(index, item){
  	var thumbnail = item.snippet.thumbnails.medium.url;
    html += '<img src="' + thumbnail + '" /i>';
  });
  $('#search-results').html(html);
  console.log(html);
}




// $(function(){

// function showResults(results){
//     var html = "";
//     $.each(results, function(index,value){
//       html += '<p>' + value.Title + '</p>';
//     });
//     $('#search-results').html(html);
//   }

// $("#search-term").click(function(e){
// 	(e).preventDefault();
// 	var search = $("#query").val();
// 	$.getJSON('http://www.omdbapi.com/?s='+search+'&r=json', function(data){
//     showResults(data.Search);
//     	});
// 	});
// });
