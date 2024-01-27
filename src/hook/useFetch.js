/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import axios from "axios";
import { useEffect, useState } from "react";



const useFetch = async(search, query) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${search}`,
        params: {
       
        ...query
        },
        headers: {
          'X-RapidAPI-Key': '16eed27947msh82b92c758e03e84p143585jsn4d9151414b37',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };
      
      const fetchData = async() => {
          setLoading(true);
        try {
            const response = await axios.request(options);
            console.log(response.data.data);
            setData(response.data.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setError(error);
            alert('There is an error fetching data');
        }
        finally{
            setLoading(false);
        }
      }

      useEffect(() => {
        fetchData();
      },[])

      const refetchData = () =>{
        fetchData();
      }

    return { data, loading, error,refetchData};
}

export default useFetch;