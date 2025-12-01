import React,{useEffect, useState} from 'react'

const Dashboard = () => {
    const accessToken = localStorage.getItem('access_token');
    useEffect(() => {
        const fetchProtectedData = async () => {
        try {
            const response= await axious.get('http://127.0.0.1:8000/api/v1/protected-view', {
            headers:{
                Authorization: `Bearer ${accessToken}`
            }
            
            }
            )
            console.log('success', response.data);
        } catch (error) {
            console.error('Error fetching protected data:', error);
        }
        
        };
    }, []);

  return (
    <>

    
    </>
  )
}

export default Dashboard