To create APIs using node.js, follow below steps

Step 1 - Create package.json file use below command
npm init -y

Step 2 - Install express third party module to create APIs
npm i express

Step 3 - Create server.js file and write below code
import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000)

And in package.json add below line
"type": "module"

Step 4 - Run node.js using below command
node server.js