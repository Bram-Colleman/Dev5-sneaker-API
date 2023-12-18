const Shoe = require("../models/Shoe");

const createShoe = async (req, res) => {
    console.log(req.body.shoe);
    try{
        let shoe = req.body.shoe;
        if (!shoe) {
            return res.status(400).json({
                status: "error",
                message: "Shoe data not provided in the request body",
            });
        }
        let s = new Shoe();
        s.shoeType = shoe.shoeType;
        s.shoeSize = shoe.shoeSize;
        s.shoeColorSole = shoe.shoeColorSole;
        s.shoeColorLaces = shoe.shoeColorLaces;
        s.shoeColorPanelDown = shoe.shoeColorPanelDown;
        s.shoeColorPanelUp = shoe.shoeColorPanelUp;
        s.shoeMaterialPanelDown = shoe.shoeMaterialPanelDown;
        s.shoeMaterialPanelUp = shoe.shoeMaterialPanelUp;
        s.jewel = shoe.jewel;
        s.initials = shoe.initials;
        s.status = shoe.status;
        s.userName = shoe.userName;
        s.userAddress = shoe.userAddress;
        s.userEmail = shoe.userEmail;

        await s.save();

        res.json({
            status: "success",
            message: "POST shoe successfull",
            data: [
                {
                    shoe: s,
                }
            ]
        });
    } catch (err) {
        res.json({
            status: "error",
            message: "DELETE Shoe not successful",
            data: [{
                errormessage: err.message,
            }],
        });
    }
};

const deleteShoe = async (req, res) => {
    //TODO: add admin authentication
    try{
        let shoe = await Shoe.findByIdAndDelete(req.params.id);
        res.json({
            status: "success",
            message: "DELETE shoe successful",
            data: [{
                shoe: shoe,
            }],
        });
    } catch (err) {
        res.json({
            status: "error",
            message: "DELETE Shoe not successful",
            data: [{
                errormessage: err.message,
            }],
        });
    }
}

const updateStatus = async (req, res) => {
    try{
        let shoe = await Shoe.findByIdAndUpdate(req.params.id);
        shoe.status = req.body.status;
        await shoe.save();
        res.json({
            status: "success",
            message: "UPDATE shoe successful",
            data: [{
                shoe: shoe,
            }],
        });
    } catch (err) {
        res.json({
            status: "error",
            message: "UPDATE shoe not successful",
            data: [{
                errormessage: err.message,
            }],
        });
    }
};

const getShoeById = async (req, res) => {
    try{
        let shoe = await Shoe.findById(req.params.id);
        res.json({
            status: "success",
            message: "GET shoe successful",
            data: [{
                shoe: shoe,
            }],
        });
    } catch (err) {
        res.json({
            status: "error",
            message: "GET shoe not successful",
            data: [{
                errormessage: err.message,
            }],
        });
    }
};

const getShoes = async (req, res) => {
    try{
        let shoes = await Shoe.find();
        res.json({
            status: "success",
            message: "GET shoes successful",
            data: shoes,
        });
    } catch (err) {
        res.json({
            status: "error",
            message: "GET shoes not successful",
            data: [{
                errormessage: err.message,
            }],
        });
    }
}


module.exports.createShoe = createShoe;
module.exports.deleteShoe = deleteShoe;
module.exports.updateStatus = updateStatus;
module.exports.getShoes = getShoes;
module.exports.getShoeById = getShoeById;