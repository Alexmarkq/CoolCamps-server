const { Schema, model } = require("mongoose")

const rentSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        },
        location: {
            type: {
                type: String
            },
            coordinates: [Number]
        },
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
