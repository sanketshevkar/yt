const soc = io()

const $play = document.querySelector('#resume')
 
 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
 
 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 var player;
 function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '390',
     width: '640',
     videoId: 'M7lc1UVf-VE',
     events: {
       'onReady': onPlayerReady
       }
   });
 }
     

 var video = {
    status: null,
    time: 0,
    newUser: false
  }

 $play.addEventListener('submit', (e) => {
    e.preventDefault()
    $play.setAttribute('disabled','disabled')
    video.status='pause'
    const message = video
    soc.emit('sendMessage', message, (error) => {
        $messageFormButton.removeAttribute('disabled')
        if(error) {
            return console.log(error)
        }
        player.playVideo();
        console.log('Video Play')
    })
})

 // 4. The API will call this function when the video player is ready.
 function onPlayerReady(event) {
   event.target.playVideo();
 }

 // 5. The API calls this function when the player's state changes.
 //    The function indicates that when playing a video (state=1),
 //    the player should play for six seconds and then stop.
 
 function stopVideo() {
    //e.preventDefault()
    $play.setAttribute('disabled','disabled')
    video.status='pause'
    const message = video
    soc.emit('sendMessage', message, (error) => {
        $messageFormButton.removeAttribute('disabled')
        if(error) {
            return console.log(error)
        }
        player.playVideo();
        console.log('Video Play')
    })
  // player.stopVideo();
 }

 document.getElementById('resume').onclick = function() {
    //e.preventDefault()
    $play.setAttribute('disabled','disabled')
    video.status='pause'
    const message = video
    soc.emit('sendMessage', message, (error) => {
        //$messageFormButton.removeAttribute('disabled')
        if(error) {
            return console.log(error)
        }
        player.playVideo();
        console.log('Video Play')
    })
};

document.getElementById('pause').onclick = function() {
   player.pauseVideo();
};