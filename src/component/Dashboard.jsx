// import { useState } from "react"
// import Avatar from "react-avatar";
// import logo from "../assets/logo.png";
// import { NavLink, Outlet } from "react-router";

// function Dashboard() {


//     const [isShow, setIsShow] = useState(
//         window.innerWidth > 900 ? true : false
//     ); 

//     let users = [
//         {
//             id: 1,
//             name: "Abu Talha",
//             email: "abutalha@gmail.com",
//             phone: "1-770-736-8031 x56442",
//             website: "fajifjf.org",
//             test: {
//                 name: "name",
//             },
//         },

//         {
//             id: 2,
//             name: "Abu Talha",
//             email: "abutalha@gmail.com",
//             phone: "1-770-736-8031 x56442",
//             website: "fajifjf.org",
//             test: {
//                 name: "name",
//             },
//         },

//         {
//             id: 3,
//             name: "Abu Talha",
//             email: "abutalha@gmail.com",
//             phone: "1-770-736-8031 x56442",
//             website: "fajifjf.org",
//             test: {
//                 name: "name",
//             },
//         },

//         {
//             id: 4,
//             name: "Abu Talha",
//             email: "abutalha@gmail.com",
//             phone: "1-770-736-8031 x56442",
//             website: "fajifjf.org",
//             test: {
//                 name: "name",
//             },
//         },
//     ];


//     const handleAdd = () => {
//         console.log('ok');
        
//     };

//     const handlEdit = (data) => {
//         console.log("ok");
        
//     };

//     const handleDelete = (id) => {
//         console.log(id);
        
//     };

//     const Greetings = () => {
//         let myData = new Data();
//         let hours = myData.getHours();
//         let greet;

//         if (hours < 12) greet = "morning";
//         else if (hours >= 12 && hours <= 17) greet = "afternoon";
//         else if (hours >= 17 && hours <= 24) greet = "evening";

//         return <span>Good {greet},</span>;

//     };

//     let sidebarWidth;
//     if (window.innerWidth >= 970) {
//         if (isShow) {
//             sidebarWidth = "w-64";

//         } else {
//             sidebarWidth = 'w-0';
//         }
//     } else {
//         if (isShow) {
//             sidebarWidth = "w-64 absolute z-10"; 
//         } else {
//             sidebarWidth = "w-0 opacity-0 invisible absolute z-10";
//         }
//     }

    
// console.log(window.innerWidth);



// return (
//     <div className="flex h-screen">
//         <aside
//             className={`${sidebarWidth} bg-[#2E3A59] text-white h-full flex flex-col transition-all duration-75`}
//         >
//             {/* Sidebar Header */}
//             <div className="p-6 text-2xl font-semibold border-b border-gray-700 flex items-center justify-between">
//                 <img src={logo} alt="" />
//                 {window.innerWidth < 970 && (
//                     <svg
//                         className="w-6 h-6 text-white border dark:text-white"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         onClick={() => setIsShow(!isShow)}
//                     >
//                         <path
//                             stroke="currentColor"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M5 12h14M5 12l4-4m-4 4 4 4"
//                         />
//                     </svg>
//                 )}
//             </div>

//             {/* Menu */}
//             <nav className="flex-1 mt-4">
//                 <ul>
//                     <li className="p-3 hover:bg-[#475569] cursor-pointer">
//                         <NavLink className="block" to={"/dashboard"}>
//                             Dashboards
//                         </NavLink>
//                     </li>
//                     <li className="p-3 hover:bg-[#475569] cursor-pointer">
//                         <NavLink
//                             className="block"
//                             to={"/dashboard/index-category"}
//                         >
//                             Category
//                         </NavLink>
//                     </li>
//                     <li className="p-3 hover:bg-[#475569] cursor-pointer">
//                         <NavLink
//                             className="block"
//                             to={"/dashboard/index-product"}
//                         >
//                             Products
//                         </NavLink>
//                     </li>
//                     <li className="p-3 hover:bg-[#475569] cursor-pointer">
//                         <NavLink className="block" to={"/"}>
//                             Users
//                         </NavLink>
//                     </li>
//                 </ul>
//             </nav>
//         </aside>

//         <div className="flex w-full flex-1 flex-col">
//             <header className="flex items-center justify-between bg-white px-6 py-4 shadow-md">
//                 <button
//                     onClick={() => setIsShow(!isShow)}
//                     className="border h-10 w-10 mr-3 flex justify-center items-center cursor-pointer"
//                 >
//                     <svg
//                         className="w-6 h-6 text-gray-800 dark:text-white"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                     >
//                         <path
//                             stroke="currentColor"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M6 6h8m-8 4h12M6 14h8m-8 4h12"
//                         />
//                     </svg>
//                 </button>

//                 <div className="mr-auto">
//                     <h1 className="text-lg font-semibold">
//                         {Greetings()} {authStore?.user?.name}
//                     </h1>
//                 </div>

//                 <div className="flex items-center gap-4">
//                     <div className="flex items-center gap-2">
//                         <ul className="flex">
//                             <li>
//                                 <Avatar
//                                     size="40"
//                                     name={authStore?.user?.name}
//                                 />
//                             </li>
//                             <li>
//                                 <button
//                                     onClick={handleLogout}
//                                     className="w-10 h-10 ml-2 bg-red-600 flex justify-center items-center"
//                                 >
//                                     <svg
//                                         className="w-6 h-6 text-white dark:text-white"
//                                         aria-hidden="true"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         width="24"
//                                         height="24"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                     >
//                                         <path
//                                             stroke="currentColor"
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth="2"
//                                             d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
//                                         />
//                                     </svg>
//                                 </button>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </header>

//             <main className="flex-1 bg-gray-100 p-6">
//                 <div className="px-4 py-6 bg-white rounded h-full">
//                     <Outlet />
//                 </div>
//             </main>
//         </div>
//     </div>
// );
// }

// export default Dashboard