// Links of interest
// https://www.originate.com/thinking/stories/building-a-chrome-extension-using-firebase-real-time-database/
// https://github.com/jhen0409/react-chrome-extension-boilerplate/blob/master/chrome/manifest.prod.json
// https://github.com/firebase/quickstart-js/blob/master/auth/chromextension/manifest.json
// https://developer.chrome.com/apps/app_identity#google


// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyCs5iFN-37w0uE_Mmnmy8Gi4vPdikRoB0E",
	authDomain: "watchingthewatchers.firebaseapp.com",
	databaseURL: "https://watchingthewatchers.firebaseio.com",
	projectId: "watchingthewatchers",
	storageBucket: "watchingthewatchers.appspot.com",
	messagingSenderId: "361444087410",
	appId: "1:361444087410:web:ee959f8701907b88"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
function writeUserData(userId, _trackers) {
    // rahul/ is the database name
    firebase.database().ref('rahul/' + userId).set({
        '_trackers' : _trackers
    });
}

// the data structure that houses all the meta data we collect
_trackers = {
    'facebook': {
        _url : 'https://connect.facebook.net/en_US/fbevents.js',
        enabled: false
    },
    'twitter' : {
        _url : 'https://static.ads-twitter.com/uwt.js',
        enabled: false
    },
    'Yahoo': {
        _url: 'https://pr-bh.ybp.yahoo.com/sync/openx/f6422377-e4b4-a8c5-7295-8228c9958352?gdpr=0',
        enabled: false
    },
    'Google': {
        _url: 'https://www.googletagservices.com/tag/js/gpt.js',
        enabled: false 
    },
    'Adobe': {
        _url: 'https://assets.adobedtm.com/ea8b05805335bbbe5843bc504517194c8ae74941/mbox-contents-d0f4c67eb470e87ce1e338868cbf9fa7949157d6.js',
        enabled: false
    },
    'DoubleClick': {
        _url: 'https://ad.doubleclick.net/activity;src=5879915;type=homep0;cat=bestb00;ord=1;num=8022610157817;gtm=2od7a0;auiddc=1625892004.1563307403;u5=English;~oref=https%3A%2F%2Fwww.bestbuy.ca%2Fen-ca?',
        enabled: false 
    }
}

chrome.webNavigation.onCompleted.addListener(function(details) {
    alert("This is my favorite website!");
    console.log(details.url)
}) 

// chrome log for web requests
// Fires when a request is about to occur. This event is sent before any TCP connection is made and can be used to cancel or redirect requests.
// Each addListener() call takes a mandatory callback function as the first parameter. This callback function is passed a dictionary containing information about the current URL request. The information in this dictionary depends on the specific event type as well as the content of opt_extraInfoSpec.
// If the optional opt_extraInfoSpec array contains the string 'blocking' (only allowed for specific events), the callback function is handled synchronously. That means that the request is blocked until the callback function returns.
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      console.log(details);
      // indexOf is a built in js function for strings
      // we check the url against our data structure before logging
      if(details.url.indexOf(_trackers['twitter']._url) != -1) {
          // if it isn't enabled already
          _trackers['twitter'].enabled = true;
          console.log('twitter found!')
          
    } 
      if(details.url.indexOf(_trackers['Google']._url) != -1) {
          _trackers['Google'].enabled = true;
          console.log('Google Found!')
          
    } 
      if(details.url.indexOf(_trackers['Yahoo']._url) != -1) {
          _trackers['Yahoo'].enabled = true;
          console.log('Yahoo Found!')
         
    } 
      if(details.url.indexOf(_trackers['facebook']._url) != -1) {
          _trackers['facebook'].enabled = true;
          console.log('Facebook Found!')
          
    } 
      if(details.url.indexOf(_trackers['Adobe']._url) != -1) {
          _trackers['Adobe'].enabled = true;
          console.log('Adobe Found!')
         
    } 
      if(details.url.indexOf(_trackers['DoubleClick']._url) != -1) {
          _trackers['DoubleClick'].enabled = true;
          console.log('DoubleClick Found!')
          
    } 
},
    {urls: ["<all_urls>"]}, //allows the extension access to all urls
    ["blocking"]  //makes sure that the request is made only after the function returns (synchronous)
);

// wait 10s before sending data
//setTimeout(function() {
//console.log('writing to database')
//writeUserData("2", _trackers)
// },10000);

