const Frisbee = require('frisbee');

const api = new Frisbee({
    baseURI : 'https://api.github.com',
    headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
    }

});

export default api;