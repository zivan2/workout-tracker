let express = require('express')
let router = express.Router()
let path = require('path')

router.use('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
})

router.use('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'))
})

router.use('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')))


module.exports = router