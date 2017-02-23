$(function() {
   var carouselList = $('#carousel ul');
    
    function changeSlideNext() {
        carouselList.animate({'marginLeft':-900}, 500, moveFirstSlideAfterLast);
    };
  
    function moveFirstSlideAfterLast() {
        
        (carouselList.find('li:last')).after(carouselList.find('li:first'));
        carouselList.css({'marginLeft':0});
    };
    
    function changeSlidePrevious() {
        carouselList.animate({'marginLeft':0}, 500);
    };
    
    function moveLastSlideBeforeFirst() {
        (carouselList.find('li:first')).before(carouselList.find('li:last'));
        carouselList.css({'marginLeft': -900}, changeSlidePrevious)
    };
    
    setInterval(changeSlideNext, 4000);
    $('#next').click(function() {
        changeSlideNext();
    });
    $('#previous').click(function() {
        moveLastSlideBeforeFirst();
    });
        
});
