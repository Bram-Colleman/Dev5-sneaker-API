const Shoes = require("../models/Shoe");

const createShoe = async (req, res) => {
    console.log('Request Body:', req.body);
    try{
        let shoe = req.body;
        if (!shoe) {
            return res.status(400).json({
                status: "error",
                message: "Shoe data not provided in the request body",
            });
        }
        let s = new Shoes();
        s.brand = shoe.brand;
        s.outside_1Color = shoe.outside_1Color;
        s.outside_2Color = shoe.outside_2Color;
        s.lacesColor = shoe.lacesColor;
        s.sole_1Color = shoe.sole_1Color;
        s.sole_2Color = shoe.sole_2Color;
        s.insideColor = shoe.insideColor;
        s.size = shoe.size;
        s.price = shoe.price;
        s.status = shoe.status;
        await s.save();

        res.json({
            status: "success",
            message: "POST shoe successfull",
            data: [
                {
                    brand: s.brand,
                    outside_1Color: s.outside_1Color,
                    outside_2Color: s.outside_2Color,
                    lacesColor: s.lacesColor,
                    sole_1Color: s.sole_1Color,
                    sole_2Color: s.sole_2Color,
                    insideColor: s.insideColor,
                    size: s.size,
                    price: s.price,
                    status: s.status,
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
        let shoe = await Shoes.findByIdAndDelete(req.params.id);
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

const getShoes = async (req, res) => {
    try{
        let shoes = await Shoes.find();
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
module.exports.getShoes = getShoes;