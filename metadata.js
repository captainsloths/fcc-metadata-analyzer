//implement microservice
module.exports = {
    parse: function (req, res) {
        let requestData = {
            "name": req.file.originalname,
            "type": req.file.mimetype,
            "size": req.file.size
        }
        res.send(requestData);
    }
}