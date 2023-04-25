const swagger_auto_gen = require('swagger-autogen');
const outputFile = './swagger_output.json';
const endpointsFiles = ['./server.js'];

const docs = {
    info: {
        version: "1.0.0",
        title: "PhotoSite",
        description: "API para postagem de fotos"
    },
    host: "localhost:8082",
    schemes: ['http'],
};

swagger_auto_gen(outputFile, endpointsFiles, docs);