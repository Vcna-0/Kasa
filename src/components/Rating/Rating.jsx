import StarsPink from "../../assets/starsPink.svg"
import StarsWhite from "../../assets/starsWhite.svg"
import styles from "./Rating.module.css"

export default function Rating({ rating }) {

  const ratingStars = [];
  const whiteStarsCalculation = 5 - rating;

  for (let i = 0; i < rating; i++) {
    ratingStars.push(<img key={i} className={ styles.stars } src={ StarsPink } alt=""/>)
  }

  for (let a = 0; a < whiteStarsCalculation; a++) {
    ratingStars.push(<img key={a + rating} className={ styles.stars } src={ StarsWhite } alt=""/>)
  }

  return (
    <div>
      <p>{ ratingStars }</p>
    </div>
  )
}
