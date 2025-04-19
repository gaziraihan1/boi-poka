const getStoredBook= () => {

    const storedBookStr = localStorage.getItem('readList');

    if(storedBookStr) {
        const storedBookData = JSON.parse(storedBookStr);
        return storedBookData;
    }
    else{
        return [];
    }

}

const addToStoreDB = (id) => {

    const storedBookData = getStoredBook();

    if(storedBookData.includes(id)){
        alert('ID already exist')
    }
    else{
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem('readList', data);
        alert('Congrats you added a book to Read List')
    }

};

export {addToStoreDB, getStoredBook};