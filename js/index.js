//$(".navbtn").click(
//    function () {
//        if($(".navfor").css('display') === "none"){
//            $(".navfor").slideDown("faster");
//        }else{
//            $(".navfor").slideUp("faster");
//        }
//    }
//);

//禁止页面选择
document.onselectstart = function(){
    //  return false;
};


$('.clue1').click(function(){

    $(".span1").css({display:'inline'});
    $(".span2").css({display:'none'});
    $(".span3").css({display:'none'});
    $(".span4").css({display:'none'});

    $('.clue1').removeClass('clecul21');
    $('.clue1').addClass('clecul21Hor');
    $('.clue2').removeClass('clecul22Hor');
    $('.clue3').removeClass('clecul23Hor');
    $('.clue4').removeClass('clecul24Hor');
    $('.clue2').addClass('clecul22');
    $('.clue3').addClass('clecul23');
    $('.clue4').addClass('clecul24');
});

$('.clue2').click(function(){

    $(".span1").css({display:'none'});
    $(".span2").css({display:'inline'});
    $(".span3").css({display:'none'});
    $(".span4").css({display:'none'});

    $('.clue1').removeClass('clecul21Hor');
    $('.clue1').addClass('clecul21');
    $('.clue2').removeClass('clecul22');
    $('.clue3').removeClass('clecul23Hor');
    $('.clue4').removeClass('clecul24Hor');
    $('.clue2').addClass('clecul22Hor');
    $('.clue3').addClass('clecul23');
    $('.clue4').addClass('clecul24');

});

$('.clue3').click(function(){

    $(".span1").css({display:'none'});
    $(".span2").css({display:'none'});
    $(".span3").css({display:'inline'});
    $(".span4").css({display:'none'});

    $('.clue1').removeClass('clecul21Hor');
    $('.clue1').addClass('clecul21');
    $('.clue2').removeClass('clecul22Hor');
    $('.clue3').removeClass('clecul23');
    $('.clue4').removeClass('clecul24Hor');
    $('.clue2').addClass('clecul22');
    $('.clue3').addClass('clecul23Hor');
    $('.clue4').addClass('clecul24');

});

$('.clue4').click(function(){

    $(".span1").css({display:'none'});
    $(".span2").css({display:'none'});
    $(".span3").css({display:'none'});
    $(".span4").css({display:'inline'});

    $('.clue1').removeClass('clecul21Hor');
    $('.clue1').addClass('clecul21');
    $('.clue2').removeClass('clecul22Hor');
    $('.clue3').removeClass('clecul23Hor');
    $('.clue4').removeClass('clecul24');
    $('.clue2').addClass('clecul22');
    $('.clue3').addClass('clecul23');
    $('.clue4').addClass('clecul24Hor');

});


$('.newSzuobNode').click(function(){
    $('.nesChoce').removeClass('newSrais');
    $(this).children().addClass('newSrais');
});


window.onscroll=function(){
    if($('.header').css('display') ==="block"){
        $('.header').hide();
        setTimeout(function(){
            $('.header').fadeIn(500);
        },1200);
    }
};

$('#productShow').click(function(){
    $('.productOpen').show();
});
$('.productClose').click(function(){
    $('.productOpen').hide();
});
var tts ={};
function repeats(assr){

    for(var i=0;i<assr.length;i++){
        var strf =assr[i];
        if(tts[strf] === null){
            tts[strf]=strf;
        }
    }

}
$.ajax({
    type:'post',
    url:'js/photos.asp',
    success:function(data){       
        var tt=data.split(",");
        var cc=tt.slice(0,tt.length-1);
        console.log(cc);
         repeats(cc); 

        console.log(tts);
$.each(tts,function(key,value){
        if(value.slice(length-3) === "png" ||value.slice(length-3) === "jpg"){
            $('.pLuos').append('<div class="pLuo pto" style="margin-left: 20px;background-image: url(./image/upload/'+value+')"><div class="ptoName"></div></div>');

            }
            if(value.slice(length-3) === "mp4"){
                $('.newPhto').append('<video style="width:100%;" loop autoplay src="./image/upload/'+value+'"></video>');
            }
});



}


});

$('.left').click(function(){
    $('.pLuos').prepend($('.pLuo').last());
});
$('.right').click(function(){
    $('.pLuos').append($('.pLuo').first());

});


$('#newSmore').click(function(){
    $('.newsOpen').show();
});

$('.newsClose').click(function(){
    $('.newsOpen').hide();
});



//   03:(4902.19)__(ZSbank 15-cd)--(5477.8)

//   04:(4106.38)__(JTbank 10-cd)--(652.5)

//   08:(6051.66)__(ZXB 20-cd)--(32092)

//   14:(575.39)__(CDbank 25-cd)--(1060)

//   17:(2064)__(FD_JSbank 17_cd)

//   20:(332.5)__(Nh 20)--(170406:1200 )

//   22:(4506.98)__(MY_JB 22_cd)--(4083.75)

//   28:(1032.36)__(SDD 28_cd)-(38900)

//   29:(1398.22)__(JSbank 9-cd)--(4576)

//   31:(977.41)__(PAB 14-cd)--(3457.84)