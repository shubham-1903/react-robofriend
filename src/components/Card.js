import React from 'react'

const Card = ({id,name,email}) => {
  return (
    <>
      <div className="bg-green-300 rounded p-3 m-2 text-center  cursor-pointer transition duration-500 ease-in-out transform hover:scale-110 motion-reduce:transform-none shadow-2xl">
        <img alt="robots" src={`https://robohash.org/${id}?500x700`} />
        <div>
          <h2>{name} </h2>
          <p>{email}</p>
        </div>
      </div>
    </> 
  )
}
export default Card;