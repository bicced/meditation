import React from "react";
import { TabBar } from 'antd-mobile';
import { HomeFilled, SettingFilled } from '@ant-design/icons';
import {
  Link
} from "react-router-dom";

function AppNav() {
  return (
    <div className="AppNav" >
      <div className="NavIcons">
        <Link to="/">
          <HomeFilled style={{ fontSize: '25px', color: 'white' }}/>
        </Link>
      </div>
      <div className="NavIcons">
        <Link to="/settings">
          <SettingFilled style={{ fontSize: '25px', color: 'white' }}/>
        </Link>
      </div>
    </div>
  );
}

export default AppNav;
