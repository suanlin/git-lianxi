/**
 * 得到数组中的最小值
 *  @param {*} arr
 */
function minOfArray(arr){
    if(arr.length === 0) {
        return;
    }
    var min =arr[0];
    for (var i=1; i<arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
        }
    }
    return min;
    }