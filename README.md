# Introduction

1. The purpose of this app is to pull the mp3 files from a page and list them to be streamed by a player
2. If meta data is available such as \<title\>, \<description\>, and \<date\>, that will be attempted to be displayed
3. The main goal is to be able to have this app scrape a website of data and have a mechanism to stream these audio files.
4. This will be initially used to externally provide an interface with easier access to these audio files with the end goal of streamin the audio on mobile devices. Note: look to see if can only be done through streaming server.

0.1 - Road Map
---

1. ~~Review current website setup. See how files are listed and if there is a pattern~~
	Found source URL for listing of all files: http://morningstarvalley.org/membersmessages/flash/playlist.xml
2. Define needs of application
	- Parse xml and create tree of data to easily view
	<pre>
	 xml format => track
					=> title
					=> artist
					=> url
	</pre>
3. Create initial page setup to serve up/display the data
	- running into issues regarding xml on another domain. won't load. see about using curl
4. Do small test of manually getting URL to see possibilities of streaming
