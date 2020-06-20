import React, {useState} from "react";
import ReactAudioPlayer from 'react-audio-player';

function AudioPlayer(props) {


  return (
    <div className="AudioPlayer" >
        <ReactAudioPlayer
          src={props.audio}
          controls
          autoPlay
        />
    </div>
  );
}

export default AudioPlayer;
