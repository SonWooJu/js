var button = $('.tab-button');
var content = $('.tab-content');

$('.list').click(function(e){
    if(e.target == document.querySelectorAll('.tab-button')[0]) {
        topen(0)

    }
    else if(e.target == document.querySelectorAll('.tab-button')[1]) {
        topen(1)

    }
    else if(e.target == document.querySelectorAll('.tab-button')[2]) {
        topen(2)

    }

})

// for(let i = 0; i<3; i++){
//     $('.tab-button').eq(i).on('click',function(){
//         topen(i)
//         })
// }
function topen(num){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(num).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(num).addClass('show');
}

// $('.tab-button').eq(0).on('click',function(){
// $('.tab-button').removeClass('orange');
// $('.tab-button').eq(0).addClass('orange');
// $('.tab-content').removeClass('show');
// $('.tab-content').eq(0).addClass('show');
// })

// $('.tab-button').eq(1).on('click',function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(1).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show');
//     })
//  $('.tab-button').eq(2).on('click',function(){
//      $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(2).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(2).addClass('show');
//     })
