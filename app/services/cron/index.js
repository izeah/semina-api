const Images = require("../../api/v1/images/model");
const Events = require("../../api/v1/events/model");
const Orders = require("../../api/v1/orders/model");
const Payments = require("../../api/v1/payments/model");
const Talents = require("../../api/v1/talents/model");
const cron = require("node-cron");
const { deleteImage } = require("../mongoose/images");

// 0 0 * * * => everyday at 00:00
const autoDeleteUnusedImages = cron.schedule("0 0 * * *", async function () {
    console.log("Service: Auto Delete Unused Images");

    // get all images documents ObjectID
    const imagesData = await Images.find({}).select("_id");

    for (let i = 0; i < imagesData.length; i++) {
        const data = imagesData[i];

        // get images on events
        const eventsImages = await Events.countDocuments({
            image: data._doc._id,
        });
        console.log(
            `event image with ID ${data._doc._id} found with ${eventsImages} datas`
        );

        // get images on orders
        const ordersImages = await Orders.countDocuments({
            "historyEvent.image": data._doc._id,
        });
        console.log(
            `order image with ID ${data._doc._id} found with ${ordersImages} datas`
        );

        // get images on payments
        const paymentsImages = await Payments.countDocuments({
            image: data._doc._id,
        });
        console.log(
            `payment image with ID ${data._doc._id} found with ${paymentsImages} datas`
        );

        // get images on talents
        const talentsImages = await Talents.countDocuments({
            image: data._doc._id,
        });
        console.log(
            `talent image with ID ${data._doc._id} found with ${talentsImages} datas`
        );

        // if no image on events, orders, payments, talents, then delete image
        if (
            eventsImages === 0 &&
            ordersImages === 0 &&
            paymentsImages === 0 &&
            talentsImages === 0
        ) {
            console.log(`delete image with ID ${data._doc._id}`);
            deleteImage(data._doc._id);
        }
    }
});

module.exports = {
    autoDeleteUnusedImages,
};
