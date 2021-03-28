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

export default model("Match", MatchSchema);
