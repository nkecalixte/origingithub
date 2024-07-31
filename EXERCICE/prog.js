function calculateSum(a,b){
    return a+b; 
}


function calculateAverage(tab=[]){
    var a;
    var sum=0;
    for(a=0;a<tab.length;a++){
        sum+=tab[a]
    }
    return sum/tab.length;
}

function convertToUpperCase(s=""){
   return s.toLocaleUpperCase()
}

function calculateRectangleArea(l,w){
    return a*b;
}function isEven(a){
    if(a%2==0){
        return true
    }
    else
        return false
}

function findElement(tab=[],x){
    var y
    for(y=0;y<tab.length;y++){
        if(x==tab[y]){
            return true
        }
        return false
    }
}

function fibonacci(a){
    if(a==0)
        return 0
    else if(a==1 || a==2){
        return 1
    }
    else return fibonacci(a-1)+fibonacci(a-2)
}

function factorial(n){
    if(n==0){
        return 1
    }
    else 
        return factorial(n-1)*n
}

var a=4
var b=5
var tab=[6,-3,4,1]
var t=[]
var n=0
var num;
for(var i=0;i<=n;i++){
    if(n==0){
        t[0]=0;
        num=t[0]
        break;              
    }
    else if(n==1){
        t[1]=1;
        num=t[1];
        break;
    }
    else{
    t.push(t[1]);
    t[i]=t[i-1]+t[i-2]
    t.push(t[i])
    num=t[i]
    }
}
console.log(num)
// var s="nke calixte"
// console.log(calculateSum(a,b))
// console.log(calculateAverage(tab))
// // console.log(convertToUpperCase)
// console.log(calculateRectangleArea(a,b))
// console.log(isEven(a))
// console.log(findElement(tab,10))
// console.log(fibonacci(10))
// console.log(factorial(5))
