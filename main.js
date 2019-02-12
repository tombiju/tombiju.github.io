$( document ).ready(function() {

    setTimeout(function(){ 
        $("body").fadeOut(1000, function() {
            $("body").css("background-image", "none");
            $("body").css("background-color", "#134873");
            $("body").css("color", "#D1BF6C");
            $("body").fadeIn("fast");
            $("#main").fadeIn("slow", function(){
                $('#togglePlay').transition('zoom');
                $('#togglePlay').transition('jiggle');
                $('#togglePlay').transition('shake');
                $('#togglePlay').transition('tada');
                
            });
            
        });
    },1000)
           
    var audioPlayer = document.getElementById("myAudio"); 
    audioPlayer.volume = 0.05;
    audioPlayer.currentTime = 12;
    audioPlayer.play();
    var togglePlay = document.getElementById("togglePlay");
    var audioIcon = document.getElementById("toggle-icon");
    function playAudio() { 
        if(audioPlayer.duration > 0 && !audioPlayer.paused){
            audioPlayer.pause();
            $("#togglePlay").removeClass("fas fa-volume-up").addClass("fas fa-volume-mute");
        }else{
            audioPlayer.play();
            $("#togglePlay").removeClass("fas fa-volume-mute").addClass("fas fa-volume-up");
        }
    } 
    togglePlay.addEventListener("click", playAudio);
    
    $('.right')
    .on('click', function() {
        $('.slide')
        .siblings('.active:not(:last-of-type)') 
        .removeClass('active')
        .next()
        .addClass('active');
    });

    $('.left')
    .on('click', function() {
        $('.slide')
        .siblings('.active:not(:first-of-type)')
        .removeClass('active')
        .prev()
        .addClass('active');
    });
    var slide_imgs = ["bros.jpg", "fam.jpg", "party.jpg","logo.jpg"];
    var slides = document.getElementsByClassName("slide");
    $("slide").each(function(i){

        $(this).css("background-image", "url('images/'"+slide_imgs[i]+")");

    });
    $('.scroll_to').on("click",function(e){
        
            var jump = $(this).attr('href');
        
            var new_position = $(jump).offset();
        
            $('html, body').stop().animate({ scrollTop: new_position.top }, 500);
        
            e.preventDefault();
        
        });
    $(".card.expand").on('click', function(){
        
        let computed_id =  "#" + $(this).attr('id') + "-modal";
        $(computed_id).modal('show');
    });

    var fs = require('fs');
    var files = fs.readdirSync('images/gallery');
    console.log(files);
        
  });