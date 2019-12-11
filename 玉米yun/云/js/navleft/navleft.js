const $del = $('#del');
const $rename = $('#rename');
const $remove = $('#remove');
$del.click(function(){
    if(list.some(item=>item.checked)){
        let {pid} = list[0];
        list.forEach(item => {
            if(item.checked){
               delete data[item.id];
            }
        });
        render(pid);
    }else{
        alert('请选择文件');
    }
});

//重命名
$rename.click(function(){
    returnVal = true;
    let reData = list.filter(item=>item.checked); 
    if(list.some(item=>item.checked)){
        if(reData.length === 1){

            let $folder = $folders.find('.active');
            let $span = $folder.find('span');
            let $txt = $folder.find('input');
            $span.hide();
            $txt.css('display','block');
            $txt.select();
            $txt.blur(function(){
               //不能重名    
  
                let val = $txt.val();
                if($span.text() === val){
                    $span.show();
                    $txt.hide();
                }else{
                    if(!val){
                        console.log('请填写内容');
                        $txt.val($span.text());
                        $txt.select();
                        return;
                    }
                    let {id,pid} = reData[0];
                    let siblings = list.filter(item=>item.id != id);
                    if(siblings.some(item=>item.title === val)){
                        console.log('不好意思,你重名了');
                        $txt.select();
                    }else{
                        //当修改成功之后就要阻止模型行为。
                        returnVal = false; 
                        data[id].title = val;
                        data[id].checked = false;
                        render(pid);
                    }
                }
            });


        }else{
            alert('只能选择一个文件');
        }
       
    }else{
        alert('请选择文件');
    }
});


let that = null;
let okcode = -1;
function createModelTree(num){
    //通过num找到对应的子级
    let ary = getChild(data,num);
    if(!ary.length)return;
    //只要有自己就创建一个ul，因为ul中要插入li
    let $ul = $('<ul style="padding-left:5px"></ul>');
    //循环子级数据，生成很多的li
    ary.forEach(item=>{
        let $li = $(`
            <li>
                <div class="tree-title tree-ico">
                    <span><i></i>${item.title}</span>
                </div>
            </li>
        `);

        if(!getChild(data,item.id).length){
            $li.find('i').css('background','none');
        }

        $li.off().click(function(){
            let reData = list.filter(item=>item.checked); 
        
            if(reData.some(d=>d.id === item.id)){
                okcode = 'error';
                return;
            }else{
                okcode = item.id;
            }

           

            if(that){
                that.css({background:'none'});
            }
            $(this).find('span').css({
                background:'#ccc'
            });
            that = $(this).find('span');

            if(this.children[0].classList.toggle('open')){
                $(this).append(createModelTree(item.id));
            }else{
                // okcode = item.id; 
                $(this).find('ul').remove();
            }
            
           
            return false;
        });
        //再把li放到ul中
        $ul.append($li);
    }); 
    //返回当前创建的ul，里面有很多的li(文件夹)
    return  $ul;
}




const $model_list = $('#model_list').children();
$remove.off().click(function(){
    let reData = list.filter(item=>item.checked); 
    if(!reData.length){
        console.log('木有移动的文件');
    }else{
        $('.modal-tree').show(); //打开移动的框
        $model_list.find('ul').remove();
        $model_list.append(createModelTree(0)); 
    }

    const ok = $('.modal-tree').find('.ok');
    ok.off().click(function(){
        // console.log(okcode);
        if(okcode === 'error'){
            console.log('非法操作');
            return;
        }
        let id = reData[0].pid; //存一下改之前的pid，为了一会刷新页面
        reData.forEach(item=>{
            item.pid = okcode;
            item.checked = false;
        });
        $tree_menu.children().children().append( createTree(0,true) );
        render(id);
        
        $('.modal-tree').hide();
    });

})






