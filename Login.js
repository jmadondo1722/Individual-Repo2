<TouchableOpacity 
  style={styles.sendButton}
  onPress={async ()=>{
    console.log(phoneNumber + ' Button was pressed')
    
    const sendTextResponse = await fetch(
      'https://dev.stedi.me/twofactorlogin/' + phoneNumber,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/text'
        }
      }
    );

    const sendTextResponseData = await sendTextResponse.text();
    
    if (sendTextResponse.status !== 200) {
      // Invalid phone number, send them to the signup page
      await Alert.alert("Did you type your number correctly? " + phoneNumber);
    } else {
      // Assuming sendTextResponseData contains the name
      const name = sendTextResponseData; // Adjust accordingly
      
      // Set the message to display Hello [name]
      await Alert.alert("Hello " + name);
      
      setLoggedInState(loggedInStates.LOGGING_IN);
    }
  }}
>
  <Text style={{ color: 'white' }}>Send</Text>
</TouchableOpacity>
