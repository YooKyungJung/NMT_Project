//mbti.html
/*
function cardClick(num){
    document.getElementById("Layer").style.display='inline'
}
function CloseSearch(){
document.getElementById("Layer").style.display='none'
}*/


/*  var popUrl = "test.html"; //팝업창에 출력될 페이지 URL
    var popOption = "width=370, height=360, resizable=no, scrollbars=no, status=no;"; //팝업창 옵션(optoin)
    window.open(popUrl,"",popOption);*/

    $('html,body').on('click',function(){
        $('.layer-offset').removeClass('show');
        $('*[class*=js-layer-target').removeClass('show');
    });
    $('*[class*=js-layer-ctrl]').on('click',function(e){
        var cls = $(this).attr('class').split(' ');
        var target;
        for(var i=0; i < cls.length; i++){
            if(cls[i].indexOf('js-layer')!=-1){
                target = cls[i].replace('ctrl','target');
            }
        }
        $('*[class*=js-layer-target').removeClass('show');
        $('.layer-offset').addClass('show');
        $('.'+target).addClass('show');
        e.stopPropagation();
    });
    $('.js-layer-close').on('click',function(){
        $('.layer-offset').removeClass('show');
        $('*[class*=js-layer-target').removeClass('show');
    });
    $('.layer-item').on('click',function(e){
        e.stopPropagation();
    });


//test.html
function testComplete() {
    document.getElementById("content").innerHTML = "<h3>MBTI 검사가 완료되었습니다!</h3>잠시후, 오늘 검사 결과를 기록할 수 있는 'RECORD OF MY PERSONALITY'메뉴로 이동합니다.";
    setTimeout(function(){ location.replace('record.html'); }, 3000);
}

function recordComplete() {
    document.getElementById("content").innerHTML = "<h3>글이 성공적으로 등록되었습니다!</h3>잠시후, 글 목록 페이지로 이동합니다.";
    setTimeout(function(){ location.replace('recordList.html'); }, 3000);
   // location.replace('recordList.html');
}