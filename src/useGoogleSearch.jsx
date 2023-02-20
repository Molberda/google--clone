// Search engine ID 917aef3cd46d24488
import React, { useState, useEffect } from 'react';
import API_KEY from './Keys';

const CONTEXT_KEY = '917aef3cd46d24488'

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        
    }, [term]);

}

export default useGoogleSearch;
