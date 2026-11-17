import React, { useEffect, useState } from 'react'
import axios from 'axios';




const DashboardPage = () => {

  // console.log("Hi")
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState([]);

  const token = localStorage.getItem('userToken');

  useEffect(() => {
    const fetchItems = async() => {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/items/getItems`, {
        headers: {
          Authorization: `Bearer ${token}`
        } 
      })
      
      if(response && response.data) {
        setItems(response.data.data)
      }
      

    }
    fetchItems()
  }, [])
    
  

  return (
    <div>

     {/* Left Page */}
     <div>
      <h1>Good to see you, {items?.full_name}</h1>
     </div>
     {/* Right Page*/}
    </div>
  )
}

export default DashboardPage
