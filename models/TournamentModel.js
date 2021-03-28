import mongo from "mongoose";
const { Schema: _Schema, model } = mongo;
const Schema = _Schema;

const MatchSchema = new Schema({
  tournamentId: { type: String, required: true },
  team1: { type: String, required: true },
  team2: { type: String, required: true },
  time: { type: String, required: true },
  venue: { type: String },
  winner: { type: String },
  isStarted: { type: Boolean },
  team1Squard: [{ type: Schema.ObjectId, ref: "User" }],
  team2Squard: [{ type: Schema.ObjectId, ref: "User" }],
});

// var UserSchema = new Schema({
//   userName: { type: String, required: true },
//   mobileNumber: { type: Number, required: true },
// });

const TournamentSchema = new Schema(
  {
    title: { type: String, required: true },
    matches: [MatchSchema],
    users: [{ type: Schema.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

export default model("Tournament", TournamentSchema);
