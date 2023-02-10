import StarsPink from "../../assets/starsPink.svg"
import StarsWhite from "../../assets/starsWhite.svg"
import styles from "./Rating.module.css"

export default function Rating({ rating }) {

  const ratingStars = [];
  const starWhite = (<img className={ styles.stars } src={ StarsWhite } alt=""/>)
  const starPink = (<img className={ styles.stars } src={ StarsPink } alt=""/>)
  const whiteStarsCalculation = 5 - rating;

  for (let i = 0; i < rating; i++) {
    ratingStars.push(starPink)
  }

  for (let a = 0; a < whiteStarsCalculation; a++) {
    ratingStars.push(starWhite)
  }

  return (
    <div>
      <p>{ ratingStars }</p>
    </div>
  )
}
