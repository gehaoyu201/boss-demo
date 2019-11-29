module.exports = app => {
    const express = require('express')
    // const multer = require('multer')
    const router = express.Router({
        mergeParams: true
    })
    app.use('/rest/:resource', async (req, res, next) => {
        const modelName = require('inflection').classify(req.params.resource)
        req.Model = require(`../models/${modelName}`)
        next()
    }, router)

    //��
    router.post('/new', async (req, res) => {
        const data = await req.Model.create(req.body)
        res.send(data)
    })
    //��
    router.get('/list', async (req, res) => {
        const data = await req.Model.find().lean().populate('category')
        res.send(data)
    })
    //ɾ
    router.delete('/remove/:id', async (req, res) => {
        const data = await req.Model.findByIdAndDelete(req.params.id)
        res.send(data)
    })
    //��ָ��id
    router.get('/:id', async (req, res) => {
        const data = await req.Model.findById(req.params.id)
        res.send(data)
    })
    //��
    router.put('/:id', async (req, res) => {
        const data = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        res.send(data)
    })

    const multer = require('multer')
    const upload = multer({ dest: __dirname + '/../uploads' })
    app.post("/upload", upload.single("file"), async (req, res) => {
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })
    // app.get("/jobs/:wd", async (req, res) => {
    //     const Job = require('../models/Job')
    //     const data = await Job.findOne({ "name": req.params.wd })
    //     res.sedn(data)
    // })
    const User = require('../models/User')

    app.post("/register", async (req, res) => {
        const isUsername = await User.findOne({
            username: req.body.name
        });
        if (!isUsername) {
            req.body.password = require('bcryptjs').hashSync(req.body.password, 10)
            try {
                const data = await User.create(req.body)
                res.send(data)
            } catch{
                res.json({
                    status: 416
                })
            }
        } else {
            res.json({
                status: 418
            })
        }
    })
    const jwt = require('jsonwebtoken')
    app.post('/login', async (req, res) => {
        const user = await User.findOne({
            username: req.body.username
        })
        if (user) {
            if (require('bcryptjs').compareSync(req.body.password, user.password)) {
                const token = jwt.sign(req.body.password, "fheuhfwuehas")
                res.send({ token: token, username: req.body.username })
            } else {
                res.json({
                    status: 417
                })
            }
        } else {
            res.json({
                status: 418
            })
        }
    })
    app.post('/token', async (req, res) => {
        const token = req.body.token;
        const user = await User.findOne({
            username: req.body.username
        })
        const password = jwt.verify(token, "fheuhfwuehas");
        if (require('bcryptjs').compareSync(password, user.password)) {
            res.send(true)
        } else {
            res.send(false)
        }
    })
}