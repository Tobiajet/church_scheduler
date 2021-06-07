import mongoose from "../database/index.js";

const workerSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model("worker", workerSchema);