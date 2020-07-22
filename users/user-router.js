const router = require("express").Router();

const Users = require("./user-model.js");

router.get("/", (req, res) => {
    const {name, department} = req.body
    Users.find()
        .then(users => {
            res.status(200).json({ data: `${users.name, users.department}`, jwt: req.jwt });
        })
        .catch(err => res.send(err));
});

module.exports = router;
