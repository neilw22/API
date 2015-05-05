function init() {
  gapi.client.setApiKey('AIzaSyCZhJvq9XRp__3rvl0RrJdUFE3okUx6_sU');
  gapi.client.load('youtube', 'v3');
}

$(document).ready(function() {
  $('#search-form').submit(function search(event){
  	event.preventDefault();
    var q = $('#query').val();
	var request = gapi.client.youtube.search.list({
       	q: q,
       	part: 'snippet'
    	});

    	request.execute(function(response) {
    		var str = JSON.stringify(response.result);
    		//console.log(str);
        	console.log(response.result);
    	function displaySearchResults(videos) {
			var html = "";
			response.result.items.forEach(function(item){
				var title = item.snippet.title;
				var thumbnail = item.snippet.thumbnails.high.url;
				var vidID = item.id.videoId;
				html = html + "<li><p>" + title +
					"</p><a href='https://www.youtube.com/watch?v=" + vidID + "'><img src='" +  thumbnail + "'/></a></li>" ;
			});
			$("#search-container ul").html(html);
		}
		displaySearchResults(response.result);
		});
		return false;
    });
});

//Loop through items
//response.result.items.snippet.thumbnails.default.url
//video id in items.id