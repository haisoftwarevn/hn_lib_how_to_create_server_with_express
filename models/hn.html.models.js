export const hn_get_variables_from_req = (req) => {
  let obj = {};
  obj.body_id = req.body.id || "";
  obj.body_name = req.body.name || "";
  obj.params_id = req.params.id || "";

  return obj;
};
