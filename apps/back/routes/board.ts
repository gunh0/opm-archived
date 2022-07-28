import mongoose from "mongoose";

const boardModel = new mongoose.Schema({
  a_id: "string",
  u_id: "string",
  a_title: "string",
  a_description: "string",
  a_content: "string",
  a_category: "string",
  a_editList: "string",
  a_editDate: "string",
  a_status: "string",
  e_id: "string",
  a_hit: "string",
});

boardModel.set("collection", "Board");

const Board = mongoose.model("Board", boardModel);

export const showAllBoard = async (_, res) => {
  const allBoard = await Board.find();
  console.log(allBoard);
  return res.json(allBoard);
}