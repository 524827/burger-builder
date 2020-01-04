function sendResponse(res, data, msg, error) {
  let response = {
    code: 200,
    msg: '',
    result: data,
  };

  response.msg = msg;

  if (error) {
    response.code = 404;
    response.msg = 'Something went wrong!';
  }

  res.status(response.code).json(response);
}

module.exports = sendResponse;