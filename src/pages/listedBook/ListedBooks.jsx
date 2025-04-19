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

    useEffect(() => {
        const storedBookData = getStoredBook();
        const dataId = storedBookData.map(id => parseInt(id));

        const myReadList = data.filter(book => dataId.includes(book.bookId));
        setReadList(myReadList)
    }, [data]);
    console.log(readList)
    return (
        <div>
            <h1 className='bg-[#13131305] text-3xl font-bold text-center py-8 rounded-2xl'>
                Books
            </h1>
            <button className='flex justify-center items-center mx-auto py-3 px-6 bg-green-500 rounded-lg text-lg font-semibold gap-2 text-white mt-8 cursor-pointer'>
                Sort By <ChevronDown />
            </button>
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