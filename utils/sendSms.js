const twilio = require('twilio');

// const accountSid = 'AC0f3fce6bfbd4f1c19b93d56715e34973'; 
// const authToken = '4264bd41825739dbf0c159e48374d44a';  
const client = twilio(accountSid, authToken);

const sendSms = async (mobile, message) => {
  try {
    const response = await client.messages.create({
      body: message,             
      from: '+6374001173',         
      to: mobile                  
    });

    console.log('SMS sent successfully:', response.sid);
    return response;
  } catch (error) {
    console.error('Error sending SMS:', error);
    throw new Error('Failed to send SMS');
  }
};

module.exports = sendSms;
