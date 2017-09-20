var items=require("./items.js"),
util=require('util'),
stdin=process.stdin,
stdout=process.stdout,
chunks=[];

stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data',function(chunk){
  chunks.push(chunk);
});
stdin.on('end',function(){
  var json,config;
  json=chunks.join();
  config=JSON.parse(json);
  stdout.write(util.format("%s \n",JSON.stringify(config[0])));
});
