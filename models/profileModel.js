const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: "User" },
        bio: { type: String, required: true },
        social: {
            facebook: { type: String },
            twitter: { type: String },
            youtube: { type: String },
            instagram: { type: String },
        },
    },
    { timestamps: true }
);
const profileModel = mongoose.model("Profile", profileSchema);

module.exports = profileModel;
