const config = {
    s3: {
      REGION: "eu-west-3",
      BUCKET: "notes-app-upload777",
    },
    apiGateway: {
      REGION: "eu-west-3",
      URL: "https://q8roqghtec.execute-api.eu-west-3.amazonaws.com/dev",
    },
    cognito: {
      REGION: "eu-west-3",
      USER_POOL_ID: "eu-west-3_A2Nn7Ebuw",
      APP_CLIENT_ID: "7dg2svtbp9cpea0ld1pqi1kclr",
      IDENTITY_POOL_ID: "eu-west-3:82099ec7-54c7-4e9c-94ce-7e53d33debb2",
    },
  };
  
  export default config;