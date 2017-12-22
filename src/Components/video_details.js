import React from 'react';

const VideoDetail =(props) =>{

    if(!props.video){
        return(
            <p>Loading...</p>
        );
    }
    //const url="https://youtube.com/embed/"+props.video.id.videoId;
    const url=`https://youtube.com/embed/${props.video.id.videoId}`;
    //we used tick "`" // we r using string interpolation



    return(
        //iframe src= https://youtube.com/embed/{videoId}
        <div className="video-detail col-md-8 col-sm-12" >
            <div className="card embed-responsive embed-responsive-16by9" style={{width: '44rem',height:'25rem',marginTop:20}}>
                <iframe className="embed-responsive-item " allowFullScreen={true} src={url}> </iframe>
            </div>

            <div className="card" style={{width: '44rem',marginTop:20}}>
                <div className="card-block">
                    <h4 className="card-title">{props.video.snippet.title}</h4>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item card-text">{props.video.snippet.description}</li>
                </ul>
            </div>
        </div>
    );

    // return (
    //     <div className="video-detail col-md-8">
    //         <div className="embed-responsive embed-responsive-16by9">
    //             <iframe className="embed-responsive-item" src={url}></iframe>
    //         </div>
    //
    //         <div className="details">
    //             <div>{props.video.snippet.title}</div>
    //             <div>{props.video.snippet.description}</div>
    //         </div>
    //     </div>
    // );


//     var player, iframe;
//     var $ = document.querySelector.bind(document);
//
// // init player
//     function onYouTubeIframeAPIReady() {
//         player = new YT.Player('player', {
//             height: '200',
//             width: '300',
//             videoId: 'dQw4w9WgXcQ',
//             events: {
//                 'onReady': onPlayerReady
//             }
//         });
//     }
//
// // when ready, wait for clicks
//     function onPlayerReady(event) {
//         var player = event.target;
//         iframe = $('#player');
//         setupListener();
//     }
//
//     function setupListener (){
//         $('button').addEventListener('click', playFullscreen);
//     }
//
//     function playFullscreen (){
//         player.playVideo();//won't work on mobile
//
//         var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;
//         if (requestFullScreen) {
//             requestFullScreen.bind(iframe)();
//         }
//     }



};
export default VideoDetail;
