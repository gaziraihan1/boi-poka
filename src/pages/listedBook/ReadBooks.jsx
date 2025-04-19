import { MapPin, StickyNote, User } from 'lucide-react';
import React from 'react';

const ReadBooks = ({data}) => {
    console.log(data);
    const {image, bookName, author, tags, yearOfPublishing, category, publisher, totalPages, rating} = data;
    return (
        <div className='mt-6 p-6 border border-[#13131315] rounded-xl'>
            <div className='flex flex-col md:flex-row gap-6'>
                <div className='w-full h-62 md:h-auto md:3/8 lg:w-2/8 flex justify-center items-center bg-[#13131305]'>
                    <img className='md:w-3/6 lg:w-3/6 object-contain h-5/6' src={image} alt="" />
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>
                        {bookName}
                    </h1>
                    <p className='text-base font-medium py-4 text-[#13131380]'>
                        By: {author}
                    </p>
                    <div className='flex gap-3 items-center flex-wrap'>
                        <h3 className='text-base font-bold'>
                            Tag
                        </h3>
                        {tags.map(tag => <span className='text-base font-medium text-[#23BE0A] bg-[#23BE0A0D] py-1.5 px-3'>#{tag}</span>)}
                        <p className='flex items-center gap-2 text-base font-normal text-[#13131380]'>
                            <MapPin size={18}/> Year of Publishing: {yearOfPublishing}
                        </p>
                    </div>
                    <div className='py-4 flex flex-wrap gap-4 text-base text-[#13131360] border-b border-[#13131315]'>

                    <p className='flex items-center gap-2'>
                       <User size={16}/> Publisher: {publisher}
                    </p>
                    <p className='flex items-center gap-2'>
                        <StickyNote size={16}/> Page {totalPages}
                    </p>
                    </div>
                    <div className='py-4 flex gap-4 flex-wrap'>
                        <p className='text-[#328EFF] py-2 px-4 bg-[#328EFF15] rounded-4xl'>
                            Category: {category}
                        </p>
                        <p className='text-[#FFAC33] py-2 px-4 bg-[#FFAC3326] rounded-4xl'>
                            Rating: {rating}
                        </p>
                        <button className='text-lg font-medium text-white bg-green-500 py-2 px-6 rounded-4xl cursor-pointer'>
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadBooks;