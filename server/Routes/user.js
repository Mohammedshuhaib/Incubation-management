let express = require('express')
let router = express.Router();
const bcrypt = require('bcryptjs')
const User = require('../models/userModels')
const jwt = require('jsonwebtoken')
const userHelpers = require('../helpers/userHelpers')
const mongoose = require('mongoose')

const ObjectId = mongoose.Types.ObjectId




router.get('/', (req, res) => {
    res.send('hello wosaadrld')
})



router.post('/register', async (req, res) => {
    console.log(req.body);
    try {
        const newpassword = await bcrypt.hash(req.body.password, 10)
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: newpassword
        })
        res.json({ status: 200 })
    } catch (err) {
        console.log(err);

        res.json({ status: 400, error: "Duplicate email" })
    }
    finally {
        console.log('djsdjkjdh');
    }
})


router.post('/login', async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
    })
    //  console.log(user);
    if (!user) {
        // console.log(45657886543);

        return res.json({ status: 400, error: 'Invalid Login' })
    }

    const isUserValid = await bcrypt.compare(req.body.password, user.password)

    if (isUserValid) {
        const token = jwt.sign(
            {
                id: user._id,
                name: user.name,
                email: user.email,
                isSubmitted: user.isSubmitted
            },
            'secret123'
        )
        // console.log('logged in');
        return res.json({ status: 200, user: token, userDetails: user })
    } else {
        return res.json({ status: 400, user: false })

    }

})

router.post('/incubation/application/:id', async (req, res) => {
    console.log(req.params.id)

    User.updateOne({ _id: req.params.id }, { $set: { isSubmitted: true } }).then((res) => { console.log(res); })


    userHelpers.registerApplication(req.body, req.params.id)
        .then((response) => {
            return res.json(response)
        })
        .catch((response) => {
            return res.json(response)
        })

})



module.exports = router;