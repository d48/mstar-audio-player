//callback for YQL json return
function myplaylist (o){
	var items = o.query.results.tracks;
	var output = '';
	var no_items=items.length;

	//build out audio item
	for(var i=0;i<no_items;i++){
		var title = items[i].track.title;
		var artist = items[i].track.artist;
		var url = items[i].track.url;

		output += "<li><h2><a href='" + url + "'>"+title+"</a></h3><span class=\"artist\">" + artist + "</span>";
		output += "<audio src=\"" + url + "\" controls>";
		output += "Your browser does not support the audio element";
		output += "</audio></li>";
	}

	document.getElementById('playlist').innerHTML = output;  
}
