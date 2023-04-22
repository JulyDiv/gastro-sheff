import { program } from "./data/program";
//import { expressFit } from "./data/program";

export default function handler(req, res) {
  res.status(200).json(program);
  //res.status(200).json(expressFit);
}