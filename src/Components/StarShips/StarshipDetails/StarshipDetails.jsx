// import './Starship.css'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getDetails } from '../../../services/sw-api'

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location  = useLocation()
  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getDetails()
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  },[])

  return (
    <>
    <div className='starship'>
      <h2>Starship Details Vroom Vroom</h2>
      <h3>Name: {location.state.starship.name}</h3>
      <h4>Model: {location.state.starship.model}</h4>
      <Link to="/" className='link'>Back to Ships</Link>
    </div>
    </>
  )
}



export default StarshipDetails