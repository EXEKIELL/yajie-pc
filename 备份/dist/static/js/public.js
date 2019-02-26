$(function () {
    //二级导航
    $('#head .headMoreNav ul li button').on('click',function () {
        if($(this).attr('isOpen')=='false')
        {
            $(this).attr('isOpen',true);
            $(this).addClass('navOneHas');
            $(this).next('.headTwo').slideDown();
        }else{
            $(this).attr('isOpen',false);
            $(this).removeClass('navOneHas');
            $(this).next('.headTwo').slideUp();
        }
    });
    //更多
    $('.headMore button').on('click',function () {
        if($(this).attr('isOpen')=='false')
        {
            $(this).attr('isOpen',true);
            $(this).addClass('headClose');
            $('.headMoreNav').addClass('hmnHas');
        }else{
            $(this).attr('isOpen',false);
            $(this).removeClass('headClose');
            $('.headMoreNav').removeClass('hmnHas');
            $('#head .headMoreNav ul li button').attr('isOpen',false);
            $('#head .headMoreNav ul li button').removeClass('navOneHas');
            $('#head .headMoreNav ul li button').next('.headTwo').slideUp();
        }

    });
    //点击蒙层
    $('.headMask').on('click',function () {
        $('.headMoreNav').removeClass('hmnHas');
        $('.headMore button').removeClass('headClose');
        $('.headMore button').attr('isOpen',false);
        $('#head .headMoreNav ul li button').attr('isOpen',false);
        $('#head .headMoreNav ul li button').removeClass('navOneHas');
        $('#head .headMoreNav ul li button').next('.headTwo').slideUp();
    });
    //关闭
    $('#head .headMoreNav ul li a').on('click',function () {
        $('.headMoreNav').removeClass('hmnHas');
        $('.headMore button').removeClass('headClose');
        $('.headMore button').attr('isOpen',false);
        $('#head .headMoreNav ul li button').attr('isOpen',false);
        $('#head .headMoreNav ul li button').removeClass('navOneHas');
        $('#head .headMoreNav ul li button').next('.headTwo').slideUp();
    });
});
