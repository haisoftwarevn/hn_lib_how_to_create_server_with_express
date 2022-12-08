import express from "express";
const hn_json_router = express.Router();

////////////////////////////

import hn_json_post_controller from "../controllers/json/hn.json.post.controller.js";

import hn_json_get_controller from "../controllers/json/hn.json.get.controller.js";
//////////////////////////////////

hn_json_router.get("/", hn_json_get_controller);

hn_json_router.get("/:id", hn_json_get_controller);

hn_json_router.post("/", hn_json_post_controller);

export default hn_json_router;
