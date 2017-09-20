var items=require("./items.js"),
stdin=process.stdin,
stdout=process.stdout,
format=util.format,
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
  stdout.write(format.apply("%s",JSON.stringify(config[0])) + "\n");
});
