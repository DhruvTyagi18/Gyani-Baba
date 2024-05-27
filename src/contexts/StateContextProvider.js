// import React, { createContext, useContext, useState } from 'react';

// const StateContext = createContext();
// const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

// export const StateContextProvider = ({ children }) => {
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');

//   const getResults = async (url) => {
//     setLoading(true);

//     const res = await fetch(`${baseUrl}${url}`, {
//       method: 'GET',
//       headers: {
//         'x-rapidapi-host': 'google-search3.p.rapidapi.com',
//         'x-rapidapi-key': process.env.REACT_APP_API_KEY,
//       },
//     });

//     const data = await res.json();

//     setResults(data);
//     setLoading(false);
//   };

//   return (
//     <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
//       {children}
//     </StateContext.Provider>
//   );
// };

// export const useStateContext = () => useContext(StateContext);
// import React, { createContext, useContext, useState } from 'react';

// const StateContext = createContext();
// // const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
// // const cx = process.env.REACT_APP_GOOGLE_CSE_ID;

// export const StateContextProvider = ({ children }) => {
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');

//   const getResults = async () => {
//     setLoading(true);

//     try {
//       const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyDJeSn6al8G98tLt78-uyhOs-d3RJqT_V4&cx=d342e474b3b094396:omuauf_lfve&q=cars&callback=hndlr`);
//       const data = await res.json();

//       setResults(data.items || []);
//     } catch (error) {
//       console.error('Error fetching data: ', error);
//       setResults([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
//       {children}
//     </StateContext.Provider>
//   );
// };

// export const useStateContext = () => useContext(StateContext);
import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
const cx = process.env.REACT_APP_GOOGLE_CSE_ID;

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getResults = async (query) => {
    setLoading(true);

    // Debugging: Check if environment variables are loaded correctly
    console.log('API Key:', apiKey);
    console.log('CSE ID:', cx);

    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${encodeURIComponent(query)}`;
    console.log('Request URL:', url);

    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();

      setResults(data.items || []);
    } catch (error) {
      console.error('Error fetching data: ', error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
