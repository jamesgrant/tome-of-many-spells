/**
 * Extract query params from a Request object
 * @param {Request}
 * @return {object}
 */
function extractQueryParams(request) {
  const url = request.url;
  const urlParts = url.split('?', 2)
  const params = {}

  if (urlParts.length === 2) {
    const paramString = urlParts[1];
    paramString.split('&').map(param => {
      const parts = param.split('=')
      params[parts[0]] = parts[1] || true
    })
  }

  return params
}

export default extractQueryParams
