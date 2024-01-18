import React from 'react'
import styles from "./styles.module.css";
import Contador from '../contador/Contador';
import VideoSelected from '../videoSelected/VideoSelected';

const Body = () => {
  return (
    <>
      
      <div className={styles.body}>

            <Contador />

            <VideoSelected />

      </div>
    </>
  )
}

export default Body
