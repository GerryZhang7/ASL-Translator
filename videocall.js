
let api_key = "46531362";
// There is a unique session_id where users can join to be in the same room for the conversation
let session_id = "2_MX40NjUzMTM2Mn5-MTU4MzYxOTM0NzY2NX5aeFRPNjBpSmxnVXdRK3hPdkd3clVTb0t-fg";
// Each user has a unique token to access the webpage
// Token checks whether the user can publish to the session
let token = "T1==cGFydG5lcl9pZD00NjUzMTM2MiZzaWc9ZDhmOGU4MDBmY2ZkZGY5MzhjNzllYjUzODQ1ZmQ5YzU4YTkyZGEzNjpzZXNzaW9uX2lkPTJfTVg0ME5qVXpNVE0yTW41LU1UVTRNell4T1RNME56WTJOWDVhZUZSUE5qQnBTbXhuVlhkUkszaFBka2QzY2xWVGIwdC1mZyZjcmVhdGVfdGltZT0xNTgzNjE5NDM5Jm5vbmNlPTAuMTc4MTExMzQ2Mjc4MDYzMjQmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTU4MzYyMzA0MCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ=="


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