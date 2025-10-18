import { useParams, Navigate } from 'react-router-dom'
import Housing from '../../components/Housing/Housing'
import housingData from "../../data/locationsData.json"

export default function HousingDetailsPage() {
  const { id } = useParams()
  const housing = housingData.find(element => element.id === id)

  if (!housing) {
    return <Navigate to="/Error404" />
  }

  return <Housing housingData={housing} viewType="detail" />
}