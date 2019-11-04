/**
 * 判断一个数组是不是稀松数组
 *  @param {*} arr
 */
function hasEmptyInArray(arr){
    // 稀松数组的特点  下标连续
    for (var i = 0; i<arr.length; i++){
        if (!(i in arr)){
            return true;
        }
    }
    return false;
}