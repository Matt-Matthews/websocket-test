const express = require('express');
const { createServer } = require('node:http');
const { Server } = require('socket.io');
const cors = require('cors')

const app = express();


app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}))


const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*', // Allow your client origin
    methods: ['GET', 'POST'], // Allowed HTTP methods
  },
});


app.get('/', (req, res) => {
  res.send("Connected");
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});