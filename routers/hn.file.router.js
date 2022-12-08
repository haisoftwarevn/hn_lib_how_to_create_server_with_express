import express from "express";
const hn_file_router = express.Router();

////////////////////////////////////////////

import hn_file_post_controller from "../controllers/file/hn.file.post.controller.js";
import hn_file_get_controller from "../controllers/file/hn.file.post.controller.js";

////////////////////////////////////////////

hn_file_router.get("/:id", hn_file_get_controller);

hn_file_router.get("/", hn_file_get_controller);

hn_file_router.post("/", hn_file_post_controller);

export default hn_file_router;
