const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'El email es requerido.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'El password es requerido.']
    },
    userName: {
      type: String,
      required: true
    },
    profileImg: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
