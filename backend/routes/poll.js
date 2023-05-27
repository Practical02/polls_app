import express from "express";
import PollModel from "../models/PollModel.js";
import auth from "../middleware/middleauth.js";
import UserModel from "../models/UserModel.js";

const router = express.Router();

router.post("/create", auth, async (req, res, next) => {
  try {
    console.log(req.decoded);
    const { _id } = req.decoded;
    const user = await UserModel.findById(_id);

    if (user.role !== "moderator") {
      throw new Error("Access denied. Only moderators can create polls.");
    }

    const { question, options } = req.body;
    const poll = await PollModel.create({
      user,
      question,
      options: options.map((option) => ({
        option,
        votes: 0,
      })),
      approved: false,
    });

    user.polls.push(poll._id);
    await user.save();

    res.status(201).json({ ...poll._doc, user: user._id });
  } catch (error) {
    error.status = 400;
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const { _id } = req.decoded;
    const user = await UserModel.findById(_id);
    const tags = user.tags || [];

    const polls = await PollModel.find({
      approved: true,
      tags: { $in: tags },
    }).populate("user", ["username", "_id"]);

    res.status(200).json(polls);
    console.log("Approved polls fetched for user with matching tags.");
  } catch (error) {
    error.status = 400;
    next(error);
  }
});

router.get("/user", auth, async (req, res, next) => {
  try {
    const { _id } = req.decoded;

    const user = await UserModel.findById(_id).populate("polls");

    res.status(200).json(user.polls);
  } catch (err) {
    return next({
      status: 400,
      message: err.message,
    });
  }
});

router.get("/:_id", async (req, res, next) => {
  try {
    const { _id } = req.params;
    console.log(_id);
    const poll = await PollModel.findById(_id).populate("user", [
      "username",
      "_id",
    ]);

    if (!poll) {
      throw new Error("No poll found.");
    }
    if (user.role === "general" && !poll.approved) {
      throw new Error("Access denied.");
    }

    res.status(200).json(poll);
  } catch (error) {
    error.status = 400;
    next(error);
  }
});

router.delete("/delete/:_id", auth, async (req, res, next) => {
  try {
    const { _id } = req.params;
    const { _id: userID } = req.decoded;
    const poll = await PollModel.findById(_id);

    if (!poll) throw new Error("No poll found.");
    if (poll.user.toString() !== userID) {
      throw new Error("Unauthorized access.");
    }
    await poll.remove();
    res.status(202).json(poll);
    console.log("Poll deleted.");
  } catch (error) {
    error.status = 400;
    next(error);
  }
});

router.post("/vote/:_id", auth, async (req, res, next) => {
  try {
    const { _id: pollID } = req.params;
    const { _id: userID } = req.decoded;
    const { answer } = req.body;
    if (answer) {
      const poll = await PollModel.findById(pollID);
      if (!poll) throw new Error("No answer given.");
      if (!poll.approved) {
        throw new Error("This poll is not approved yet.");
      }

      const vote = poll.options.map((op) => {
        if (op.option === answer) {
          return {
            option: op.option,
            _id: op._id,
            votes: op.votes + 1,
          };
        } else {
          return op;
        }
      });

      if (poll.voted.filter((user) => user.toString() === userID).length <= 0) {
        poll.voted.push(userID);
        console.log(`Voted by userID ${userID}.`);
        poll.options = vote;
        await poll.save();
        res.status(201).json(poll);
      } else throw new Error("Already voted.");
    } else {
      throw new Error("No answer provided.");
    }
  } catch (error) {
    error.status = 400;
    next(error);
  }
});

router.put("/approve/:_id", auth, async (req, res, next) => {
  try {
    const { _id: pollID } = req.params;
    const { _id: userID, role } = req.decoded;

    if (role !== "admin") {
      throw new Error("Access denied. Only admins can approve polls.");
    }

    const poll = await PollModel.findById(pollID);

    if (!poll) {
      throw new Error("No poll found.");
    }

    poll.approved = true;
    await poll.save();

    res.status(200).json(poll);
  } catch (error) {
    error.status = 400;
    next(error);
  }
});

export default router;
