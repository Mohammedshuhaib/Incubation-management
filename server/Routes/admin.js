let express = require('express')
let router = express.Router();
const bcrypt = require('bcryptjs')
// const User = require('../models/userModels')
const Admin = require('../models/adminModels')
const jwt = require('jsonwebtoken')
const adminHelpers = require('../helpers/adminHelpers');
const { response } = require('express');

router.get('/applicants/list', (req, res) => {
    adminHelpers.applicantList()
        .then((response) => {
            return res.json({ status: 200, data: response })
        })
        .catch((response) => {
            return res.json({ status: 500, data: 'error' })
        })
})

router.post('/login', async (req, res) => {
    const admin = await Admin.findOne({
        email: req.body.email,
    })
    console.log(admin);
    if (!admin) {
        // console.log(45657886543);

        return res.json({ status: 400, error: 'Invalid Login' })
    }

    const isAdminValid = await bcrypt.compare(req.body.password, admin.password)

    if (isAdminValid) {
        const token = jwt.sign(
            {
                // id:admin._id,
                name: admin.name,
                email: admin.email,
            },
            'secret123'
        )
        // console.log('logged in');
        return res.json({ status: 200, admin: token, adminDetails: admin })
    } else {
        return res.json({ status: 400, admin: false })

    }

})

router.get('/user/status/change', (req, res) => {
    // console.log(req.query);
    adminHelpers.changeStatus(req.query)
        .then((response) => {
            return res.json(response)
        })
        .catch((err) => {
            return res.json(err)
        })
})

router.get('/view/recordList', (req, res) => {
    adminHelpers.getRecordList()
        .then((recordList) => {
             return res.json(recordList)
        }).catch((err) => {
            return res.json(err)
        })
})

router.get('/slots',(req,res)=>{
    adminHelpers.getSlots(response)
    .then((response)=>{
          return res.json(response)
    })
    .catch((response)=>{
        return res.json(response)
    })
})


router.get('/slot/update',(req,res)=>{
    
    req.query.slotId=parseInt(req.query.slotId)
    console.log(req.query);
    adminHelpers.updateSlot(req.query)
    .then((response)=>{
        console.log(response);
    })
    .catch((err)=>{
        console.log(err);
    })
})


module.exports = router;