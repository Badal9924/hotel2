const mongoose = require('mongoose');
const menuSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },

    price : {
        type : Number,
        required : true
    },

    taste : {
        type : String
    },

    is_drink : {
        type : Boolean
    },

    ingredients : {
        enum : ["chicken wings","chicken leg piece","tomato sauce","meoyonesse","spices"]
    },

    num_sales : {
        type : Number,
        required : true
    }
})

const menus = mongoose.model('menus',menuSchema);
module.exports = menus;