function indexHandler(request) {
  const url = new URL(request.url);
  const body = `
    <!DOCTYPE html>
    <html>
    <head>
      <link rel="stylesheet" href="/assets/app.css" />
    </head>
    <body>
      <div id="app-container"></div>
      <script src="/assets/front.js"></script>
    </body>
    <html>
  `;
  const opts = {
    headers: { 'Content-Type': 'text/html; charset=utf-8' }
  };
  
  const response = new Response(body, opts);
  return response;
}

export default indexHandler;
