$(function() {
   var carouselList = $('#carousel ul');
    
    function changeSlideNext() {
        carouselList.animate({'marginLeft':-500}, 500, moveFirstSlideAfterLast);
    };
  
    function moveFirstSlideAfterLast() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        
        lastItem.after(firstItem);
        carouselList.css({'marginLeft':0});
    };
    
    function changeSlidePrevious() {
        carouselList.animate({'marginLeft':0}, 500);
    };
    
    function moveLastSlideBeforeFirst() {
        firstItem.before(lastItem);
        carouselList.css({'marginLeft': -500}, changeSlidePrevious)
    };
    
    setInterval(changeSlideNext, 4000);
    $('#next').click(function() {
        changeSlideNext();
    });
    $('#previous').click(function() {
        moveLastSlideBeforeFirst();
    });
        
});
