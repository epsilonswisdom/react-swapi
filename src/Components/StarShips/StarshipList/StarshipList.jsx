import { useState, useEffect } from 'react'
import {getAllStarships} from "../../../services/sw-api"
import { Link } from 'react-router-dom'
// import './StarshipList.css'


const StarshipList = () => {
  const [starshipList, setStarshipList ] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getAllStarships()
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  return (
    <>
      <h2>Starship List</h2>
        {starshipList.map(starship =>
          <div className="container">
            <Link to='/starship' 
              state={{starship}} 
              key={starship.url}>
              <div className="card">
                <h3>{starship.name}</h3>
              </div>
            </Link>
          </div>
        )}
    </>
  )
}

export default StarshipList