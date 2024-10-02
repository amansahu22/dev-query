import { Document, model, models, Schema } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  password?: string;
  bio?: string;
  avatar: string;
  location?: string;
  portfolio_website?: string;
  reputation?: number;
  savedPost: Schema.Types.ObjectId[];
  joinedAt: Date;
}

const UserSchema = new Schema({
  clerkId: { type: String, require: true },
  name: { type: String, require: true },
  username: { type: String, require: true, unique: true },
  email: { type: String, require: true, unique: true },
  password: { type: String },
  bio: { type: String },
  avatar: { type: String, require: true },
  location: { type: String },
  portfolio_website: { type: String },
  reputation: { type: Number, default: 0 },
  savedPost: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  joinedAt: { type: Date, default: Date.now() },
});

const User = models.User || model("User", UserSchema);

export default User;
