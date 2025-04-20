import { ChevronDown } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utilities/addToDB';
import ReadBooks from './ReadBooks';

const ListedBooks = () => {
   
    const data = useLoaderData();
    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState('');

    useEffect(() => {
        const storedBookData = getStoredBook();
        const dataId = storedBookData.map(id => parseInt(id));

        const myReadList = data.filter(book => dataId.includes(book.bookId));
        setReadList(myReadList)
    }, [data]);

    const handleSort = type => {
        setSort(type);

        if(type === 'Pages'){
            const sortedBooksPages = [...readList].sort((a,b) => a.totalPages - b.totalPages);
            setReadList(sortedBooksPages)
        }
        if(type === 'Ratings'){
            const sortedBooksRatings = [...readList].sort((a,b) => a.rating - b.rating);
            setReadList(sortedBooksRatings)
        }
    }
    return (
        <div>
            <h1 className='bg-[#13131305] text-3xl font-bold text-center py-8 rounded-2xl'>
                Books
            </h1>
            <details className="dropdown">
            <summary className="btn m-1">Sort By : {sort? sort: ''}</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><a onClick={() => handleSort('Pages')}>Pages</a></li>
                <li><a onClick={() => handleSort('Ratings')}>Ratings</a></li>
            </ul>
            </details>
            <div className='mt-8 flex gap-4 text-lg'>
            </div>
            <Tabs>
                <TabList>
                <Tab>Read Books</Tab>
                <Tab>WishList Books</Tab>
                </TabList>

                <TabPanel>
                {readList.map(data => <ReadBooks key={data.bookId} data={data}></ReadBooks>)}
                </TabPanel>
                <TabPanel>
                <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;