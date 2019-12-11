// 新建文件夹
let ary = [];
let as = 0;

function render(data){
    $('#you').html('');
    $.each(data,function(ele){
       
      
       if(data[ele] === data[0]){
        ary.push(data[ele]);
        ary.push(data[2]);       
       for(var i = 0; i < ary.length;i++){
        let $tu = $(`<div id="tu">
        <p id="qq"></p>
        <img src="./img/folder-b.png" alt="">
        <p>${ary[i]["title"]}</p>
        <input type="text" value="我的文档" class="in">
    </div>`);


    $tu.find('input').hide();
    $('#you').append($tu);
    }}}
    )

}
render(data);

$('#create').click(function(){
    ++as;
    let $tu = $(`<div id="tu">
    <p id="qq"></p>
    <img src="./img/folder-b.png" alt="">
    <p>新建文件夹(${as})</p>
    <input type="text" value="我的文档" class="in">
</div>`);

$('#you').append($tu);




});







$('#tu').click(function(){
    let $folder = $(`<div id="tu">
    <p id="qq"></p>
    <img src="./img/folder-b.png" alt="">
    <p>新建文件夹(${as})</p>
    <input type="text" value="我的文档" class="in">
</div>`);
    $('#you').append($folder);
    //先插入在聚焦
    let $txt = $folder.find('input');
    $txt.select(); //选中聚焦
    $txt.blur(function(){
        //当失焦的时候把新的数据push到ary中，并且通过新的数据渲染页面
        
        /*
            新建文件夹
            新建文件夹(1)
            新建文件夹(2)

            新建文件夹(3)


            新建文件夹(1).replace(/\(\d\)$/,'')

        */
        let val = $txt.val();
        //看看是否重复命名
        let bool = ary.map(item=>item.title).includes(val);
        let nval = '';
        let num = 1; 
        nval = val; //把input中value给最新的value（最新的value就是最后的结果）
        while(bool){
            //如果重名了那么从1开始看有没有重名
            let s = val.replace(/\(\d\)$/,'') + '('+ num++ +')';
            bool = ary.map(item=>item.title).includes(s);
            nval = s;
        }
        ary.push({
            id:+new Date,
            title:nval
        });
        render(ary);
    });//失焦事件
});