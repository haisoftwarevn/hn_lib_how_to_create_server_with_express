import express from "express";
const hn_html_router = express.Router();
///////////////
import hn_html_post_controller from "../controllers/html/hn.html.post.controller.js";

import hn_html_get_controller from "../controllers/html/hn.html.get.controller.js";
/////////////

hn_html_router.get("/", hn_html_get_controller);
hn_html_router.get("/:id", hn_html_get_controller);
hn_html_router.post("/", hn_html_post_controller);

export default hn_html_router;
