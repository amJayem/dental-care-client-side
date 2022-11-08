import { useEffect } from 'react';

const SetTitle = (title) => {
    useEffect(()=>{
        document.title = `${title} - Dental Care`
    },[title]);
    
};

export default SetTitle;