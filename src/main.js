import handleRequest from './handleRequest'
import handleError from './handleError'

// Listen for requests.
addEventListener('fetch', event => {
  console.log('hello')
  try {
    event.respondWith(handleRequest(event.request))
  } catch (error) {
    event.respondWith(handleError(error, event.request))
  }
})
