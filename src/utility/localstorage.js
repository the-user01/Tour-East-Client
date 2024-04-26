const getStoredValue = () =>{
    const storedData = localStorage.getItem('books') ;
    if(storedData){
        return JSON.parse(storedData);
    }
    return [];
}

const setStorage = spotId =>{
    const storedData = getStoredValue();

    const valueExists = storedData.find(data => data === spotId);

    if(!valueExists){
        storedData.push(spotId);

        localStorage.setItem('books', JSON.stringify(storedData))
    }
}

export {getStoredValue, setStorage}