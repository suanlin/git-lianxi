
let ary = [{
    "id": 1,
    "pid": 0,
    "title": "新建文件夹",
    "type": "file",
    "checked": true
}];
// for (k in data) {
//     ary.push(data[k])     
// }
$("#create").click(function () {
    render(ary);
});

function render(ary){

    // $('#box').html('');
    $.each(ary,(i,item)=>{
        //创建文件夹

        const {checked,id,title} = item;


         let $folder = $(`<div class="file-item ${checked?'active':''}" did="${id}">
            <img src="img/folder-b.png" alt="" />
            <span class="folder-name">${title}</span>
            <input type="text" value="${title}" class="editor"/>
            <i class=${checked?"checked":''}></i>
        </div>`);
        $folders.find('input').hide();
        $('.folders').append($folder);
    });
}


