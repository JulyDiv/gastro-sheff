import { program } from "./data/program";

export default function handler(req, res) {
  res.status(200).json(program);
}
