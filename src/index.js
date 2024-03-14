// import application and create the server
require('dotenv').config();
const app = require('./app');

// server port number
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});


