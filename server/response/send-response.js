/**
 * @function sendResponse - function for send response to client
 * @param {*} res - response object
 * @param {*} data - data to be send to client
 * @param {*} msg - message
 * @param {*} error - error
 */

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

  res.status(response.code).send(response);
}

module.exports = sendResponse;