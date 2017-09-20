var FAIL_ARR=-1;
var ListItem = function(){
  var id,question,options,optionsArr,next,nextArr;
}
var listItemSet = function(item,id,question,options,next){
  item.id=id;
  item.question=question;
  item.options=options;
  item.optionsArr=options.split(",");
  item.next=next;
  item.nextArr=next.split(",");
}
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
