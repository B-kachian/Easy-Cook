import React, { useEffect, useRef } from "react";



const Video = () => {
    const videoEl = useRef(null);
    const attemptPlay = () => {
      videoEl &&
        videoEl.current &&
        videoEl.current.play().catch(error => {
          console.error("Error attempting to play", error);
        });
    };
  
    useEffect(() => {
      attemptPlay();
    }, []);
  

    return (  
        <>
         <div className="video">

         
        <video style={{ maxWidth: "100%", width: "1300px", margin: "0 auto"}}
          playsInline
          loop
          muted
          autoPlay
          alt="All the devices"
          src="https://player.vimeo.com/external/579046128.sd.mp4?s=40329f47db64800c0e81c4228de54c423505bc9a&profile_id=164&oauth2_token_id=57447761"
          ref={videoEl}
        />
      
      
    


    </div>
        
        </>
    );
}
 
export default Video;








