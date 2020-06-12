import React, {useState} from "react";
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import med from "../media/med.jpg";
import 'antd/dist/antd.css';
import { StarFilled, DislikeFilled, LikeFilled } from '@ant-design/icons';

function Homepage() {
  const [clips, setClips] = useState(["Title1", "Title2", "Title3", "Title4"]);

  return (
    <div className="Homepage" >
      <h1>Meditation</h1>
      <div className="Clips" >
        {
          clips.map((clip) => {
            return (
              <WingBlank size="lg">
                <WhiteSpace size="lg" />
                  <Card>
                    <Card.Header
                      title={clip}
                    />
                    <Card.Body>
                      <img src={med} />
                    </Card.Body>
                    <Card.Footer content={
                      <div className="ClipFooter" >
                        <LikeFilled />
                        <DislikeFilled />
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
