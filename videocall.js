
let api_key = "46531362";
// There is a unique session_id where users can join to be in the same room for the conversation
let session_id = "1_MX40NjUzMTM2Mn5-MTU4MzYyNzcxMTE3OX5CVFZuWkRwTTJRTGVNQkZoN2s1RmEwQ09-fg";
// Each user has a unique token to access the webpage
// Token checks whether the user can publish to the session
let token = "T1==cGFydG5lcl9pZD00NjUzMTM2MiZzaWc9MzE4ODY2YzRmNjkzYWZhZmEwNzI4MzA5NjA0OGRkYWMxM2Q0MGU4ZTpzZXNzaW9uX2lkPTFfTVg0ME5qVXpNVE0yTW41LU1UVTRNell5TnpjeE1URTNPWDVDVkZadVdrUndUVEpSVEdWTlFrWm9OMnMxUm1Fd1EwOS1mZyZjcmVhdGVfdGltZT0xNTgzNjI5OTAyJm5vbmNlPTAuMTY3MjIxNDQyOTg0NTMyNDUmcm9sZT1zdWJzY3JpYmVyJmV4cGlyZV90aW1lPTE1ODYyMTgzMDImaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0="


// create publisher
var publisher = OT.initPublisher();
session.connect(token, function(err) {
   // publish publisher
   if(err){
       alert('There was an error')
   }else{
       session.publish();
   }
});
//Access any video or audio published by other users
session.on('streamCreated', function(event) {
    session.subscribe(event.stream)
 });