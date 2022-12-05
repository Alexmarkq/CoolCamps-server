const { Schema, model } = require("mongoose")

const rentSchema = new Schema(
    {
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        price: {
            type: Number,
        },
        imageUrl: {
            type: String,
        },
        // location: {
        //     type: {
        //         type: String
        //     },
        //     coordinates: [Number]
        // },
        // owner: {
        //     type: mongoose.Types.ObjectId,
        //     ref: "User"
        // },
    },
    {
        timestamps: true
    }
)

// rentSchema.index({location:"2dsphere"})

const Rent = model("Rent", rentSchema)

module.exports = Rent
