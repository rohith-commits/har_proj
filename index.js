// import nodemailer from 'nodemailer'

const nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'fyp.20.2024@gmail.com',
      pass: 'rhur kuin mfgp xwol'
    }
  });


  var mailOptions = {
    from: 'fyp.20.2024@gmail.com',
    to: 'harshithprashanth@gmail.com',
    subject: 'From code',
    text: 'macha'
};


transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });