const {
    authentication,
    participantAuthentication,
    authorization,
} = require("./auth");
const errorHandlerMiddleware = require("./error");
const logHandler = (req, res, next) => {
    console.log(
        `\nStarted ${req.method} "${req.originalUrl}" for ${
            req.ip
        } at ${new Date().toISOString()}`
    );

    const authHeader = req.headers["authorization"];
    if (
        authHeader !== null &&
        authHeader !== "" &&
        typeof authHeader !== "undefined"
    ) {
        const authorization = authHeader.includes("Bearer ")
            ? "Bearer xxx"
            : "xxx";

        console.log(`Authorization: ${authorization}`);
    }

    if (req.body instanceof Object && Object.keys(req.body).length > 0) {
        let bJSON = JSON.parse(JSON.stringify(req.body));
        if (req.body.password !== null && req.body.password !== undefined) {
            bJSON.password = "********";
        }

        if (
            req.body.confirmPassword !== null &&
            req.body.confirmPassword !== undefined
        ) {
            bJSON.confirmPassword = "********";
        }

        console.log(JSON.stringify(bJSON, null, 4));
    }

    next();
};

const errorRouteNotFound = (req, res, next) => {
    return res.status(404).json({ msg: "Route does not exist" });
};

const errorInternalServer = (err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    return res.status(err.status || 500).json({ msg: err.message });
};

module.exports = {
    errorRouteNotFound,
    errorInternalServer,
    errorHandlerMiddleware,
    authentication,
    participantAuthentication,
    authorization,
    logHandler,
};
