const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = Schema({
    title : {
        type : String,
        required : true
    },
    description : String,
    image : {
        type : Object,
        default : "https://unsplash.com/photos/a-man-standing-on-top-of-a-lush-green-hillside-h1q2CM-at0Q",
        set : (v) => v === "" ? "https://unsplash.com/photos/a-man-standing-on-top-of-a-lush-green-hillside-h1q2CM-at0Q" : v,
    },
    price : Number,
    location : String,
    country : String
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;