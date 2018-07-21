//nodejs v4.2.6
var a=[2,4,7,8];
const new_a=a.map(function (num) {
	if (num%2==0) {
        num=num*2;
	}
	else{
        num=num*3;
	}
 return num;   
});
console.log(new_a);


var b=[-1,-2,4,5];
const new_b=b.map(function (no) {
    if(no<0 & typeof no !=='undefined'){
        return no;
    }
});
console.log(new_b);