module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "svetlioo.m@gmail.com",
        defaultReplyTo: "svetlioo.m@gmail.com",
        //testAddress: "svetlioo.m@gmail.com",
      },
    },
  },
});
