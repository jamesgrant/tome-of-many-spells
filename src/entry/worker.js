import "@babel/polyfill";
import handleRequest from './worker/handleRequest'
import handleError from './worker/handleError'

// Listen for requests.
addEventListener('fetch', event => {
  try {
    event.respondWith(handleRequest(event.request))
  } catch (error) {
    event.respondWith(handleError(error, event.request))
  }
})
