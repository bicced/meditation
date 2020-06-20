import React, {useState} from "react";
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import med from "../media/med.jpg";
import 'antd/dist/antd.css';
import { StarFilled, PlayCircleFilled } from '@ant-design/icons';
import AudioPlayer from '../components/AudioPlayer';

const medaudio = require("../media/medaudio.mp3");
const title2 = require("../media/title2.mp3");

function Homepage() {
  const [clips, setClips] = useState(
    [
      {title:"Title1", url: medaudio},
      {title:"Title2", url: title2},
      {title:"Title3", url: medaudio},
      {title:"Title4", url: medaudio}
    ]);
  const [audio, setAudio] = useState();


  return (
    <div className="Homepage" >
      <h1>Meditation</h1>
      { audio ? <AudioPlayer audio={audio}/> : null}
      <div className="Clips" >
        {
          clips.map((clip) => {
            return (
              <WingBlank size="lg">
                <WhiteSpace size="lg" />
                  <Card>
                    <Card.Header
                      title={clip.title}
                    />
                    <Card.Body>
                      <img src={med} />
                    </Card.Body>
                    <Card.Footer content={
                      <div className="ClipFooter" >
                        <PlayCircleFilled onClick={() => setAudio(clip.url)}/>
                        <StarFilled />
                      </div>
                    } />
                  </Card>
                <WhiteSpace size="lg" />
              </WingBlank>
            )
          })
        }
      </div>
    </div>
  );
}

export default Homepage;
