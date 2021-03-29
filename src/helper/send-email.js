const axios = require("axios");

const sendEmail = async (data) => {
  try {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "x-api-key": process.env.REACT_APP_API_KEY,
    };
    const response = await axios.post(
      process.env.REACT_APP_API_ENDPOINT,
      data,
      { headers }
    );
    console.log("response: ", response);
    return {
      status: "success",
      message: response.data,
    };
  } catch (err) {
    return {
      status: "failure",
      message: "Failed to send message",
    };
  }
};

export default sendEmail;
