const { Schema, model, default: mongoose } = require("mongoose");

const reviewSchema = new Schema(

    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        rentReview: {
            type: Schema.Types.ObjectId,
            ref: "Rent"
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },

    },
    {
        timestamps: true
    }
);

const Review = model("Review", reviewSchema);

module.exports = Review;