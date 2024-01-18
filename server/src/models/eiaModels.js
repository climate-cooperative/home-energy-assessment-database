// Initialize Mongoose
const mongoose = require('mongoose');

const emissionSchema = new mongoose.Schema({
    period: Number,
    stateid: String,
    'co2-rate-lbs-mwh': Number,
});

const costSchema = new mongoose.Schema({
    period: Date,
    abbr: String,
    product: String,
    price: Number,
});

const breakdownSchema = new mongoose.Schema({
    period: Date,
    location: String,
    fueltypeid: String,
    'consumption-for-eg-btu': Number,
});
    

module.exports = {
    emissionSchema,
    electricityCostSchema,
    costSchema,
    breakdownSchema
};
