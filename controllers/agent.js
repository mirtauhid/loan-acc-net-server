const Agent = require('../model/agent')
const shortid = require('shortid')

exports.agentRegistration = (req, res) => {
    const { name, email, password } = req.body
    Agent.findOne({ email: req.body.email }).exec((error, user) => {
        if (user) {
            return res.status(400).json({ error: "Email has Taken" })
        }
        else {
            console.log(error);
        }
        const { name, email, address, phoneNumber, state, zipcode } = req.body
        const agentId = shortid.generate()
        const username = name + "Agent" + agentId;
        const profile = `${process.env.CLIENT_URL}/profile/${agentId}`
        const newAgent = new Agent({ name, email, address, phoneNumber, state, zipcode, agentId, profile, username })
        newAgent.save((error, data) => {
            if (error) {
                return res.status(400).json({ message: error })
            }
            if (data) {
                return res.status(201).json({
                    message: "Agent Request Success ! You will know through email about confirmation"
                })
            }

        })
    })
}

exports.getAllAgentData = (req, res) => {
    Agent.find({}).exec((error, agents) => {
        if (error) {
            return res.status(400).json({ error });
        }
        if (agents) {
            return res.status(200).json({ agents });
        }
    });
};


exports.getAgentByQueryParam = (req, res) => {
    const { id } = req.params;
    Agent.findOne({ _id: id }).exec((error, agent) => {
        if (error) {
            return res.status(400).json({ error });
        }
        if (agent) {
            return res.status(200).json({ agent });
        }
    });
};
exports.updatedAgent = async (req, res, next) => {
    const { name, agentId } = req.body;
    const agent = {
        name, agentId
    };
    const id = req.params.id;
    await Agent.findOneAndUpdate(id, agent, {
        new: true
    },
        function (err, updateData) {
            if (!err) {
                res.status(201).json({
                    data: updateData
                });
            } else {
                res.status(500).json({
                    message: "not found any relative data"
                })
            }
        });
}

exports.deleteAgent = async (req, res) => {
    const { id } = req.params;
    const deletedAgent = await Agent.deleteOne({ _id: id });
    return res.status(201).json({ deletedAgent });
};