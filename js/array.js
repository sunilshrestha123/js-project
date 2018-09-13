

function getcomputedata(){
return data.map(function(item, index){
console.log(+item*5);
return +item*5;


})
.filter(function(item, index) {  
        return item % 2 === 0;    })    
.reduce(function(total, item) {   
       return total + item;    });}console.log('Result is', getComputatedValue(myNumbers));