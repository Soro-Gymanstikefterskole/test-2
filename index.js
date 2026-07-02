const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('<h1>Hej fra elev01! 🎉</h1><p>App kører på Coolify.</p>')
})

app.listen(port, '0.0.0.0', () => {
  console.log(`App kører på port ${port}`)
})
