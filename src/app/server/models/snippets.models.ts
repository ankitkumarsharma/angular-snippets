import mongoose from "mongoose";

const snippetsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    coverImage: {
        type: String,
        required: true,
    },
    tagList: {
        type: [String],
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
},{timestamps: true});

const Snippets = mongoose.model("Snippets", snippetsSchema);

export default Snippets;