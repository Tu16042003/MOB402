
const userSevice = require('./UserSevice');
const login = async(email,password)=>{
    
    return await userSevice.login(email,password);

}

const register = async(email,password,name)=>{
    try {
       return await userSevice.register(email,password,name);
    } catch (error) {
        
    }
    
}

module.exports = {login,register};