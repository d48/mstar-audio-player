function loadXML(url) {
	//take in url and get data as object to parse
}

function parseXML(data) {
	//parse the data for items I want. Put in easy to use object that can be traversed
}


function myplaylist (o){
  var items = o.query.results.tracks.track;
  var output = '';
  var no_items=items.length;
 console.log(no_items);
  for(var i=0;i<no_items;i++){
	var title = items[i].title;
	var artist = items[i].artist;
	var url = items[i].url;
	output += "<h3><a href='" + url + "'>"+title+"</a></h3>" + artist + "<hr/>";
  }
  // Place news stories in div tag
  document.getElementById('results').innerHTML = output;  
}

