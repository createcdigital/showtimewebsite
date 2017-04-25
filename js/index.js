/**
 * Created by createc on 7/2/17.
 */
window.onload=function(){


    var mySwiper = new Swiper ('.swiper-container', {
        slidesPerView: 6,
        paginationClickable: true,
        spaceBetween: 20,
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        // 如果需要滚动条
        scrollbar: '.swiper-scrollbar',
    });


    //	瀑布流
    function createElement(n){
        // var picbox = document.createElement("div");
        // picbox.className = "pic-box";
        // var pic = document.createElement("img");
        // pic.className = "pic";
        // pic.setAttribute("src","img/index/pic1.jpg");
        // picbox.appendChild(pic);
        // var pictext = document.createElement("p");
        // pictext.className = "pic-text";
        // pictext.innerHTML = "The coaster are made from solid Carrara marble ni wo bu shi";
        // picbox.appendChild(pictext);
        // var userInfo = document.createElement("div");
        // userInfo.className = "userInfo";

        $("#main-box").append("<div class="+"c-box"+n+""+"></div>");
        $(".c-box"+n+"").append("<img class="+"p"+n+""+" src="+"img/index/pic"+n+".jpg"+" alt="+""+"/>");
        $(".c-box"+n+"").append("<p class="+"text"+n+""+">The coaster are made from solid Carrara marble ni wo bu shi aaaaaaaaa</p>");
        $(".c-box"+n+"").append("<div class="+"user"+n+""+"></div>");
        $(".user"+n+"").append("<a class="+"head"+n+""+" href="+"#"+"></a>");
        $(".head"+n+"").append("<img class="+"IconImg"+n+""+" src="+"img/index/head.jpg"+" alt="+""+" />");
        $(".user"+n+"").append("<a href="+"#"+" class="+"userName"+n+""+">Emily</a>");
        $(".user"+n+"").append("<span class="+"userJob"+n+""+">Fashion Accessory Designer</span>");
        $(".c-box"+n+"").append("<a class="+"Add"+n+""+" href="+"#"+">Add</a>");
        $(".c-box"+n+"").append("<a class="+"like"+n+""+" href="+"#"+"></a>");
        $(".like"+n+"").append("<i class="+"icon"+n+""+">&#xe601;</i>");
        $(".icon"+n+"").addClass("iconfont");
        $(".icon"+n+"").addClass("likeHeart");

        $(".c-box"+n+"").addClass("pic-box");
        $(".p"+n+"").addClass("pic");
        $(".text"+n+"").addClass("pic-text");
        $(".user"+n+"").addClass("userInfo");
        $(".head"+n+"").addClass("headIcon");
        $(".IconImg"+n+"").addClass("headIconImg");
        $(".userName"+n+"").addClass("userName");
        $(".userJob"+n+"").addClass("userJob");
        $(".Add"+n+"").addClass("Add");
        $(".like"+n+"").addClass("like");

    }

    function getPic(){
        for(var i=1;i<12;i++){
            createElement(i);
        }
    }
    getPic();



    function changePicNumber(){
        //获取所有盒子
        var boxArr = document.getElementsByClassName("pic-box");
        //获取每个盒子的宽度
        var boxWidth = 290;
        //每一行能放的个数
        var mainBoxWidth = document.getElementById('main-box').offsetWidth;
        var n = Math.floor(mainBoxWidth / boxWidth);

        //定义一个数组用来保存每一列的高度；
        var hArr = [];
        for(var i=0;i<boxArr.length;i++){
            if(i<n){
                hArr[i] = parseInt(boxArr[i].offsetHeight)+15;
            }else {
                var minH = Math.min.apply(null,hArr);
                minHindex = getMinIndex(hArr,minH);
                var boxLeft = boxArr[minHindex].offsetLeft-10;
                boxArr[i].style.cssText = 'position:absolute;top:'+minH+'px;left:'+boxLeft+'px;';
                hArr[minHindex]+=boxArr[i].offsetHeight+15;
                //更新容器的高度
                var maxH = Math.max.apply(null,hArr);
                var mainBox = document.getElementById('main-box');
// 	  	     mainBox.style.cssText = 'height:'+maxH+'px;';
                //更新容器的margin和宽度
                //获取layout变化后的宽度
                var layoutWidth = document.querySelector('.layout').offsetWidth;
                //计算一行放的pic总共的宽度
                var picWidth = boxWidth*n;
                //剩余的宽度
                var remainWidth = (parseInt(layoutWidth)-parseInt(picWidth))/2;
                mainBox.style.cssText = 'margin-left:'+remainWidth+'px;height:'+maxH+'px;width:'+picWidth+'px;';
            }
        }
    }
    changePicNumber();

    function getMinIndex(arr,val) {
        for(var i=0;i<arr.length;i++){
            if(arr[i]==val){
                return i;
            }
        }
    }



    // test
    // function rnd(n,m){
    //     return parseInt(Math.random()*(m-n))+n;
    // }
    // function cl(){
    //     var li = document.createElement("li");
    //     li.style.height = rnd(100,500)+"px";
    //     li.style.background = "rgb("+rnd(0,255)+","+rnd(0,255)+","+rnd(0,255)+")";
    //     return li;
    // }
    //
    // // var allul = document.getElementsByTagName("ul");
    // var allul = $("#main-box ul");
    // console.info(allul);
    //
    // function create10(){
    //     for(var i=0;i<19;i++){
    //         var arr = [];
    //         for(var j = 0;j<allul.length;j++){
    //             arr.push(allul[j]);
    //             //arr = [ allul[0] , allul[1] , allul[2]]
    //         }
    //         // 根据排序方法 把ul中高度最小的放到最前
    //         arr.sort(function(n,m){
    //             return n.offsetHeight - m.offsetHeight;
    //         });
    //         arr[0].appendChild(cl());
    //     }
    // };

    // create10();

    // window.onscroll = function(){
    //     var arr = [];
    //     for(var j = 0;j<allul.length;j++){
    //         arr.push(allul[j]);
    //     }
    //     arr.sort(function(n,m){
    //         return n.offsetHeight - m.offsetHeight;
    //     })
    //     var n = (document.body.scrollTop || document.documentElement.scrollTop)+document.documentElement.clientHeight;
    //     if(n > arr[0].offsetHeight){
    //         create10();
    //     }
    // };



    //设置遮罩层高度
    var bodyH = document.body.offsetHeight;
    var coverBox = document.querySelector('.cover');
    coverBox.style.cssText = 'height:'+bodyH+'px;';


    //点击登录注册
    $(".login").click(function(){
        $(".cover").show(300);
        $(".message-box").show(300);
        logIn();
    })
    $(".signup").click(function(){
        $(".cover").show(300);
        $(".message-box").show(300);
        signUp();
    })

    $(".cover").click(function(){
        $(this).hide(300);
        $(".message-box").hide(300);
    })

    //登录注册切换
    $(".title-one").click(function(){
        logIn();
    })
    $(".title-two").click(function(){
        signUp();
    })
    //切换登录
    function logIn(){
        $(".menu-colorone").css({
            "background":"url(img/index/menucolor.jpg) no-repeat",
            "backgroundSize":"100% 100%"
        });
        $(".menu-colortwo").css("background","#eeeeed");
        $(".title-one").css("color","#9a9998");
        $(".title-two").css("color","#d4d3d2");
        $(".login-box").css("display","block");
        $(".sign-box").css("display","none");
    }
    //切换注册
    function signUp(){
        $(".menu-colortwo").css({
            "background":"url(img/index/menucolor.jpg) no-repeat",
            "backgroundSize":"100% 100%"
        });
        $(".menu-colorone").css("background","#eeeeed");
        $(".title-two").css("color","#9a9998");
        $(".title-one").css("color","#d4d3d2");
        $(".login-box").css("display","none");
        $(".sign-box").css("display","block");
    }


    $('.swiper-wrapper').find('div').hover(function(){
        $(this).css('opacity','0.8');
    },function(){
        $(this).css('opacity','1');
    })

    //picBox蒙层效果
    $('.pic-box').hover(function(){
        $(this).stop(true,true).animate({
            'margin':'0 10px'
        },100);
        $(this).find('.pic').css('opacity','0.6');
        $(this).find('.Add,.like').css('display','block');
    },function(){
        $(this).stop(true,true).animate({
            'margin':'5px 10px'
        },100);
        $(this).find('.pic').css('opacity','1');
        $(this).find('.Add,.like').css('display','none');
    })

    $('.like').hover(function(){
        $(this).css('background','red');
        $('.likeHeart').css('color','#fff');
    },function(){
        $(this).css('background','#fff');
        $('.likeHeart').css('color','#333');
    })

    //homepage loged menu
    var liIndex = $(".banner-ul li").length;
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

    })


    //homepage detailbox
    var detailHeight = $(".detail-box").height();
    $("#cover-box").css("height",detailHeight);
    var coverHeight = $("#cover-box").height();
    console.info(coverHeight);

    $(".pic").click(function(){
        $("#cover-box").css({
            "display":"block",
            "height":detailHeight
        });
    })
    $("#cover-box").click(function(){
        $(this).fadeOut();
    })



}