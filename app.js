const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { StatusCodes } = require("http-status-codes");

const app = express();

const {
    errorRouteNotFound,
    errorInternalServer,
    errorHandlerMiddleware,
    logHandler,
} = require("./app/middleware");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(logHandler);

const CMS_API_V1 = "/api/v1/cms";
const {
    categoriesRouter,
    talentsRouter,
    imagesRouter,
    eventsRouter,
    paymentsRouter,
    authRouter,
    organizersRouter,
} = require("./app/routers");

// routes-list...
app.get("/", (req, res) => {
    res.status(StatusCodes.OK).json({
        message: "Welcome to api semina",
    });
});
app.use(
    CMS_API_V1,
    categoriesRouter,
    talentsRouter,
    imagesRouter,
    eventsRouter,
    paymentsRouter,
    organizersRouter,
    authRouter
);

// register middleware API error handling
app.use(errorRouteNotFound);
app.use(errorHandlerMiddleware);
app.use(errorInternalServer);

module.exports = app;
