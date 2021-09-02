// mixsitup
var mixer = mixitup('.work-grid');
// Hambergar menu
function openMenu() {
    document. getElementById('hambergar').style.width = "100%";
}
function closeMenu() {
    document. getElementById('hambergar').style.width = "0%";
}
$('.hb-menu li a, .scroll-down a').on('click', function(){
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
    
}) 
