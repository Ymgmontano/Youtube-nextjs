"use client"
import { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay, faPause, faVolumeHigh, faVolumeXmark, faThumbsUp, faThumbsDown, faMessage, faShare, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../../css/shorts.css";


library.add(faPlay, faPause, faVolumeHigh, faVolumeXmark, faThumbsUp, faThumbsDown, faMessage, faShare, faEllipsis);


function Shorts() {
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const togglePlayPause = () => {
        togglePlay();
        console.log('togglePlayPause');
    };


    const handleLikeDislike = () => {
    };
    return (

        <div className="container">
            <div className="videoBx">
                <video src={require("/public/YouTube.mp4")} id="playMuteVideo" autoPlay loop muted={isMuted}></video>
                <div className="controls">
                    <div className={`videoIcon play ${isPlaying ? 'active' : ''}`} onClick={togglePlayPause}>
                        <FontAwesomeIcon icon={isPlaying ? 'pause' : 'play'} />
                    </div>
                    <div className={`videoIcon mute ${isMuted ? 'active' : ''}`} onClick={toggleMute}>
                        <FontAwesomeIcon icon={isMuted ? 'volume-xmark' : 'volume-high'} />
                    </div>
                </div>
                <div className="content">
                    <div className="text">
                        <h5>Day and Night SVG Animation Using HTML CSS & JavaScript</h5>
                    </div>
                    <div className="detail">
                        <div className="imgBx">
                            <div className="img">
                                <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjIzNzUwMDZfRzJKRW0?session_id=b889ad7a78b7b7ea2576cb80f1160f1b9f51bf1a99f69b405afda4ad8c3f4d7d&inline=1&preview=1" alt="userImg" />
                            </div>
                            <h4>
                                Nikhil's Code<span><small>Nikhil's Code</small></span>
                            </h4>
                        </div>
                        <div className="btn">
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
                <ul className="centerPlayPause">
                    <li className="first">
                        <FontAwesomeIcon icon="play" />
                    </li>
                    <li className="second">
                        <FontAwesomeIcon icon="pause" />
                    </li>
                </ul>
            </div>
            <div className="iconBx">
                <ul>
                    <li>
                        <a href="#">
                            <span className="icons thumbsUp" style={{ backgroundColor: 'white' }} onClick={handleLikeDislike}>
                                <FontAwesomeIcon icon="thumbs-up"  style={{ color: 'black'}} />
                            </span>
                            <span className="title">10K</span>
                            <div className="hover">
                                <p>I like this</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icons thumbsDown" style={{ backgroundColor: 'white' }} onClick={handleLikeDislike}>
                                <FontAwesomeIcon icon="thumbs-down" style={{ color: 'black'}} />
                            </span>
                            <span className="title">Dislike</span>
                            <div className="hover">
                                <p>I dislike this</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icons" style={{ backgroundColor: 'white' }} >
                                <FontAwesomeIcon icon="message"  style={{ color: 'black'}} />
                            </span>
                            <span className="title">532</span>
                            <div className="hover">
                                <p>Comments</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icons" style={{ backgroundColor: 'white' }} >
                                <FontAwesomeIcon icon="share"  style={{ color: 'black'}} />
                            </span>
                            <span className="title">Share</span>
                            <div className="hover">
                                <p>Share</p>
                            </div>
                        </a>
                    </li>
                </ul>
                <ul className="bottomIcon"  >
                    <li>
                        <a href="#">
                            <span className="icons" style={{ backgroundColor: 'white' }} >
                                <FontAwesomeIcon icon="ellipsis" style={{ color: 'black'}}  />
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjIzNzUwMDZfRzJKRW0?session_id=b889ad7a78b7b7ea2576cb80f1160f1b9f51bf1a99f69b405afda4ad8c3f4d7d&inline=1&preview=1" alt="userImg" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default Shorts;