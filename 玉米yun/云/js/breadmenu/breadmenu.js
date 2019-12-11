//面包屑功能
const {getParents,bong,getChild,getChilds} = tools;
const $breadnNav = $('.bread-nav');
let list = null;
function createMenu(id){
    $breadnNav.html('');
    let pary = getParents(id);
    pary.forEach((item,i,all)=>{
        let $navChild = null;
        if(i === all.length-1){
            $navChild = $('<span>'+ item.title +'</span>')
        }else{
            $navChild = $('<a href="javascript:void(0);">'+ item.title +'</a>')
        }
        $navChild.click(function(){ 
            tools.getChild(data,id).forEach(item=>item.checked = false);
            render(item.id);
            createMenu(item.id);
        });
        $breadnNav.append($navChild);
    });
}
createMenu(0);




