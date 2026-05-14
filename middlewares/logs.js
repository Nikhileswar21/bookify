function logs(req, res, next){
    console.log(`[REQ] : ${req.method} : ${req.path}`);
    next();
}

function AnotherLog(methodName){
    return function(req, res, next){
        if(req.method === methodName){
            console.log(`[REQ] : ${req.method} : ${req.path}`);
        }
        next();
    }
}


module.exports = {
    logs,
    AnotherLog
}    