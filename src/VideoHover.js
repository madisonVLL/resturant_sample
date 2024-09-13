import React, { Component } from 'react';
import './HoverVideo.css';

class HoverVideo extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  handleMouseOver = () => {
    if (this.videoRef.current) {
      this.videoRef.current.muted = false; // Unmute video on hover
      this.videoRef.current.play(); // Play the video on hover
    }
  };

  handleMouseOut = () => {
    if (this.videoRef.current) {
      this.videoRef.current.pause(); // Pause the video when mouse leaves
      this.videoRef.current.muted = true; // Mute video on mouse out
    }
  };

  render() {
    return (
      <div className="hover-video-container">
        <video
          ref={this.videoRef}
          width="100%" /* Use width relative to parent container */
          height="auto"
          muted /* Start muted by default */
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
        >
          <source src={this.props.videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default HoverVideo;
