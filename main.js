var items=require("./items.js"),
util=require('util'),
assert=require('assert');
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
  describe("Branch",function(){
    describe("Next",function(){
      it("should return correct next for item 1", function(){
        assert.equal(2,listNext(list,1,"nothing"));
      });
    });
  });
  stdout.write(util.format("%s \n",JSON.stringify(config[0])));
  stdout.write(util.format("%s \n",JSON.stringify(list[1])));
});
