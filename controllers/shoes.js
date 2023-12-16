const Shoes = require("../../../models/Shoe");

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
            message: "Shoe created successfully",
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
            message: err.message,
        });
    }
};

module.exports.createShoe = createShoe;
