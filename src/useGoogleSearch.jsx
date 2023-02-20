// Search engine ID 917aef3cd46d24488
import React, { useState, useEffect } from 'react';
import API_KEY from './Keys';

const CONTEXT_KEY = '917aef3cd46d24488'

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null)

    useEffect(() => {
      const fetchData = async() => {
        fetch `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      }
        

    }, [term]);

    return { data }

}

export default useGoogleSearch;
