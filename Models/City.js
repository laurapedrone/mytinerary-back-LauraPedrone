import {Schema, model} from "mongoose";

const citySchema= Schema({
    name: {type: String, require: true, default: 'Titulo por defecto'} ,
    country: {type: String, require: true},
    flag: {type: String, require: true},
    image: {type: String, require: true},
    imageCover:{type: String},
    description: {type: String, require: true},
    excursion_price: {type: Number},
    // itinerary:{type: moongosee.Types.Object, ref: 'Itinerary', require: true}, 
},{
    timestamps: true
})

const City = model('city', citySchema)

export default City