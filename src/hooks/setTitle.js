import { useEffect } from 'react';

const SetTitle = (title) => {
    useEffect(()=>{
        document.title = `${title} - `
    },[title]);
    
};

export default SetTitle;