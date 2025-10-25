import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema(
  {
    hero: {
      fullName: {type: String, required: true},
      profileImage: {type: String, required: true},
      about: {type: String, required: true},
    },

    skills: {
      skills: [{type: String, required: true}],
    },

    portfolio: [
      {
        id: {type: Number, required: true},
        title: {type: String, required: true},
        description: {type: String, required: true},
        image: {type: String, required: true},
      },
    ],

    contact: {
      email: {type: String, required: true},
      phone: {type: String, required: true},
      message: {type: String, required: true},
    },
  },
  {
    timestamps: true,
  }
);

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

export default Portfolio;
