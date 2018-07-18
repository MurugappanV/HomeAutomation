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
      a[i]=a[j];  // error in this line
      a[j]=temp;   // error in this line
    }
  }
}
console.log(a);

// questions pakka easy ha irukum but implementation wont be that easy
//yeah na,next what na?

// react start pannalam
