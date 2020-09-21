$(function(){
    $('.selall').click(function(){
    let bool=$(this).prop('checked');
    $('.singlechk , .selall').prop('checked',bool)
    })


    $('table .singlechk').click(function(){
        let singleNum=$('table .singlechk:checked').length;
        let singleAll=$('table .singlechk').length;
        if(singleNum===singleAll){
            $('.selall').prop('checked',true);
        }else{
            $('selall').prop('checked',false);
        }
    })
})


$('#shopcartarea table tbody .addbtn').click(function(){
    let num =$(this).siblings('.count').val()
    ++num;
    $(this).siblings('.count').val(num);
})


$('#shopcartarea table tbody .addbtn').click(function(){
    let num =$(this).siblings('.count').val();
    if(num>1){
        --num;
    }
    $(this).siblings('count').val(num);
    singleTotalPrice(this,num)
})


function singleTotalPrice(obj,num){
    let singleprice=$(obj).parent().siblings('singleprice').html()
    console.log($(obj).parent().siblings('singleprice'));
    let singleTotalPrice=singleprice*num;
    $(obj).parent().siblings('.singleTotalPrice').html(singleTotalPrice.toFixed(2))
}


function totalPrice(){
    let sum=0;
    $('table .singlechk:checked').each(function(index,dom){
        let singleTotalPrice=$(dom).parent().siblings('.singleTotalPrice').html();
        sum+=parseFloat(singleTotalPrice);
        console.log(sum);
    })
    $('.totalprice').html(sum.toFixed(2))
}