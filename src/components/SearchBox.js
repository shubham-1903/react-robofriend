import React from "react";

function SearchBox({ searchChange }) {
	return (
		<>
			<div className='p-2 '>
				<input
					className='p-3 bg-yellow-100 outline-none shadow-xl rounded-sm placeholder-yellow-500::placeholder'
					// style={{ input:focus:  'none'}}
					type='search'
          placeholder='Search Robots'
          onChange={searchChange}
				/>
			</div>
		</>
	);
}
export default SearchBox;
