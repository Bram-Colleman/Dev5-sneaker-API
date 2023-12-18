const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const createUser = async (req, res) => {
    try{
        let user = req.body;
        if (!user) {
            return res.status(400).json({
                status: "error",
                message: "POST user not successful",
            });
        }
        let u = new User();
        u.userName = user.userName;
        u.password = user.password; 
        u.email = user.email.toLowerCase();

        const salt = await bcrypt.genSalt(10);
        u.password = await bcrypt.hash(u.password, salt);

        await u.save();
        res.json({
            status: "success",
            message: "POST user successfull",
            data: [
                {
                    user: u,
                }
            ]
        });

    } catch (err) {
        res.json({
            status: "error",
            message: "POST user not successful",
            data: [{
                errormessage: err.message,
            }],
        });
    }
};

const loginUser = async (req, res) => {
    try{
        let user = req.body;
        user.email = user.email.toLowerCase();
        if (!user) {
            return res.status(400).json({
                status: "error",
                message: "No user data provided",
            });
        }
        let u = await User.findOne({email: user.email});
        console.log(u);
        if (!u) {
            return res.status(400).json({
                status: "error",
                message: "User not found",
            });
        }
        const validPassword = await bcrypt.compare(user.password, u.password);
        if (!validPassword) {
            return res.status(400).json({
                status: "error",
                message: "Invalid password",
            });
        }
        let token = jwt.sign(
            {
                uid: user.userName,
                email: user.email,
            },
            process.env.TOKEN_SECRET
        );
        res.json({
            status: "success",
            message: "User logged in successfully",
            data: [
                {
                    user: u,
                    token: token,
                }
            ]
        });

    } catch (err) {
        res.json({
            status: "error",
            message: "POST user not successful",
            data: [{
                errormessage: err.message,
            }],
        });
    }

};
    

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;