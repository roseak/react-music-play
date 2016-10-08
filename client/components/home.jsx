import React from "react";
import { FirstSong } from './first-song'

export class Home extends React.Component {
  render() {
    return (
      <div>
        React Music with Electrode
        <FirstSong />
      </div>
    );
  }
}
