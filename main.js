var items=require("./items.js"),
stdin=process.stdin,
stdout=process.stdout,
chunks=[];

stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data',function(chunk){
  chunks.push(chunk);
});
stdin.on('end',function(){
});
