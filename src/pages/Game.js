import * as React from "react";

import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";

import { useOnceEffect } from "../components/common/CustomHook";
import UserContext from "../components/common/UserContext";

export default function Game() {
  const userContext = React.useContext(UserContext);

  useOnceEffect(() => {
    userContext.setIsMintPage(false);
  }, []);
  return (
    <div id="unity-container" className="unity-desktop">
      <canvas id="unity-canvas" width="960" height="600"></canvas>
      <div id="unity-loading-bar">
        <div id="unity-logo"></div>
        <div id="unity-progress-bar-empty">
          <div id="unity-progress-bar-full"></div>
        </div>
      </div>
      <div id="unity-warning"> </div>
      <div id="unity-footer">
        <div id="unity-webgl-logo"></div>
        <div id="unity-fullscreen-button"></div>
        <div id="unity-build-title">MetaGirls</div>
      </div>
    </div>
  );
}
