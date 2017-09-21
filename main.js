var items=require("./items.js"),
util=require('util'),
assert=require('assert'),
stdin=process.stdin,
stdout=process.stdout,
chunks=[];

stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data',function(chunk){
  chunks.push(chunk);
});
stdin.on('end',function(){
  var json,config,list;
  json=chunks.join();
  config=JSON.parse(json);
  list=items.listMake(config);
  assert.equal(2,items.listNext(list,1,"nothing"),"item 1 not correct");
  stdout.write(util.format("%s \n",JSON.stringify(config[0])));
  stdout.write(util.format("%s \n",JSON.stringify(list[1])));
});
