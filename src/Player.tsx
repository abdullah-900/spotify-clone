import React, { useState } from 'react'
import { Col, Container,Row } from 'react-bootstrap';
import './player.scss'
import {AiFillPlayCircle} from 'react-icons/ai';
import {AiFillPauseCircle} from 'react-icons/ai';
import {AiFillStepBackward} from 'react-icons/ai';
import {AiFillStepForward} from 'react-icons/ai';
import {TfiControlShuffle} from 'react-icons/tfi';
import {HiOutlineSpeakerWave} from 'react-icons/hi2'
import {HiOutlineSpeakerXMark} from 'react-icons/hi2'

import {BsRepeat} from "react-icons/bs";

import ProgressBar from 'react-bootstrap/ProgressBar';


const Player = () => {
    const [progress, setProgress] = useState<number>(0);

    const handleMouseClick = (event: React.MouseEvent) => {
        const progressBar = event.currentTarget as HTMLDivElement;
        const progressBarRect = progressBar.getBoundingClientRect();
        const offsetX = event.clientX - progressBarRect.left;
        const newProgress = Math.max(0, Math.min(100, Math.round((offsetX / progressBarRect.width) * 100)));
        setProgress(newProgress);
      };
 
  
  return (
    <Container  className='player' fluid>
          <Row className='justify-content-center align-items-center' >
      <Col>
      hhhhhhhhhhhhh
      </Col>
      <Col  className='d-flex flex-column gap-2'>
      <div style={{color:'white'}} className='controls d-flex justify-content-center align-items-center gap-3'>  
      <TfiControlShuffle size='1.5rem'/>
      <AiFillStepBackward size='1.5rem'/>
      <AiFillPlayCircle size='3rem'/>
      <AiFillStepForward size='1.5rem'/>
      <BsRepeat size='1.5rem'/>
      </div>
   <ProgressBar onClick={handleMouseClick} now={progress} />
      </Col>
      <Col  className='d-flex justify-content-end'>
      <div className='d-flex justify-content-center align-items-center gap-2'>
      <HiOutlineSpeakerWave color='white'/>
      <ProgressBar  style={{width:'100px'}}  />
      </div>
      </Col>
      </Row>
    </Container>
  )
}

export default Player