  //open this link and try your program http://rextester.com/l/nodejs_online_compiler
 

 
var a1=[45,34,76];
var a2=[12,55,25, 54];
var a=[];
var length;
if (a1.length>a2.length) {
 length=a1.length;
}else{
  length=a2.length;
}
for (var i = 0; i < length; i++) {
    console.log(i + " " + a1[i] + " " + a2[i]);
    !!a1[i] && a.push(a1[i]);
    !!a2[i] &&  a.push(a2[i]);
}
 
for (var i = 0; i < a.length; i++) {
  for (var j = i+1; j < a.length; j++) {
 
    if (a[i]>a[j]) {
 
      var temp=a[i];
 
      a[i]=a[j];  
 
      a[j]=temp;  
 
    }
 
  }
 
}
console.log(a);
 

 
// fine , done !!!!
 
//program ipdi na potathe illa na!!!
 

 

 
// vera eppadi program pannuvinga ?
 
File contents are unchanged.
1 file change in working directory
View change
commit:d7cec6
array sorting completed