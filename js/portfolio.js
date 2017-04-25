/**
 * Created by createc on 9/2/17.
 */
window.onload=function(){

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

    });

    //设置遮罩层高度
    var coverH = document.body.offsetHeight;
    var coverBox = document.querySelector('.cover');
    coverBox.style.cssText = 'height:'+coverH+'px;';


    //上传文件
    //添加debug
    function add_log(message)
    {
        var template = '<li>[' + new Date().getTime() + '] - ' + message + '</li>';
        $('.upload-cut').prepend(template);
    }


    //
    function add_file(id, file)
    {
        var template = '' +
            '<div class="file" id="uploadFile' + id + '">' +
            '<div class="info">' +
            '#1 - <span class="filename" title="Size: ' + file.size + 'bytes - Mimetype: ' + file.type + '">' + file.name + '</span><br /><small>Status: <span class="status">Waiting</span></small>' +
            '</div>' +
            '<div class="bar">' +
            '<div class="progress" style="width:0%"></div>' +
            '</div>' +
            '</div>';

        $('.upload-cut').prepend(template);
    }


    function update_file_status(id, status, message)
    {
        $('#uploadFile' + id).find('span.status').html(message).addClass(status);
    }

    function update_file_progress(id, percent)
    {
        $('#uploadFile' + id).find('div.progress').width(percent);
    }


    $('.drap-box').dmUploader({
        url: '/demos/dnd/upload.php',
        dataType: 'json',
        allowedTypes: 'image/*',
        extFilter: 'jpg;png;gif',
        onInit: function(){
            // add_log('Penguin initialized :)');
        },
        onBeforeUpload: function(id){
            // add_log('Starting the upload of #' + id);

            update_file_status(id, 'uploading', 'Uploading...');
        },
        onNewFile: function(id, file){
            // add_log('New file added to queue #' + id);

            add_file(id, file);
        },
        onComplete: function(){
            // add_log('All pending tranfers finished');
        },
        onUploadProgress: function(id, percent){
            var percentStr = percent + '%';

            update_file_progress(id, percentStr);
        },
        onUploadSuccess: function(id, data){
            // add_log('Upload of file #' + id + ' completed');

            // add_log('Server Response for file #' + id + ': ' + JSON.stringify(data));

            update_file_status(id, 'success', 'Upload Complete');

            update_file_progress(id, '100%');
        },
        onUploadError: function(id, message){
            // add_log('Failed to Upload file #' + id + ': ' + message);

            update_file_status(id, 'error', message);
        },
        onFileTypeError: function(file){
            // add_log('File \'' + file.name + '\' cannot be added: must be an image');

        },
        onFileSizeError: function(file){
            // add_log('File \'' + file.name + '\' cannot be added: size excess limit');
        },
        /*onFileExtError: function(file){
         $.danidemo.addLog('#demo-debug', 'error', 'File \'' + file.name + '\' has a Not Allowed Extension');
         },*/
        onFallbackMode: function(message){
            alert('Browser not supported(do something else here!): ' + message);
        }
    });







    //打开相册的瀑布流
    function changePicNumber(){
        //获取所有盒子
        var boxArr = document.getElementsByClassName("open-img");
        //获取每个盒子的宽度
        var boxWidth = 270;
        //每一行能放的个数
        var mainBoxWidth = document.querySelector('.open-box').offsetWidth;
        var n = Math.floor(mainBoxWidth / boxWidth);

        //定义一个数组用来保存每一列的高度；
        var hArr = [];
        for(var i=0;i<boxArr.length;i++){
            if(i<n){
                hArr[i] = parseInt(boxArr[i].offsetHeight)+16;
            }else {
                var minH = Math.min.apply(null,hArr);
                minHindex = getMinIndex(hArr,minH);
                var boxLeft = boxArr[minHindex].offsetLeft;
                boxArr[i].style.cssText = 'position:absolute;top:'+minH+'px;left:'+boxLeft+'px;';
                hArr[minHindex]+=boxArr[i].offsetHeight+16;
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


   $(".photo-album").click(function(){
       $(".box-title,.photo-box").css("display","none");
       $(".upload-btn,.back-btn,.clicked-title,.open-box").css("display","block");
       changePicNumber();
   })

    $(".back-btn").click(function(){
        $(".upload-btn,.back-btn,.clicked-title,.open-box").css("display","none");
        $(".box-title,.photo-box").css("display","block");
    })

    $(".upload-btn").click(function(){
        $(".cover").show();
        $(".upload-box").show();
    })

    $(".upload-cancel").click(function(){
        $(".upload-box").hide();
        $(".cover").hide();
    })

    //上传相册集
    $(".add-pic").click(function(){
        $(".upload-Picbox,.cover").show();
    });
    $(".picbox-cancel").click(function(){
        $(".upload-Picbox,.cover").hide();
    })






}