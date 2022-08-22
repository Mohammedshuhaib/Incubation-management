const Applications = require('../models/applicationsModels')
const mongoose = require('mongoose')
const Slots = require('../models/slotModels')
const ObjectId = mongoose.Types.ObjectId





module.exports = {
    applicantList: () => {
        return new Promise(async (resolve, reject) => {
            await Applications.find()
                .then((response) => {
                    resolve(response)
                })
                .catch((response) => {
                    reject(response)
                })

        })
    },
    changeStatus: ({ id, status }) => {
        return new Promise(async (resolve, reject) => {
            await Applications.updateOne({ _id: id }, { $set: { status: status } }).then((res) => {
                // console.log(res);
                resolve({ status: 200 })
            })
                .catch((err) => {
                    reject({ status: 500, error: err })
                })
        })
    },
    getRecordList: () => {
        return new Promise((resolve, reject) => {
            Applications.find({ status: "approved" })
                .then((response) => {
                    resolve({ status: 200, data: response })
                })
                .catch((err) => {
                    reject((err) => {
                        reject({ status: 500, error: err })
                    })
                })
        })
    },
    getSlots: () => {
        return new Promise(async (resolve, reject) => {
            await Slots.find()
                .then((response) => {
                    resolve({ status: 200, data: response })
                })
                .catch((err) => {
                    reject({ status: 500, data: err })
                })

        })
    },
    updateSlot: ({ applicantId, slotId, slotSection }) => {
        return new Promise(async(resolve, reject) => {

             Applications.updateOne({_id:applicantId},{$set : {isBooked : true}}).then((res)=>{
                // console.log(res);
            })


            Slots.updateOne({ slot: slotId, section: slotSection },
                {
                    $set: {  
                        userId: applicantId,
                        isBooked: true
                    }
                }
            ).then((response) => {
                console.log(response);
                resolve({ status: 200, data: response });
            })
                .catch((err) => {
                    reject({ status: 500, data: err })
                })
        })

    }
}