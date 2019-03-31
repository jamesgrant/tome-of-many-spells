const bucketUrl = 'https://tome-of-many-spells.ams3.digitaloceanspaces.com';

async function assetsHandler(request) {
  const requestUrl = new URL(request.url);
  const bucketPath = requestUrl.pathname.replace(/^\/assets/, '');
  
  const body = await fetch(bucketUrl + bucketPath)
    .then(response => response.text())
    .catch(error => console.log(error.message));
  
  const opts = {
    headers: { 'Content-Type': 'application/javascript; charset=utf-8' }
  };
  
  return new Response(body || '// There was an error', opts);
}

export default assetsHandler;
