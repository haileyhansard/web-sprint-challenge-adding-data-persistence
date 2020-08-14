const server = require('./server');

const PORT = process.env.PORT || 7000;

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT} for Sprint Week 2...`);
});