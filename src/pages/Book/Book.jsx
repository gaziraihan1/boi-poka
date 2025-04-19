import {Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Book = ({singleData}) => {
    const {bookName, author, image,tags,category, rating, bookId} = singleData;
    return (
        <div className='p-6 border border-[#13131315] rounded-2xl w-full sm:w-3/7 md:w-2/5 lg:w-2/7 2xl:w-2/9'>
        <Link to={`/bookDetails/${bookId}`}> 
                <div className='w-full'>
                    <div className='w-full bg-[#F3F3F3] h-58 flex justify-center items-center rounded-2xl'>
                        <img className='w-[50%] h-[80%] object-fit' src={image} alt="" />
                    </div>
                    <div className='flex gap-3 mt-3'>
                        {tags.map(tag => <span className='bg-[#23BE0A05] p-2 rounded-4xl text-base font-medium text-[#23BE0A]'>{tag}</span>)}
                    </div>
                    <h1 className='text-2xl font-bold mt-4'>
                        {bookName}
                    </h1>
                    <p className='mt-4 text-base font-medium text-[#13131380] pb-4 border-b border-dashed border-[#13131315]'>
                        By: {author}
                    </p>
                    <div className='flex justify-between mt-5 text-base font-medium text-[#13131380]'>
                        <p>
                            {category}
                        </p>
                        <span className='flex gap-2 items-center'>
                            {rating} <Star size={18}/>
                        </span>
                    </div>
                </div>
        </Link>
            </div>
    );
};

export default Book;