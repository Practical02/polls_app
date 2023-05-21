import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Logo = () => (
    // <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2">
    //   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    // </svg>
    <svg  xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-bar-chart-fill" viewBox="0 0 16 16"> <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" fill="#000000"></path> </svg>
  );
  

const Login = () => {
    const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('User');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };
    
      const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
      };
    return (
        <>
               
<div className="bg-white pb-6 sm:pb-8 lg:pb-12">
  <header className="mb-8 border-b"></header>
    <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-8">
  <div className="flex items-center">
      <Logo />
      <h1 className="text-5xl font-bold">Pollie</h1>
    </div>
    <div className="flex divide-x border-r sm:border-l">
        <a href="#" className="hidden h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:flex sm:h-20 sm:w-20 md:h-24 md:w-24">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/> <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/> </svg>

          <a href="#" className="text-lg font-semibold text-blue-400">Home</a>
        </a>
          <a href="#" className="hidden h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover: active:bg-gray-200 sm:flex sm:h-20 sm:w-20 md:h-24 md:w-24">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
        <button
            type="button"
          className="inline-flex items-center justify-center w-full px-4 py-2 text-m font-medium text-black bg-transparent hover:bg-gray-200"

        onClick={toggleDropdown}>
            <a href="#" className="text-1g font-semibold text-gray-500 transition duration-000 hover:text-blue-400 active:text-indigo-100">Login</a>
    
        </button>
        </a>

       <div>
        </div>
        
        {isOpen && (
        <div className="  mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
          {/* Dropdown menu items */}
          <button
            type="button"
            className={`block px-4 py-2 text-sm ${
              selectedOption === 'User' ? 'bg-light-white' : 'hover:bg-blue-400'
            }`}
            onClick={() => handleOptionSelect('User')}
          ><Link to={'user'} style={{ textDecoration: 'none', color: 'white', backgroundColor: 'purple' }}>
            User
            </Link>
          </button>
          <button
            type="button"
            className={`block px-4 py-2 text-sm ${
              selectedOption === 'Admin' ? 'bg-light-white' : 'hover:bg-blue-400'
            }`}
            onClick={() => handleOptionSelect('Admin')}
          ><Link to={'adminlogin'} style={{ textDecoration: 'none', color: 'white', backgroundColor: 'purple' }}>
            Admin
            </Link>
          </button>
          <button
            type="button"
            className={`block px-4 py-2 text-sm ${
              selectedOption === 'Moderator' ? 'bg-light-white' : 'hover:bg-blue-400'
            }`}
            onClick={() => handleOptionSelect('Moderator')}
          ><Link to={'modlogin'} style={{ textDecoration: 'none', color: 'white', backgroundColor: 'purple' }}>
            Moderator
            </Link>
          </button>
        </div>
      )}
    
        
        <a href="#" className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/> </svg>
         <a href="#" className="text-1g font-semibold text-gray-500 transition duration-100 hover:text-blue-400 active:text-blue-400">About</a>
        </a>
        <a href="#" className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/> </svg>
         <a href="#" className="text-1g font-semibold text-gray-500 transition duration-100 hover:text-blue-400 active:text-blue-00">Help</a>
        </a>

        </div>
    </div>
    </div>
                <div className="mb-8 flex flex-wrap justify-between md:mb-16">
                    <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pt-48 lg:pb-24">
                        <h1 className="text-black-800 mb-4 text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl">Find your<br />style online</h1>
                        <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares characteristics of real text.</p>
                    </div></div>
                {/* <div class="flex justify-center items-center min-h-screen">
                    <div class="w-96 p-6 bg-white rounded shadow-lg">
                        <h1 class="text-2xl font-semibold mb-6">Login</h1>
                        <form>
                            <div class="mb-4">
                                <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                <input type="email" id="email" name="email" class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500" required></input>
                            </div>
                            <div class="mb-6">
                                <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                <input type="password" id="password" name="password" class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500" required></input>
                            </div>
                            <div>
                                <button type="submit" class="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700">Login</button>
                            </div>
                        </form>
                    </div>
                </div>*/}</> 
    )
}


export default Login
// import React, { useState } from 'react';

// const LoginDropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState('User');

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative inline-block text-left">
//       <div>
//         <button
//           type="button"
//           className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-black bg-transparent hover:bg-gray-200"
//           onClick={toggleDropdown}
//         >
//           Login
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-5 h-5 ml-2 -mr-1"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//           >
//             <path
//               fillRule="evenodd"
//               d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
//             />
//           </svg>
//         </button>
//       </div>

//       {isOpen && (
//         <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
//           {/* Dropdown menu items */}
//           <button
//             type="button"
//             className={`block px-4 py-2 text-sm ${
//               selectedOption === 'User' ? 'bg-gray-100' : 'hover:bg-gray-100'
//             }`}
//             onClick={() => handleOptionSelect('User')}
//           >
//             User
//           </button>
//           <button
//             type="button"
//             className={`block px-4 py-2 text-sm ${
//               selectedOption === 'Admin' ? 'bg-gray-100' : 'hover:bg-gray-100'
//             }`}
//             onClick={() => handleOptionSelect('Admin')}
//           >
//             Admin
//           </button>
//           <button
//             type="button"
//             className={`block px-4 py-2 text-sm ${
//               selectedOption === 'Moderator' ? 'bg-gray-100' : 'hover:bg-gray-100'
//             }`}
//             onClick={() => handleOptionSelect('Moderator')}
//           >
//             Moderator
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoginDropdown;
