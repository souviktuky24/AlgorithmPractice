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
    let f1 = 0, f2 = 1, f3 = 1;
    let list = [];
   
    while (f1 <= end_num)
    {
        f1 = f2;
        f2 = f3;
        f3 = f1 + f2;
        if(start_num < f1 && f1 < end_num) {
             list.push(f1);
        }
    }
    return list;
};

let listrange = range(0,10)

const primeList = listrange.map((e, i) => {
    if(isPrime(e)) {
        return listrange[i];
    }
}).filter((e) => e);

console.log(primeList);
