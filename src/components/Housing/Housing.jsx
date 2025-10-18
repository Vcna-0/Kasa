
import Card from './Card/Card'
import HousingDetail from './HousingDetail/HousingDetail'

export default function Housing({ housingData, viewType = "card" }) {
  
  if (viewType === "card") {
    return <Card housingDetails={housingData} />
  }
  
  if (viewType === "detail") {
    return <HousingDetail housing={housingData} />
  }
  
  return null
}