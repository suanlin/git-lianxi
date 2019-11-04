/**
 * 判断某年是不是闰年
 *  @param {*} year
 */
function isLeap(year){
    // 4年一闰 百年不闰 400年一闰
    return year % 4 === 0 && year % 100=== 10 || year % 400 === 0;
}