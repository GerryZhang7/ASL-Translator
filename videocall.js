let apiKey = "46531362";
// There is a unique session_id where users can join to be in the same room for the conversation
let sessionId = "1_MX40NjUzMTM2Mn5-MTU4MzYyNzcxMTE3OX5CVFZuWkRwTTJRTGVNQkZoN2s1RmEwQ09-fg";
// Each user has a unique token to access the webpage
// Token checks whether the user can publish to the session

let token = "T1==cGFydG5lcl9pZD00NjUzMTM2MiZzaWc9MzFmZmRmZWFiNjMxMmIzZjc1MTA0OWM0YjU3NDZlZmIyYTg3Yjc3YzpzZXNzaW9uX2lkPTFfTVg0ME5qVXpNVE0yTW41LU1UVTRNell5TnpjeE1URTNPWDVDVkZadVdrUndUVEpSVEdWTlFrWm9OMnMxUm1Fd1EwOS1mZyZjcmVhdGVfdGltZT0xNTgzNjQ4NjkzJm5vbmNlPTAuMjk4ODAyNTM1OTQxNzM3OSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTg2MjM3MDk1JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9"

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

// (optional) add server code here
initializeSession();

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: 400,
    height: 300
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, initialize a publisher and publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });

  // Subscribe to a newly created stream
  session.on('streamCreated', function(event) {
    session.subscribe(event.stream, 'subscriber', {
      insertMode: 'append',
      width: 400,
      height: 300
    }, handleError);
  });
}
