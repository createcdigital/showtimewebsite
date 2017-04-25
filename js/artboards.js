/**
 * Created by createc on 9/2/17.
 */
window.onload=function(){
    //homepage loged menu
    var liIndex = $(".banner-menu li").length;
    $(".banner-ul").find('li').eq(liIndex-1).css("borderBottom","0");

    $(".loged-box").click(function(){
        var clickBtn = $(".banner-menu").css("display");
        if(clickBtn == "none"){
            $(".banner-menu").css("display","block");
            $(".loged-icon").css("transform","rotate(180deg)");
        }else {
            $(".banner-menu").css("display","none");
            $(".loged-icon").css("transform","rotate(360deg)");
        }
    });



    //设置遮罩层高度
    var bodyH = document.body.offsetHeight;
    var coverBox = document.querySelector('.cover');
    coverBox.style.cssText = 'height:'+bodyH+'px;';

    $(".add-box").click(function(){
        $(".cover").css("display","block");
    });
    $(".cover").click(function(){
        $(this).css("display","none");
    });




    //打开相册的瀑布流
    function waterfall(){
        //获取所有盒子
        var box = document.querySelector(".pic-contain");
        var boxArr = box.getElementsByTagName("img");
        console.info(boxArr);

        //获取每个盒子的宽度
        var boxWidth = 200;
        //每一行能放的个数
        var n = 2;

        //定义一个数组用来保存每一列的高度；
        var hArr = [];
        for(var i=0;i<boxArr.length;i++){
            if(i<n){
                hArr[i] = parseInt(boxArr[i].offsetHeight)+10;
            }else {
                var minH = Math.min.apply(null,hArr);
                minHindex = getMinIndex(hArr,minH);
                console.info(minHindex);
                var boxLeft = boxArr[minHindex].offsetLeft;
                console.info(boxLeft);
                boxArr[i].style.cssText = 'position:absolute;top:'+minH+'px;left:'+boxLeft+'px;';
                hArr[minHindex]+=boxArr[i].offsetHeight+10;
                //更新容器的高度
                var maxH = Math.max.apply(null,hArr);
            }
        }
    }
    function getMinIndex(arr,val) {
        for(var i=0;i<arr.length;i++){
            if(arr[i]==val){
                return i;
            }
        }
    }
    waterfall();



}
