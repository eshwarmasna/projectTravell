// import React from 'react';
// import './PopularPackages.css';
// const PopularPackages = () => {
//   const packages = [
//     {
//       id: 1,
//       title: 'Kerala Munnar Tour Package with Thekkady',
//       description: 'Kochi (0N) → Munnar (2N) → Thekkady (1N) → Alleppey (1N)',
//       price: '₹21,000',
//       discount: '8% off',
//       originalPrice: '₹23,000',
//       duration: '5 Days / 4 Nights',
//       image:
//         'https://res.cloudinary.com/dpwqeejhq/image/upload/v1734410463/Kerala_yhzm7d.jpg',
//     },
//     {
//       id: 2,
//       title: 'Coorg Wayanad Hill Station Tour Package',
//       description: 'Bangalore (0N) → Coorg (2N) → Wayanad (2N)',
//       price: '₹15,000',
//       discount: '16% off',
//       originalPrice: '₹18,000',
//       duration: '5 Days / 4 Nights',
//       image:
//         'https://res.cloudinary.com/dpwqeejhq/image/upload/v1734410521/Wayanad_tlnrwy.jpg',
//     },
//     {
//       id: 3,
//       title: 'Andaman Frugal Escapes: 4N/5D Tour Package',
//       description: 'Port Blair (1N) → Havelock (2N) → Port Blair (1N)',
//       price: '₹17,550',
//       discount: '23% off',
//       originalPrice: '₹22,815',
//       duration: '5 Days / 4 Nights',
//       image:
//         'https://res.cloudinary.com/dpwqeejhq/image/upload/v1734410460/Andaman_iuxn68.jpg',
//     },
//     {
//       id: 4,
//       title: 'Srinagar Package for 4 Nights with Sonamarg Excursion',
//       description:
//         'Pahalgam (1N) → Gulmarg (1N) → Srinagar (2N) → Sonamarg (0N)',
//       price: '₹22,250',
//       discount: '12% off',
//       originalPrice: '₹25,400',
//       duration: '5 Days / 4 Nights',
//       image:
//         'https://res.cloudinary.com/dpwqeejhq/image/upload/v1734410492/Srinagar_nllf2m.jpg',
//     },
//   ];
//   return (
//     <div className="popular-packages">
//       <h2>Most Popular India Tour Packages</h2>
//       <div className="packages-grid">
//         {packages.map((pkg) => (
//           <div className="package-card" key={pkg.id}>
//             <img src={pkg.image} alt={pkg.title} className="package-image" />
//             <div className="package-info">
//               <span className="duration">{pkg.duration}</span>
//               <h3 className="package-title">{pkg.title}</h3>
//               <p className="description">{pkg.description}</p>
//               <div className="pricing">
//                 <span className="price">{pkg.price}</span>
//                 <span className="discount">{pkg.discount}</span>
//                 <span className="original-price">{pkg.originalPrice}</span>
//               </div>
//               <button className="get-offers-button">Get Offers</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PopularPackages;
