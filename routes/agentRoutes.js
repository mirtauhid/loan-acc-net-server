const express = require('express')
const router = express.Router()

const { agentRegistration, getAllAgentData, getAgentByQueryParam, deleteAgent, updatedAgent } = require('../controllers/agent')


router.post('/agent', agentRegistration)
router.get('/agentAllData', getAllAgentData)
router.get('/getAgentByQueryParam/:id', getAgentByQueryParam)
router.post('/update/:id', updatedAgent)
router.post('/deleteAgent/:id', deleteAgent)

module.exports = router