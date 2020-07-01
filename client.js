var PROTO_PATH = __dirname + '/chat.proto';

var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');

var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });

   var chat = grpc.loadPackageDefinition(packageDefinition).chat;

   function main() {
    var client = new chat.ChatService('localhost:9000',
                                         grpc.credentials.createInsecure());

    client.sayHello({body: "Hello From Client!"}, function(err, response) {
      console.log('Greeting:', response.body);
    });
  }
  
  main();