var FAIL_ARR=-1;
/*
* Class ListItem
* 
* a single item in a list
*/
var ListItem = function(){
  var id,question,options,optionsArr,next,nextArr;
}
/*
* function listItemSet
* 
* enable properties of a list item
*/
var listItemSet = function(item,id,question,options,next){
  item.id=id;
  item.question=question;
  item.options=options;
  item.optionsArr=options.split(",");
  item.next=next;
  item.nextArr=next.split(",");
}
/*
* function listNext
* 
* return next item
*/
var listNext=function(list,id,option){
  var item,i,len,opt,next;
  item=list[id];
  opt=item.optionsArr;
  next=item.nextArr;
  len=opt.length;
  for(i=0;i<;i++){
    if(opt[i]==option){
      return parseInt(next[i]);
    }
  }
  return FAIL_ARR;
}
/*
* function listMake
* 
* make a list
*/
var listMake=function(config){
  var len,arr,i,item,conf;
  len=config.length;
  arr=new Array(len);
  for(i=0;i<len;i++){
    item=new ListItem();
    conf=config[i];
    listItemSet(item,conf.id,conf.question,conf.option,conf.next);
    arr[i]=item;
  }
  return arr;
}
