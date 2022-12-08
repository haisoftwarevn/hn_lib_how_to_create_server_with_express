import { hn_get_variables_from_get } from "../../models/hn.json.models.js";

const hn_json_post_controller = (req, res) => {
  let obj = hn_get_variables_from_get(req);
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(JSON.stringify(obj, null, 3));
};

export default hn_json_post_controller;
