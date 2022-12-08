const hn_json_middleware = (req, res, next) => {
  console.log("first run json");
  next();
};

export default hn_json_middleware;
