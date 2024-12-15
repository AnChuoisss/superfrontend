// import React from "react";
// import "./cart.scss";
// import { Link } from "react-router-dom";
// import TrangChu from "../Trangchu/Trangchu"; // Để quay về Trang chủ nếu cần

// const Cart = ({ cart }) => {
//   // Tính tổng số lượng sản phẩm
//   const totalQuantity = cart.reduce((total, product) => total + (product.quantity || 1), 0);

//   // Tính tổng tiền
//   const totalPrice = cart.reduce(
//     (total, product) => total + (parseFloat(product.price.replace(/,/g, "")) || 0),
//     0
//   );

//   return (
//     <div className="cart-container">
//       {/* Danh sách sản phẩm */}
//       <div className="cart-items">
//         <h2>Giỏ hàng của bạn</h2>
//         {cart.length === 0 ? (
//           <div className="empty-cart">
//             <p>Giỏ hàng đang trống.</p>
//             <Link to="/" className="go-back">
//               Quay lại mua sắm
//             </Link>
//           </div>
//         ) : (
//           cart.map((item) => (
//             <div className="cart-item" key={item.id}>
//               <img src={item.image} alt={item.name} className="cart-item-image" />
//               <div className="cart-item-details">
//                 <h3>{item.name}</h3>
//                 <p>Giá: {item.price} VNĐ</p>
//                 <p>Số lượng: {item.quantity || 1}</p>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Thông tin thanh toán */}
//       <div className="cart-summary">
//         <h3>Thông tin thanh toán</h3>
//         <p>Tổng sản phẩm: {totalQuantity}</p>
//         <p>Tổng tiền: {totalPrice.toLocaleString("vi-VN")} VNĐ</p>
//         <button className="checkout-button">Thanh toán</button>
//       </div>
//     </div>

//   );
// };

// export default Cart;
// import React from "react";
// import "./cart.scss";
// import { Link } from "react-router-dom";

// const Cart = ({ cart }) => {
//   // Tính tổng số lượng sản phẩm
//   const totalQuantity = cart.reduce((total, product) => total + (product.quantity || 1), 0);

//   // Tính tổng tiền
//   const totalPrice = cart.reduce(
//     (total, product) => total + (parseFloat(product.price.replace(/,/g, "")) || 0),
//     0
//   );

//   return (
//     <div className="cart-container">
//       {/* Danh sách sản phẩm */}
//       <div className="cart-items">
//         <h2>Giỏ hàng của bạn</h2>
//         {cart.length === 0 ? (
//           <div className="empty-cart">
//             <p>Giỏ hàng đang trống.</p>
//             <Link to="/" className="go-back">
//               Quay lại mua sắm
//             </Link>
//           </div>
//         ) : (
//           cart.map((item) => (
//             <div className="cart-item" key={item.id}>
//               <img src={item.image} alt={item.name} className="cart-item-image" />
//               <div className="cart-item-details">
//                 <h3>{item.name}</h3>
//                 <p>Giá: {item.price} VNĐ</p>
//                 <p>Số lượng: {item.quantity || 1}</p>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Thông tin thanh toán */}
//       <div className="cart-summary">
//         <h3>Thông tin thanh toán</h3>
//         <p>Tổng sản phẩm: {totalQuantity}</p>
//         <p>Tổng tiền: {totalPrice.toLocaleString("vi-VN")} VNĐ</p>
//         <button className="checkout-button">Thanh toán</button>
//       </div>
//     </div>
//   );
// };

// export default Cart;
// import React, { useState } from 'react';
// import Header from '../Trangchu/Header';
// import Cart from '../../components/cart/cart';

// const CartPage = () => {
//   // Giả sử giỏ hàng là một mảng các sản phẩm
//   const [cart, setCart] = useState([

//   ]);

//   return (
//     <div>
//       <Header />
//       <Cart cart={cart} />
//     </div>
//   );
// };

// export default CartPage;
// import React from "react";
// import { useCart } from "../cart/CartContext.";
// import "./cart.scss";

// const Cart = () => {
//   const { cart } = useCart();

//   const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
//   const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     // <div className="cart-container">
//     //   <h2>Giỏ hàng của bạn</h2>
//     //   {cart.length === 0 ? (
//     //     <p>Giỏ hàng đang trống.</p>
//     <div className="cart-container">
//        {/* Danh sách sản phẩm */}
//        <div className="cart-items">
//          <h2>Giỏ hàng của bạn</h2>
//          {cart.length === 0 ? (
//           <div className="empty-cart">
//             <p>Giỏ hàng đang trống.</p>
//             <Link to="/" className="go-back">
//               Quay lại mua sắm
//             </Link>
//           </div>
//       ) : (
//         <>
//           <div className="cart-items">
//             {cart.map((item) => (
//               <div className="cart-item" key={item.id}>
//                 <img src={item.image} alt={item.name} />
//                 <div className="cart-item-details">
//                   <h3>{item.name}</h3>
//                   <p>Giá: {item.price.toLocaleString("vi-VN")} VNĐ</p>
//                   <p>Số lượng: {item.quantity}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="cart-summary">
//             <p>Tổng sản phẩm: {totalQuantity}</p>
//             <p>Tổng tiền: {totalPrice.toLocaleString("vi-VN")} VNĐ</p>
//             <h3>Thông tin thanh toán</h3>
//           <button className="checkout-button">Thanh toán</button>
//         </div>
//         </>
//       )}
//     </div>
//   </div>  
//   );
// };

// export default Cart;

// import React from "react";
// import { useCart } from "../cart/CartContext.";
// import { Link } from "react-router-dom";
// import "./cart.scss";
// import Header from "../Trangchu/header";

// const Cart = () => {
//   const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

//   const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
//   const totalPrice = cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (


//     <div className="cart-container">
//       {/* Danh sách sản phẩm */}
//       <div className="cart-items">
//         <h2>Giỏ hàng của bạn</h2>
//         {cart.length === 0 ? (
//           <div className="empty-cart">
//             <p>Giỏ hàng đang trống.</p>
//             <Link to="/" className="go-back">
//               Quay lại mua sắm
//             </Link>
//           </div>
//         ) : (
//           cart.map((item) => (
//             <div className="cart-item" key={item.id}>
//               <img src={item.image} alt={item.name} />
//               <div className="cart-item-details">
//                 <h3>{item.name}</h3>
//                 <p>Giá: {item.price.toLocaleString("vi-VN")} VNĐ</p>
//                 <div className="quantity-controls">
//                   <button onClick={() => decreaseQuantity(item.id)}>-</button>
//                   <span>{item.quantity}</span>
//                   <button onClick={() => increaseQuantity(item.id)}>+</button>
//                 </div>
//                 <button
//                   className="remove-button"
//                   onClick={() => removeFromCart(item.id)}
//                 >
//                   Xóa
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Box thanh toán */}
//       {cart.length > 0 && (
//         <div className="cart-summary">
//           <h3>Thông tin thanh toán</h3>
//           <p>Tổng sản phẩm: {totalQuantity}</p>
//           <p>Tổng tiền: {totalPrice.toLocaleString("vi-VN")} VNĐ</p>
//           <button className="checkout-button">Thanh toán</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;
// import React from "react";
// import { useCart } from "../cart/CartContext.";
// import { Link } from "react-router-dom";
// import "./cart.scss";
// import Header from "../Trangchu/Header"; // Import Header

// const Cart = () => {
//   const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

//   const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
//   const totalPrice = cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <>
//       {/* Header */}
//       <Header /> 

//       {/* Nội dung giỏ hàng */}
//       <div className="cart-container">
//         {/* Danh sách sản phẩm */}
//         <div className="cart-items">
//           <h2>Giỏ hàng của bạn</h2>
//           {cart.length === 0 ? (
//             <div className="empty-cart">
//               <p>Giỏ hàng đang trống.</p>
//               <Link to="/" className="go-back">
//                 Quay lại mua sắm
//               </Link>
//             </div>
//           ) : (
//             cart.map((item) => (
//               <div className="cart-item" key={item.id}>
//                 <img src={item.image} alt={item.name} />
//                 <div className="cart-item-details">
//                   <h3>{item.name}</h3>
//                   <p>Giá: {item.price.toLocaleString("vi-VN")} VNĐ</p>
//                   <div className="quantity-controls">
//                     <button onClick={() => decreaseQuantity(item.id)}>-</button>
//                     <span>{item.quantity}</span>
//                     <button onClick={() => increaseQuantity(item.id)}>+</button>
//                   </div>
//                   <button
//                     className="remove-button"
//                     onClick={() => removeFromCart(item.id)}
//                   >
//                     Xóa
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         {/* Box thanh toán */}
//         {cart.length > 0 && (
//           <div className="cart-summary">
//             <h3>Thông tin thanh toán</h3>
//             <p>Tổng sản phẩm: {totalQuantity}</p>
//             <p>Tổng tiền: {totalPrice.toLocaleString("vi-VN")} VNĐ</p>
//             <button className="checkout-button">Thanh toán</button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Cart;
// import React from "react";
// import { useCart } from "../cart/CartContext.";
// import { Link } from "react-router-dom";
// import "./cart.scss";
// import Header from "../Trangchu/Header"; // Import Header

// const Cart = () => {
//   const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

//   const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
//   const totalPrice = cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <>
//       {/* Header */}
//       <Header /> 

//       {/* Nội dung giỏ hàng */}
//       <div className="cart-container">
//         {/* Danh sách sản phẩm */}
//         <div className="cart-items">
//           <h2>Giỏ hàng của bạn</h2>
//           {cart.length === 0 ? (
//             <div className="empty-cart">
//               <p>Giỏ hàng đang trống.</p>
//               <Link to="/" className="go-back">
//                 Quay lại mua sắm
//               </Link>
//             </div>
//           ) : (
//             cart.map((item) => (
//               <div className="cart-item" key={item.id}>
//                 <img src={item.image} alt={item.name} />
//                 <div className="cart-item-details">
//                   <h3>{item.name}</h3>
//                   <p>Giá: {item.price.toLocaleString("vi-VN")} VNĐ</p>
//                   <div className="quantity-controls">
//                     <button onClick={() => decreaseQuantity(item.id)}>-</button>
//                     <span>{item.quantity}</span>
//                     <button onClick={() => increaseQuantity(item.id)}>+</button>
//                   </div>
//                   <button
//                     className="remove-button"
//                     onClick={() => removeFromCart(item.id)}
//                   >
//                     Xóa
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         {/* Box thanh toán */}
//         {cart.length > 0 && (
//           <div className="cart-summary">
//             <h3>Thông tin thanh toán</h3>
//             <p>Tổng sản phẩm: {totalQuantity}</p>
//             <p>Tổng tiền: {totalPrice.toLocaleString("vi-VN")} VNĐ</p>
//             <button className="checkout-button">Thanh toán</button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Cart;
// import React from "react";
// import { useCart } from "../cart/CartContext.";
// import { Link } from "react-router-dom";
// import "./cart.scss";
// import Header from "../Trangchu/Header"; // Import Header

// const Cart = () => {
//   const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

//   const totalQuantity = cart.reduce((total, item) => total + ((item.quantity, 0)+(item.quantitye,0)));
//   const totalPrice = cart.reduce(
//     (total, item) => total + item.price * (item.quantity,0 +item.quantitye,0)
//   );

//   return (
//     <>
//       <Header />
//       <div className="cart-container">
//         <div className="cart-items">
//           <h2>Giỏ hàng của bạn</h2>
//           {cart.length === 0 ? (
//             <div className="empty-cart">
//               <p>Giỏ hàng đang trống.</p>
//               <Link to="/Trangchu" className="go-back">
//                 Quay lại mua sắm
//               </Link>
//             </div>
//           ) : (
//             cart.map((item) => (
//               <div className="cart-item" key={item.id}>
//                 <img src={item.image} alt={item.name} />
//                 <div className="cart-item-details">
//                   <h3>{item.name}</h3>
//                   <p>Giá: {item.price.toLocaleString("vi-VN")} VNĐ</p>
//                   <div className="quantity-controls">
//                     <button onClick={() => decreaseQuantity(item.id)}>-</button>
//                     <span>{item.quantity}</span>
//                     <button onClick={() => increaseQuantity(item.id)}>+</button>
//                   </div>
//                   <button
//                     className="remove-button"
//                     onClick={() => removeFromCart(item.id)}
//                   >
//                     Xóa
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         {cart.length > 0 && (
//           <div className="cart-summary">
//             <h3>Thông tin thanh toán</h3>
//             <p>Tổng sản phẩm: {totalQuantity}</p>
//             <p>Tổng tiền: {totalPrice.toLocaleString("vi-VN")} VNĐ</p>
//             <button className="checkout-button">Thanh toán</button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Cart;

import React from "react";
import { useCart } from "../cart/CartContext.";
import { Link } from "react-router-dom";
import "./cart.scss";
import Header from "../Trangchu/Header"; // Import Header

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  // Tính tổng số lượng các sản phẩm trong giỏ hàng
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  // Tính tổng tiền các sản phẩm trong giỏ hàng
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const a = 20000;

  return (
    <>
      <Header />
      <div className="cart-container">
        <div className="cart-items">
          <h2>Giỏ hàng của bạn</h2>
          {cart.length === 0 ? (
            <div className="empty-cart">
              <p>Giỏ hàng đang trống.</p>
              <Link to="/Trangchu" className="go-back">
                Quay lại mua sắm
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.id} >
                <img src={item.image} alt={item.name}  />
                <div className="cart-item-details">
                  <h3 style={{fontSize:"26px"}}>{item.name}</h3>                
                  <p style={{fontSize:"22px"}}>Giá: {item.price.toLocaleString("vi-VN")} VNĐ</p>
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Xóa
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-summary" style={{ marginTop:"100px", height:"250px", fontWeight: "50px",paddingTop:"50px"}}>
            <h3 style={{fontSize:"25px"}}>Thông tin thanh toán</h3>
            <p style={{fontSize:"22px"}}>Tổng sản phẩm: {totalQuantity}</p>
            <p style={{fontSize:"22px"}}>Giá vận chuyển: {a.toLocaleString("vi-VN")} VNĐ </p>
            <p style={{fontSize:"22px"}}>Tổng tiền: {totalPrice.toLocaleString("vi-VN")} VNĐ</p>
            <button
                className="checkout-button"
                style={{ marginTop: "40px" }}
                onClick={() => (window.location.href = "/checkout")}>
              Thanh toán
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
