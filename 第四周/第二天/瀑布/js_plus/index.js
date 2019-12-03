const box = document.querySelector('.body');
const lis = box.querySelectorAll('li');
function minEle(lis) {
    let ary = [...lis].map(ele => ele.scrollHeight);
    let min = Math.min(...ary);
    let index = ary.findIndex(item => item === min);
    return {
        ele: lis[index],
        index,
        min
    }
}

function render() {
    fetch('./data.json')
        .then(d => d.json())
        .then(ary => {
            ary.forEach((item, i) => {
                let { ele } = minEle(lis);
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

function debounce(cb, time) {
    let timer;
    return function (...arg) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            cb.call(this, ...arg);
        }, time);
    }
}

window.onscroll = debounce(fn, 200);
function fn() {
    render();
}
