const { Schema, model, default: mongoose } = require("mongoose");

const reviewSchema = new Schema(

    {
        owner: {
            type: mongoose.Types.ObjectId,
            ref: "User"
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Review = model("Review", reviewSchema);

module.exports = Review;