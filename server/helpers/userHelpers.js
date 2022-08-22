const Applications = require('../models/applicationsModels')
const mongoose = require('mongoose')

const ObjectId = mongoose.Types.ObjectId


module.exports = {
    registerApplication: (details, userId) => {
        details.userId=userId                     
        details.status='new'
        // details.isSubmitted = true
        return new Promise(async (resolve, reject) => {
            Applications.create({...details })
                .then((response) => {
                    resolve({ 'status': 200, response: response })
                })
                .catch((response) => {
                    reject({ 'status': 500, response: response })
                })
        })
    }
}