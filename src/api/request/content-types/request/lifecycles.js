const template = require('../../templates/email-template');

module.exports = {
  async afterCreate(event) {
    const { result } = event;
   
    const emailTemplate = {
      subject: `New message from ${result.name} <${result.email}>`,
      text: 'Following attributes are missing from your email template',
      html: template(result.message, result.name),
    };

    try {
      await strapi.plugins["email"].services.email.sendTemplatedEmail(
        { to: result.createdBy.email },
        emailTemplate,       
      );
    } catch (error) {
      console.log(error);
    }
  },
};
