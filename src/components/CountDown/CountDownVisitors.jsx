import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CountDownVisitors = () => {
  const [visitorCount, setVisitorCount] = useState(0)

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await axios.get('/api/visitors')
        setVisitorCount(response.data.count)
      } catch (error) {
        console.error('Error fetching visitor count:', error)
      }
    }

    fetchVisitorCount()
  }, [])

  return (
    <div className='mt-[300px]'>
      <h3>Visitor Count: {visitorCount}</h3>
    </div>
  )
}

export default CountDownVisitors
