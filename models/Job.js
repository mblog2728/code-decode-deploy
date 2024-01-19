const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
	language: {
		type: String,
		required: true,
		enum: ["cpp", "py", "java", "go", "js"],
	},
	filepath: {
		type: String,
		required: true,
	},
	submittedAt: {
		type: Date,
		default: Date.now(),
	},
	status: {
		type: String,
		default: "pending",
		enum: ["pending", "success", "error"],
	},
	startedAt: Date,
	completedAt: Date,
	output: String,
	input: String,
});

const Job = mongoose.model("Job", JobSchema);

module.exports = Job;
