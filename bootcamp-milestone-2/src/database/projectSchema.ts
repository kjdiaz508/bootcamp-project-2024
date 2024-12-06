import mongoose, { Schema } from "mongoose";

export type ProjectType = {
  name: string;
  description: string;
  date: Date;
  image: string;
  image_alt: string;
};
const projectSchema = new Schema<ProjectType>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  image: { type: String, required: true },
  image_alt: { type: String, required: true },
});

const PortfolioModel =
  mongoose.models["projects"] || mongoose.model("projects", projectSchema);
export default PortfolioModel;
