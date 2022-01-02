import React, { useState } from 'react'

const SearchImage = ({setSearchText}) => {
    const [text, setText] = useState('');
    const onSearch = (e) => {
        e.preventDefault();
        setSearchText(text);
    }
    return (
        <>
            <div className="rounded overflow-hidden">
                <form onSubmit={onSearch} className="">
                    <div className="flex items-center border-b-2 border-teal-500 pt-5 pb-2 max-w-xs">
                        <input type="text" onChange={e => setText(e.target.value)} placeholder="Search Something..." className="appearance-none bg-transparent border-none w-full focus:outline-none text-gray-700 mr-3 py-1 px-2 leading-tight" />
                        <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded font-semibold" type="submit">Search</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SearchImage;
