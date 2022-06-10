function isPrime(n, i=2)
{
    if (n <= 2){
        return (n == 2) ? true : false;
    }
    if (n % i == 0){
        return false;
    }
    if (i * i > n){   
        return true;
    } 
    return isPrime(n, i + 1);
}

let range = function(start_num, end_num) 
{
  if (end_num - start_num === 2) 
  {
    return [start_num + 1];
  } 
  else 
  {
    let list = range(start_num, end_num - 1);
    list.push(end_num - 1);
    return list;
  }
};
let listrange = range(2,100)

const primeList = listrange.map((e, i) => {
    if(isPrime(e)) {
       // console.log(isPrime(e))
        return listrange[i];
    }
}).filter((e) => e);

console.log(primeList)

