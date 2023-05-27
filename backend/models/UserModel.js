import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "moderator", "general"],
    default: "general",
  },
  tags: {
    type: [String],
    default: [],
    validate: {
      validator: function (tags) {
        return this.role === "general" ? tags.length > 0 : true;
      },
      message: "Tags are only applicable for general users.",
    },
  },
  created: {
    type: Date,
    default: Date.now,
  },
  polls: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Poll",
    },
  ],
});

UserSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();

    const hashed = await bcrypt.hash(this.password, 10);
    this.password = hashed;
    return next();
  } catch (error) {
    return next(error);
  }
});

UserSchema.methods.comparePassword = async function (attempt, next) {
  try {
    return await bcrypt.compare(attempt, this.password);
  } catch (error) {
    next(error);
  }
};

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;
