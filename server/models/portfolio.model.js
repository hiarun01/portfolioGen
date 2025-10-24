import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema(
  {
    personalInfo: {
      fullName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      about: {
        type: String,
        required: true,
      },
    },
    skills: {
      type: String,
      required: true,
    },

    projects: [
      {
        name: {type: String, required: true},
        description: {type: String, required: true},
        liveUrl: {type: String, required: true},
        githubUrl: {type: String, required: true},
      },
    ],
    experience: [
      {
        jobTitle: String,
        company: String,
        location: String,
        startDate: Date,
        endDate: Date,
        description: String,
      },
    ],
  },
  {timestamps: true}
);

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

export default Portfolio;
