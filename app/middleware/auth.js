const { jwtSecret } = require("../config");
const { Unauthenticated, Unauthorized } = require("../errors");
const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (
            authHeader === null ||
            authHeader === "" ||
            typeof authHeader === "undefined"
        )
            throw new Unauthenticated("Invalid authentication");

        const token = authHeader.startsWith("Bearer")
            ? authHeader.split(" ")[1]
            : authHeader;

        jwt.verify(
            token,
            jwtSecret,
            { algorithms: "HS512" },
            (err, payload) => {
                if (err)
                    throw new Unauthenticated(
                        err.message ||
                            "Unauthorized, please login with a valid credential"
                    );

                // Attach the user and his permissions to the req object
                req.user = {
                    id: payload.id,
                    name: payload.name,
                    email: payload.email,
                    role: payload.role,
                    organizer: payload.organizer,
                };

                next(err);
            }
        );
    } catch (err) {
        next(err);
    }
};

const authorization = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            throw new Unauthorized("Unauthorized to access this route");
        }

        next();
    };
};

module.exports = { authentication, authorization };
