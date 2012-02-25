function loadXML(url) {
	//take in url and get data as object to parse
}

function parseXML(data) {
	//parse the data for items I want. Put in easy to use object that can be traversed
}

$(function() {

	//var url = "http://morningstarvalley.org/membersmessages/flash/playlist.xml";
	var url = "xml/playlist.xml";
	$.get(url, function(data) {
		console.log(data);
	}, "html");

}());
