const hn_html_middleware = (req, res, next) => {
  console.log("first run html");
  next();
};

export default hn_html_middleware;
