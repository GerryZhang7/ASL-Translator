let apiKey = "46531362";
// There is a unique session_id where users can join to be in the same room for the conversation
let sessionId = "1_MX40NjUzMTM2Mn5-MTU4MzYyNzcxMTE3OX5CVFZuWkRwTTJRTGVNQkZoN2s1RmEwQ09-fg";
// Each user has a unique token to access the webpage
// Token checks whether the user can publish to the session

let token = "T1==cGFydG5lcl9pZD00NjUzMTM2MiZzaWc9MTE5YmRhOTUxMzIzNTk1YWVmMzVlZGRiMTMxZmNlMjhmY2YwZjFmMDpzZXNzaW9uX2lkPTFfTVg0ME5qVXpNVE0yTW41LU1UVTRNell5TnpjeE1URTNPWDVDVkZadVdrUndUVEpSVEdWTlFrWm9OMnMxUm1Fd1EwOS1mZyZjcmVhdGVfdGltZT0xNTgzNjI5MzMxJm5vbmNlPTAuOTM4NzAxOTIwNjkyNTMxMyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTg2MjE3NzMyJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9"


// Handling all of our errors here by alerting them
function handleErrorSub(error) {
  if (error) {
    alert(error.message);
  }else{
      console.log('Sub successgful')
  }
}
function handleErrorPub(error) {
  if (error) {
    alert(error.message);
  }else{
      console.log('Pub successgful')
  }
}

// (optional) add server code here
initializeSession();

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
  session.on('streamCreated', function(event) {
    session.subscribe(event.stream, 'subscriber', {
      insertMode: '',
      width: '50%',
      height: '50%'
    }, handleErrorSub);
  });

    
    
 var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '50%',
    height: '50%'
  }, handleErrorPub);
    

 

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, initialize a publisher and publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleErrorPub);
    }
  });
}
