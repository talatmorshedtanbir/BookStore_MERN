const router = require('express').Router()
const bookRoutes = require('../controllers/books/book-controller')

module.exports = (() => {
  router.use('/api/books', bookRoutes)

  // Send all requests to React app.
  router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
  })

  return router
})()