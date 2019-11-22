const box = document.querySelector('.body');
const lis = box.querySelectorAll('li');
const head = document.querySelector('.head')
function minEle(lis){
    let ary = [...lis].map(ele=>ele.scrollHeight);
    let min = Math.min(...ary);
    let index = ary.findIndex(item=>item === min);
    return {
        ele:lis[index],
        index,
        min
    }
}
function debounce(cb,time){
    let timer;
    return function(...arg){
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            cb.call(this,...arg);
        }, time);
    }
}
function render(){
    fetch('./data.json')
    .then(d=>d.json())
    .then(ary=>{
        ary.forEach((item,i)=>{
            let {ele} = minEle(lis);
            let div = document.createElement('div');
            div.className = 'img_box';
            let img = document.createElement('img');
            img.src = item.pic;
            div.append(img);
            ele.append(div);
            setTimeout(() => {
                img.style.opacity = 1;
            });
        });
    });
}
render();

let iH = window.innerHeight; //可视区的高度
window.onscroll = debounce(fn,200);

function fn(){
    if(box.scrollHeight < iH)return;
    let {min} = minEle(lis);  //最短的距离
    let scroll = window.pageYOffset; //滚动条的距离
    if(iH + scroll >= min+head.offsetHeight){
        render();
    }
}