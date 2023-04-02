// bat loi

// bat loi register

const checkRegister = async (req, res, next) => {

    try {

        const { email, password, name, confirm_password } = req.body;

        if (!email || !password || !name || !confirm_password) {
            return res.status(400).json({
                result: false,
                message: 'Vui long nhap du thong tin'
            });
        } else {
            if (password.toString() != confirm_password.toString()) {
                return res.status(400).json({
                    result: false,
                    message: 'Mat khau khong khop'
                });
            }
            const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            if (!emailRegex.test(email)) {
                return res.status(400).json({
                    result: false,
                    message: 'Email khong hop le'
                });
            }
            // chay tiep
            next();
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ result: false ,message:'loi he thong'});
    }

}

module.exports = { checkRegister };