

const userModel = require('./UserModel');
const bcrypt = require('bcryptjs');

const login = async (email, password) => {
    // gọi vào data base kt
    // const user = users.find(u => u.email == email);
    // if (user && user.password == password) {
    //     return user;
    // }
    // return null;
    try {
        let user = await userModel.findOne({ email: email });
        if (user) {
            let check = bcrypt.compareSync(password, user.password);
            return check ? user : false;
        }

    } catch (error) {
        console.log(error);
    }
    return false;
}

//register

const register = async (email, password, name) => {
    try {
        //kt email co ton tai chua
        const user = await userModel.findOne({ email: email });

        if (!user) {

            // users.push(newUser);

            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            const newUser = { email, password: hash, name, role:1 };
            await userModel.create(newUser);
            return true;
        }

    } catch (error) {
        console.log(error);
    }
    return false;
}


module.exports = { login, register };

var users = [
    { _id: 1, email: 'abc@gmail.com', password: 1, name: "Nguyễn Nam" },
    { _id: 2, email: 'acb@gmail.com', password: 1, name: "Lệ Hoa" },
    { _id: 3, email: 'bac@gmail.com', password: 1, name: "Lý Sự" },
]
