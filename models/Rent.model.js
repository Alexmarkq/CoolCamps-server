const { Schema, model } = require("mongoose")


const rentSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'El nombre es obligatorio.']
        },
        description: {
            type: String,
            required: [true, 'La descripción es obligatoria.'],
            minlength: [15, 'La descripción debe tener min. 15 caracteres.']
        },
        price: {
            type: Number,
            required: [true],
            min: [1, 'El precio es obligatorio.']
        },
        imageUrl: {
            type: String,
            required: [true, 'La imagen es obligatoria.']
        },
        location: {
            type: {
                type: String
            },
            coordinates: [Number]
        },
        city: {
            type: String,
            required: [true, 'La ciudad es obligatoria.'],
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        state: {
            type: String,
            enum: ['Enable', 'Disable'],
            defaul: 'Enable'
        }
    },
    {
        timestamps: true
    }
)

rentSchema.index({ location: "2dsphere" })

const Rent = model("Rent", rentSchema)

module.exports = Rent
