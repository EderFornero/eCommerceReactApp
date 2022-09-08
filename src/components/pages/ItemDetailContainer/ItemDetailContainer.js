import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../../App.css'

//React router dom
import { useParams } from 'react-router'


//Card
import CardItemDetail from '../../Card/CardItemDetail'


function ItemDetailContainer() {

  const [user, setUser] = useState([])

  let { id } = useParams();



  useEffect(() => {

    axios(`https://breakingbadapi.com/api/characters/${id}`).then((res) => setUser(res.data)
    );
  }, [id])
  
  return (
  
    
      <div>
        {user.map((user) => {
          return (
            <div className='div-detail'>
              <CardItemDetail data={user} />
            </div>
          )
        })}

      </div>

  )



}

export default ItemDetailContainer