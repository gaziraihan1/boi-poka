import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../utilities/addToDB';


const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id)
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const {bookName, author, image, review,category, rating, tags, totalPages, yearOfPublishing, publisher} = singleBook
    ;

    console.log(singleBook);

    const markAsRead = id => {
        addToStoreDB(id)
    }
    return (
        <div className='flex flex-col lg:flex-row lg:h-[81vh] gap-4 mt-12 lg:mt-4 lg:gap-12 py-6'>
            <div className='lg:h-[95%] w-full lg:w-5/11 lg:flex justify-center items-center lg:rounded-2xl bg-[#1313130D]'>
                <img className='w-full lg:w-4/5 lg:h-[80%] ' src={image} alt="" />
            </div>
            <div className='w-full lg:w-5/11'>
                <h1 className='text-4xl font-bold'>
                    {bookName}
                </h1>
                <p className='text-[#13131380] text-xl font-medium py-4 border-b border-[#13131315]'>
                    {author}
                </p>
                <p className='text-[#13131380] text-xl font-medium py-4 border-b border-[#13131315]'>
                    {category}
                </p>
                <p className='text-base font-bold py-6'>
                    Review: <span className='text-base text-[#13131370] font-normal'>
                    {review}
                        </span>
                </p>
                <div className='pt-4 pb-6 border-b border-[#13131315] flex gap-4 items-center'>
                    <p>
                        Tag
                    </p>
                    <p className='flex gap-4'>
                        {tags.map(tag => <span className='py-1.5 px-3 rounded-4xl bg-[#23BE0A0D]'>#{tag}</span>)}
                    </p>
                </div>
                <div className='text-base text-[#13131370] py-6 flex flex-col gap-3 text-start w-3/6'>
                    <div className='flex gap-12 justify-between text-start'>
                        <p>
                        Number of pages: 
                        </p>
                        <span className='font-semibold text-black'>
                            {totalPages}
                        </span>
                    </div>
                    <div className='flex gap-12 justify-between'>
                        <p>
                            Publisher: 
                        </p>
                        <span className='font-semibold text-black'>
                                {publisher}
                        </span>
                    </div>
                    <div className='flex gap-12 justify-between'>
                        <p>
                            Year of Publishing: 
                        </p>
                        <span className='font-semibold text-black'>
                            {yearOfPublishing}
                        </span>
                    </div>
                    <div className='flex gap-12 justify-between'>
                        <p>
                            Rating: 
                        </p>
                        <span className='text-black font-semibold'>
                                {rating}
                        </span>
                    </div>
                </div>
                <div className='pt-8 flex gap-4 text-lg font-semibold
                '>
                    <button className='py-1 px-5 lg:py-4.5 lg:px-9 border border-[#13131330] rounded-lg text-black cursor-pointer' onClick={() => markAsRead(id)}>
                        Read
                    </button>
                    <button  className='py-1 px-5 lg:py-4.5 lg:px-9  rounded-lg bg-[#50B1C9] text-white cursor-pointer'>
                        Whitelist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;