// Cunk 3
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');



const auth = {
    auth: {
        api_key: 'df18591f5d3d5d78653c424726657761-7238b007-01f29864',
        domain: 'sandboxf4f588dc69314598a35d17964609de62.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

// Chunk4

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'haykazbshe@gmail.com',
        subject,
        text
    };
    
    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
           return cb(err, null);
        } else {
           return cb(null, data);
        }
    });
}

module.exports = sendMail;
