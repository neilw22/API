$(function(){
  $.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
    // showResults(data.Search);
    console.log(data.Search);
  });
});

// function showResults(results){
//   $.each(results, function(index,value){
//     console.log(value.Title);
//   });
// }