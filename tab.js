var button = $('.tab-button');
var content = $('.tab-content');

$('.list').click(function(e){
   

    topen(e.target.dataset.id);

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

