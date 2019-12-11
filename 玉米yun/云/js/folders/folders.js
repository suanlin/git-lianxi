const $folders = $('.folders'); //放文件夹的盒子
const $f_empty = $('.f-empty'); //显示隐藏空文件夹
const $checkedAll = $('#checkedAll');
let every = true;
let returnVal = false; 

function render(num=0){
    every = true;//初始状态就是true
    $folders.html('');
    let d = tools.getChild(data,num);
    list = d;
    if(!d.length){
        $f_empty.show();
        return;
    }
    $f_empty.hide();
  
    $.each(d,(i,item)=>{
        if(!item.checked){
            every = false;
            $checkedAll.removeClass('checked');
        }
        const {checked,id,title} = item;
        let $folder = $(`<div class="file-item ${checked?'active':''}" did="${id}">
            <img src="img/folder-b.png" alt="" />
            <span class="folder-name">${title}</span>
            <input type="text" value="${title}" class="editor"/>
            <i class=${checked?"checked":''}></i>
        </div>`);

        let $img = $folder.find('img');
        let $i = $folder.find('i');

        $i.click(function(){
            data[id].checked = !data[id].checked;
            render(num);
        });


        $img.dblclick(function(){
            let id = $(this).parent().attr('did')*1;
            d.forEach(item=>item.checked = false);
            $checkedAll.removeClass('checked'); 
            render(id);
            createMenu(id);
        });

        $folder.mousedown(function(){return false;});
       
        $folders.append($folder);
    });

    $checkedAll.off().click(function(){
        if(!list.length)return;
        d.forEach(item=>item.checked = !every);
        render(num);
    });

    if(every){
        $checkedAll.addClass('checked');
    }

}
render(0);
