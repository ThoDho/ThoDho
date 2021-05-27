(function(){
    'use strict';

    var logging = true;
    var links = document.getElementsByClassName('extra-trigger');

    var popup = document.createElement('span');
    popup.classList.add('extra-container');
    var popupOffset = 50;

    for(var i=0; i < links.length; i++){
        links[i].addEventListener('click', onClickHandler);
    }

    popup.addEventListener('animationend', function(evt){

        if (evt.currentTarget.classList.contains("close")){
            popup.parentNode.removeChild(popup);
            popup.classList.remove("close");
        }else{
            console.log("remove class open from popup");
            popup.classList.remove("open");
        }

    });

    function onClickHandler(evt){
        evt.stopPropagation();

        if (evt.currentTarget.classList.contains("active")){

            window.requestAnimationFrame(function(){
                popup.classList.add("close");
            });

            evt.currentTarget.classList.remove("active");
        }
        else{

            for(var i=0; i < links.length; i++){
                links[i].classList.remove("active");
            }

            //previously, the message was stored in "data-popupcontent" attribute, now in title
            //var message = evt.currentTarget.dataset.popupcontent;

            var message = evt.currentTarget.title;
            popup.innerHTML = message;

            //insert popup behind clicked element
            evt.currentTarget.parentNode.insertBefore(popup, evt.currentTarget.nextSibling);

            //please animate, would you?
            window.requestAnimationFrame(function(){
                popup.classList.add("open")
            });

            evt.currentTarget.classList.add("active");
            //evt.currentTarget.addEventListener('mousemove', onElementHover);
        }
    }

    function log(message){
        if (logging){
            console.log(message);
        }
    }

})();
