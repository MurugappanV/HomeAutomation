// are u there bro
// yeah
// array program write pannava
// hmmm
// i think first you can try to filter positive numbers program   okey na
// save this file with .js extension
var a1=[-10,4,-5];
var a=[];
for (var i = 0; i < a1.length; i++) {
  if (a1[i]>0) {
    a.push(a1[i]);
  }
}
//is it correct na , yeah fine great
// continue to second one


var a1=[45,34,76];
var a2=[12,55,25];
var a=[];
var pivot;
for (var i = 0; i < a1.length; i++) {
  for (var j = 0; j < a2.length; j++) {
    if (a1[i]!=a2[j]){
      a.push(a2[j]);
    }
    a.unshift(a1[i]);
  }
}
//no idea na