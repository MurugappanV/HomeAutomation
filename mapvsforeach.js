//nodejs v4.2.6
var a=[2,4,7,8];
const new_a=a.map(function (num) {
	if (num%2==0) {
        num=num*3;
	}
	else{
        num=num*2;
	}
 return num;   
});
console.log(new_a);


var b=[-1,-2,4,5];
var new_b=[];
b.forEach(function (no) {
    if(no<0){
     !!no && new_b.push(no);
    }
});
console.log(new_b);