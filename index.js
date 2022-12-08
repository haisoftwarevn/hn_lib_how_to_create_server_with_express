import express from "express";
//////////////////// import hn module
import HNCONFIG from "./utils/hn.config.utils.js";
import hn_json_router from "./routers/hn.json.router.js";
import hn_html_router from "./routers/hn.html.router.js";
import hn_file_router from "./routers/hn.file.router.js";
import hn_json_middleware from "./middlewares/hn.json.middleware.js";
import hn_html_middleare from "./middlewares/hn.html.middleware.js";
import hn_file_middleware from "./middlewares/hn.file.middleware.js";

//////////////////////
const app = express();
/////////////////////
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
/////////////////// app.use hn module
app.use("/json", hn_json_middleware, hn_json_router);
app.use("/html", hn_html_middleare, hn_html_router);
app.use("/file", hn_file_middleware, hn_file_router);
//////////////////////
app.listen(HNCONFIG.port, () => {
  console.log(HNCONFIG.listenning_message + HNCONFIG.port);
});
