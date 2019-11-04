/**
 * 得到数组中的最大值
 *  @param {*} arr
 */
function maxOfArray(arr){
    if(arr.length === 0) {
        return;
    }
    var max =arr[0];
    for (var i=1; i<arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}