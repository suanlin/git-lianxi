/**
 *  判断一个数是不是素数
 *  @param {*} n
 */
function isPrime(n){
    if( n < 2) {
        return false;
    }
    for (var i=2; i<n; i++){
        if(n%i ===0){
            return false;
        }
    }
    return true;
}