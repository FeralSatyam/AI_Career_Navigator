import React, { useEffect, useState } from 'react'
import axios from 'axios';

const DashboardPage = () => {

  function ItemsList() {
    console.log("Hi")
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState([]);

    const token = localStorage.getItem('userToken');

    useEffect(() => {
      const fetchItems = async() => {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/items`, {
          headers: {
            Authorization: `Bearer ${token}`
          } 
        })

      if (response) {
        setItems(response);
        console.log("HEllo", response);
      }
      }
      fetchItems()
    }, [])
    
  }

  return (
    <div>

     {/* Left Page */}
     <div>
      <h1>Good to see you,</h1>
     </div>
     {/* Right Page*/}
    </div>
  )
}

export default DashboardPage
