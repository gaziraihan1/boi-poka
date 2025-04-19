import React, { Suspense} from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    return (
        <div className='mt-8 lg:mt-24 py-4'>
           <h1 className='text-2xl md:text-4xl text-center font-bold '>
            Books
           </h1>
           <div className='flex justify-center items-center flex-wrap mt-12 gap-4 md:gap-8'>
                {data.map(singleData => <Book key={singleData.bookId} singleData={singleData}></Book>)}
           </div>
        </div>
    );
};

export default Books;