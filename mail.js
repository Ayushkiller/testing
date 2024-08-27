require("dotenv").config();
const nodemailer = require("nodemailer");

// const users = ["m84719666@gmail.com , manishnegi2032@gmail.com"];

const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  // secure: true,
  auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});
for (let user of users) {
  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: user,
    subject: "New Tender Released (HPPWD)",
    html: `
    <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
      <caption style="font-weight: bold; caption-side: top; margin-bottom: 10px;">
        Latest Tenders Notification
      </caption> 
      <thead style="background-color: #f2f2f2;">
        <tr
          <th style="padding: 8px;">Tender ID</th>
          <th style="padding: 8px;">Title</th>
          <th style="padding: 8px;">Category</th>
          <th style="padding: 8px;">Bidding Location</th>
          <th style="padding: 8px;">Budget</th>
          <th style="padding: 8px;">Deadline</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 8px;">2024_PWD_92139_1</td>
          <td style="padding: 8px;">Landslide mitigation and flood management in rural residential area Sadhupul in the Kandaghat Distt. Solan
Work Description	Construction of RCC wall, PCC wall and wire crate etc.)(Deposit work/CRF)</td>
          <td style="padding: 8px;">Civil Work</td>
          <td style="padding: 8px;">Solan</td>
          <td style="padding: 8px;">₹1,54,53,760</td>
          <td style="padding: 8px;">29-Aug-2024 11:00 AM</td>
        </tr>
      </tbody>
    </table>
  `,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent ", info.response);
    }
  });
}
