const mongoose=require('mongoose')

const placeSchema=new mongoose.Schema([
    {
        id: Number,
        country: String,
        city: String,
        image: blob,
        rating: String,
        seeMoreButton: String
    }
]);

const PModel=mongoose.model('PModel',placeSchema);