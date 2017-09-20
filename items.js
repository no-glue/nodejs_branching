var ListItem = function(){
  var id,question,options,options_arr,next,next_arr;
}
var listItemSet = function(item,id,question,options,next){
  item.id=id;
  item.question=question;
  item.options=options;
  item.options_arr=options.split(",");
  item.next=next;
  item.next_arr=next.split(",");
}
