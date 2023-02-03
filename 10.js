let c = 0;
function clear(){
    clearInterval(interval);
}
function count(){
     c<10 ? console.log(++c) : clear();
}
const interval = setInterval(count,1000);