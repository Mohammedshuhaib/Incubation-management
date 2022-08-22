const mongoose = require('mongoose')


const Applications = new mongoose.Schema({
    userId: { type: String, required: true ,unique:true},
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    companyName: { type: String, required: true },
    valueProposition: { type: String, required: true },
    competitors: { type: String, required: true },
    revenueModel: { type: String, required: true },
    marketSize: { type: String, required: true },
    marketing: { type: String, required: true },
    type: { type: String, required: true },
    bussinessProposal: { type: String, required: true },
    status: { type: String, required: true },
    isBooked : {type : Boolean},
    
},
    {
        collection: 'applications'
    })

const model = mongoose.model('applications', Applications)

module.exports = model