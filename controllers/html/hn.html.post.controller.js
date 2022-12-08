import { hn_get_variables_from_req } from "../../models/hn.html.models.js";

const hn_html_post_controller = (req, res) => {
  let obj = hn_get_variables_from_req(req);

  res.render("body", {
    my: obj,
  });
};

export default hn_html_post_controller;
