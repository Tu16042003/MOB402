
const userSevice = require('./UserSevice');


const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    pool: true,
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use TLS
    auth: {
        user: 'Mob402',
        pass: 'iiwsvrlstpijiyaw'
    },
});

const login = async(email,password)=>{
    
    return await userSevice.login(email,password);

}

const register = async(email,password,name)=>{
    try {
       return await userSevice.register(email,password,name);
    } catch (error) {
        
    }
    
}

const sendMail =async (email,subject,content)=>{

    try {
        const mailOption = {
            from: 'AppComic <Mob402>',
            to: email,
            subject: subject,
            content:content
        }
        
    } catch (error) {
        
    }
}

module.exports = {login,register,sendMail};