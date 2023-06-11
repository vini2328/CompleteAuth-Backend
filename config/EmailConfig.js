import dotenv from 'dotenv'
dotenv.config()
import nodemailer from 'nodemailer'


let transporter =nodemailer.createTransport({
    host:process.env.EMAIL_HOST,
    port:process.env.EMAIL_PORT,
    secure: false,
    auth:{
        user:testAccount.user,
        pass:testAccount.pass,
    },
    


})

console.log('checll',transporter)
export default transporter