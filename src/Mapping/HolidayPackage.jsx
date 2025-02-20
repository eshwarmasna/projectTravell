// import React, { useState } from 'react';
// import './HolidayPackage.css';

// const HolidayPackages = () => {
//   const [selectedFilters, setSelectedFilters] = useState({
//     price: [],
//     duration: [],
//   });

//   const packages = [
//     {
//       id: 1,
//       title: 'Manali Volvo Tour Package - Excursion to Kullu',
//       description: 'Delhi (0N) → Manali (3N) → Kullu (0N)',
//       price: 15999,
//       discount: '20% off',
//       originalPrice: 19999,
//       duration: 3,
//       image:
//         'https://res.cloudinary.com/dpwqeejhq/image/upload/v1734410486/Manali_uuvbvv.jpg',
//       bestseller: true,
//     },
//     {
//       id: 2,
//       title: '3 Days Tour Package in India: Char Dham Yatra',
//       description: 'Dehradun (0N) → Haridwar (1N) → Harsil (1N)',
//       price: 165000,
//       discount: null,
//       originalPrice: null,
//       duration: 3,
//       image:
//         'https://res.cloudinary.com/dpwqeejhq/image/upload/v1734410451/Dehardun_kuyy2i.jpg',
//       bestseller: false,
//     },
//     {
//       id: 3,
//       title: '3 Nights 4 Days Package in India: Beautiful Rajasthan Tour',
//       description: 'Jodhpur(1N) → Jaisalmer(2N) → Jodhpur(0N)',
//       price: 16500,
//       discount: null,
//       originalPrice: null,
//       duration: 4,
//       image:
//         'https://res.cloudinary.com/dpwqeejhq/image/upload/v1734410489/Rajasthan_wypywt.jpg',
//       bestseller: false,
//     },
//     {
//       id: 4,
//       title: '3 Nights 4 Days Goa Holiday Tour Package',
//       description: 'Goa(3N)',
//       price: 13999,
//       discount: null,
//       originalPrice: null,
//       duration: 4,
//       image:
//         'https://res.cloudinary.com/dpwqeejhq/image/upload/v1734410528/Goa_zwdmdp.jpg',
//       bestseller: false,
//     },
//     {
//       id: 5,
//       title: '2N Rann Utsav',
//       description: 'Kutch(2N)',
//       price: 9000,
//       discount: null,
//       originalPrice: null,
//       duration: 3,
//       image:
//         'https://res.cloudinary.com/dpwqeejhq/image/upload/v1734410470/Kutch_l8smx4.jpg',
//       bestseller: false,
//     },
//     {
//       id: 6,
//       title: '2 Nights 3 Days Package in India: Darjeeling Tour',
//       description: 'Darjeeling(2N)',
//       price: 10500,
//       discount: null,
//       originalPrice: null,
//       duration: 3,
//       image:
//         'https://res.cloudinary.com/dpwqeejhq/image/upload/v1734410444/Darjeeling_waa5p4.jpg',
//       bestseller: false,
//     },
//     {
//       id: 7,
//       title: 'Spiritual Triangle of Uttar Pradesh - 3 Nights',
//       description: 'Mathura(1N) → Vrindavan(1N) → Agra(1N)',
//       price: 12500,
//       discount: null,
//       originalPrice: null,
//       duration: 4,
//       image:
//         'https://res.cloudinary.com/dpwqeejhq/image/upload/v1734410473/Machu_kbj3sp.jpg',
//       bestseller: false,
//     },
//   ];

//   const handleFilterChange = (filterType, value) => {
//     setSelectedFilters((prevFilters) => {
//       const updatedFilters = { ...prevFilters };
//       const filterValues = updatedFilters[filterType];

//       if (filterValues.includes(value)) {
//         updatedFilters[filterType] = filterValues.filter(
//           (val) => val !== value
//         );
//       } else {
//         updatedFilters[filterType] = [...filterValues, value];
//       }
//       return updatedFilters;
//     });
//   };

//   // Filter the packages based on the selected filters
//   const filteredPackages = packages.filter((pkg) => {
//     const priceFilter = selectedFilters.price.length
//       ? selectedFilters.price.some((range) => {
//           switch (range) {
//             case '0-10000':
//               return pkg.price <= 10000;
//             case '10001-20000':
//               return pkg.price > 10000 && pkg.price <= 20000;
//             case '20001-50000':
//               return pkg.price > 20000 && pkg.price <= 50000;
//             case '50001-100000':
//               return pkg.price > 50000 && pkg.price <= 100000;
//             case '100001-200000':
//               return pkg.price > 100000 && pkg.price <= 200000;
//             case '200000+':
//               return pkg.price > 200000;
//             default:
//               return false;
//           }
//         })
//       : true;

//     const durationFilter = selectedFilters.duration.length
//       ? selectedFilters.duration.some((range) => {
//           switch (range) {
//             case '0-3':
//               return pkg.duration <= 3;
//             case '4-5':
//               return pkg.duration > 3 && pkg.duration <= 5;
//             case '6-9':
//               return pkg.duration > 5 && pkg.duration <= 9;
//             case '10+':
//               return pkg.duration > 9;
//             default:
//               return false;
//           }
//         })
//       : true;

//     return priceFilter && durationFilter;
//   });

//   return (
//     <div className="holiday-packages">
//       <div className="filter-sidebar">
//         <h3>Filter By</h3>
//         <div className="filter-section">
//           <h4>Price Range (per person)</h4>
//           <div className="checkbox-group">
//             <label>
//               <input
//                 type="checkbox"
//                 value="0-10000"
//                 onChange={(e) => handleFilterChange('price', e.target.value)}
//               />
//               ₹ 0 - ₹ 10,000
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 value="10001-20000"
//                 onChange={(e) => handleFilterChange('price', e.target.value)}
//               />
//               ₹ 10,001 - ₹ 20,000
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 value="20001-50000"
//                 onChange={(e) => handleFilterChange('price', e.target.value)}
//               />
//               ₹ 20,001 - ₹ 50,000
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 value="50001-100000"
//                 onChange={(e) => handleFilterChange('price', e.target.value)}
//               />
//               ₹ 50,001 - ₹ 100,000
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 value="100001-200000"
//                 onChange={(e) => handleFilterChange('price', e.target.value)}
//               />
//               ₹ 100,001 - ₹ 200,000
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 value="200000+"
//                 onChange={(e) => handleFilterChange('price', e.target.value)}
//               />
//               ₹ 200,000+
//             </label>
//           </div>
//         </div>
//         <div className="filter-section">
//           <h4>Duration</h4>
//           <div className="checkbox-group">
//             <label>
//               <input
//                 type="checkbox"
//                 value="0-3"
//                 onChange={(e) => handleFilterChange('duration', e.target.value)}
//               />
//               0 - 3 Nights
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 value="4-5"
//                 onChange={(e) => handleFilterChange('duration', e.target.value)}
//               />
//               4 - 5 Nights
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 value="6-9"
//                 onChange={(e) => handleFilterChange('duration', e.target.value)}
//               />
//               6 - 9 Nights
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 value="10+"
//                 onChange={(e) => handleFilterChange('duration', e.target.value)}
//               />
//               10+ Nights
//             </label>
//           </div>
//         </div>
//       </div>

//       <div className="packages-content">
//         <div className="filter-bar">
//           <h2>{filteredPackages.length} Holiday Packages Found</h2>
//           <div className="sort-options">
//             <label htmlFor="sort">Sort By:</label>
//             <select id="sort">
//               <option value="relevance">Relevance</option>
//               <option value="price-low-to-high">Price: Low to High</option>
//               <option value="price-high-to-low">Price: High to Low</option>
//               <option value="duration">Duration</option>
//             </select>
//           </div>
//         </div>

//         <div className="packages-list">
//           {filteredPackages.map((pkg) => (
//             <div className="package-card" key={pkg.id}>
//               <img src={pkg.image} alt={pkg.title} className="package-image" />
//               {pkg.bestseller && (
//                 <span className="bestseller-tag">Bestseller</span>
//               )}
//               <div className="package-info">
//                 <h3 className="package-title">{pkg.title}</h3>
//                 <p className="duration">{pkg.duration} Nights</p>
//                 <p className="description">{pkg.description}</p>
//                 <div className="pricing">
//                   {pkg.discount && (
//                     <span className="discount">{pkg.discount}</span>
//                   )}
//                   <span className="price">{pkg.price}</span>
//                   {pkg.originalPrice && (
//                     <span className="original-price">{pkg.originalPrice}</span>
//                   )}
//                 </div>
//                 <button className="get-offers-button">Get Offers</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HolidayPackages;
