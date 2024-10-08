const { Router } = require('express')
const personaRoutes = require('./persona.routes')

const router = Router()

router.use('/personas', personaRoutes)

module.exports = router