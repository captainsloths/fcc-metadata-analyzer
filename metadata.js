//implement microservice
export function parse(req, res) {
    let requestData = {
        "size": req.file.size
    };
    res.send(requestData);
}