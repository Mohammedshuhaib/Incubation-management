const mongoose = require('mongoose')


const Slots = new mongoose.Schema({
    slot: { type: Number, required: true },
    section: { type: String, required: true },
    isBooked: { type: Boolean, required: true },
    company: { type: String, required: true },
    userId: { type: String, required: true }
},
    {
        collection: 'slots'
    })

const model = mongoose.model('slots', Slots)

module.exports = model