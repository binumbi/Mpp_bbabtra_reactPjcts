import React from 'react'





const Card = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
      <img
        className="w-full"
        src="https://www.mathrubhumi.com/image/contentid/policy:1.9224454:1704765735/maldives.jpg"
        alt="Random"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Tailwind CSS in React</div>
        <p className="text-gray-700 text-base">
          This is an example of using Tailwind CSS classes inside a React component. Tailwind makes it easy to style components without writing custom CSS.
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #react
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tailwindcss
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #webdevelopment
        </span>
      </div>
    </div>
  );
};

export default Card;


// function Tailwindex() {
//   return (
//     <>
//       <h1>Tailwind Example Using Components</h1>
//     </>
//   )
// }

// export default Tailwindex
