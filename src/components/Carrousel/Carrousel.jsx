import { useState } from 'react'
import styles from "./Carrousel.module.css"
import ArrowLeft from "../../assets/arrow-left.png"
import ArrowRight from "../../assets/arrow-right.png"

export default function Carrousel({ picturesList }) {
  const [index, setIndex] = useState(0);

  
  function handleNextClick() {
    if (index + 1 === picturesList.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function handlePrevClick() {
    if (index - 1 < 0) {
      setIndex(picturesList.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  let picture = picturesList[index];
  let compteur = index + 1;
  return (
    <div className= {styles.carrousel}>
      {picturesList.length === 1 ? (
        <img className={styles.carrouselImg} src={picture} alt="" /> 
      ):<>
          <button className={`${styles.buttonLeft} ${styles.button}`} onClick={handlePrevClick}><img className={styles.arrows} src={ArrowLeft} alt="" /></button>
          <img className={styles.carrouselImg} src={picture} alt="" />
          <span className={styles.count} >{compteur}/{picturesList.length}</span>
          <button className={`${styles.buttonRight} ${styles.button}`} onClick={handleNextClick}><img className={styles.arrows} src={ArrowRight} alt="" /></button>
        </>
      }
    </div>
  )
}
