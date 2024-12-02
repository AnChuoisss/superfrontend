// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useCart } from "../cart/CartContext.";
// import Header from "../Trangchu/Header";  // Import Header vào
// import "./ProductProfile.scss";

// const ProductProfile = () => {
//   const { productId } = useParams(); // Lấy ID sản phẩm từ URL
//   const navigate = useNavigate();
//   const { addToCart } = useCart();
//   const [product, setProduct] = useState(null);

//   // Dữ liệu sản phẩm mô phỏng, có thể thay bằng API hoặc database
//   const productList = [
//     { id: 1, name: "Thuốc A", price: 100000, image: "https://via.placeholder.com/150", description: "Thuốc A mô tả" },
//     { id: 2, name: "Thuốc B", price: 200000, image: "https://via.placeholder.com/150", description: "Thuốc B mô tả" },
//     { id: 3, name: "Thuốc C", price: 150000, image: "https://via.placeholder.com/150", description: "Thuốc C mô tả" },
//     { id: 4, name: "Thuốc D", price: 180000, image: "https://via.placeholder.com/150", description: "Thuốc D mô tả" },
//   ];

//   // Tìm sản phẩm dựa trên ID
//   useEffect(() => {
//     const selectedProduct = productList.find((product) => product.id === parseInt(productId));
//     if (selectedProduct) {
//       setProduct(selectedProduct);
//     }
//   }, [productId]);

//   const handleAddToCart = () => {
//     addToCart(product);
//   };

//   const handleBuyNow = () => {
//     addToCart(product);
//     navigate("/cart"); // Chuyển đến trang giỏ hàng ngay lập tức
//   };

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="product-profile">
//       <Header /> {/* Hiển thị Header */}
//       <div className="product-profile-box">
//         <div className="product-image">
//           <img src={product.image} alt={product.name} />
//         </div>
//         <div className="product-details">
//           <h2>{product.name}</h2>
//           <hr />
//           <p className="product-description">{product.description}</p>
//           <p className="product-price">{product.price.toLocaleString("vi-VN")} VNĐ</p>
//           <div className="product-actions">
//             <button onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
//             <button onClick={handleBuyNow}>Mua ngay</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductProfile;
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useCart } from "../cart/CartContext.";
// import Header from "../Trangchu/Header";  // Import Header vào
// import "./ProductProfile.scss";

// const ProductProfile = () => {
//   const { productId } = useParams(); // Lấy ID sản phẩm từ URL
//   const navigate = useNavigate();
//   const { addToCart } = useCart();
//   const [product, setProduct] = useState(null);

//   // Dữ liệu sản phẩm mô phỏng, có thể thay bằng API hoặc database
//   const productList = [
//     { id: 1, name: "Clopheniramin 4mg", price: 100000, image: "https://via.placeholder.com/300", description: "Thuốc Clopheniramin giúp điều trị triệu chứng viêm mũi dị ứng", details: "Chi tiết sản phẩm..."},
//     // Các sản phẩm khác
//   ];

//   useEffect(() => {
//     const selectedProduct = productList.find((product) => product.id === parseInt(productId));
//     if (selectedProduct) {
//       setProduct(selectedProduct);
//     }
//   }, [productId]);

//   const handleAddToCart = () => {
//     addToCart(product);
//   };

//   const handleBuyNow = () => {
//     addToCart(product);
//     navigate("/cart");
//   };

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="product-profile">
//       <Header /> {/* Hiển thị Header */}
//       <div className="product-profile-box">
//         <div className="product-image">
//           <img src={product.image} alt={product.name} />
//         </div>
//         <div className="product-details">
//           <h2>{product.name}</h2>
//           <p className="product-price">{product.price.toLocaleString("vi-VN")} VNĐ</p>
//           <p className="product-description">{product.description}</p>
//           <p className="product-details-text">{product.details}</p>
//           <div className="product-actions">
//             <button onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
//             <button onClick={handleBuyNow}>Mua ngay</button>
//           </div>
//         </div>
//       </div>
//       {/* <div className="product-tabs">
//         <div className="tab" onClick={() => {}}>Hộp</div>
//         <div className="tab" onClick={() => {}}>Viên</div>
//         <div className="tab" onClick={() => {}}>Viên nén</div>
//       </div> */}
//     </div>
//   );
// };

// export default ProductProfile;


// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useCart } from "../cart/CartContext."; // Import useCart
// import Header from "../Trangchu/Header"; // Import Header
// import "./ProductProfile.scss";

// const ProductProfile = () => {
//   const { productId } = useParams();
//   const navigate = useNavigate();
//   const { addToCart } = useCart();
//   const [product, setProduct] = useState(null);
//   const [quantity, setQuantity] = useState(1); // Khởi tạo số lượng mặc định là 1

//   const productList = [
//     { id: 1, name: "Clopheniramin 4mg", price: 100000, image: "https://via.placeholder.com/300", description: "Thuốc Clopheniramin giúp điều trị triệu chứng viêm mũi dị ứng", details: "Chi tiết sản phẩm..."},
//     { id: 2, name: "Thuốc B", price: 200000, image: "https://via.placeholder.com/150", description: "Thuốc Clopheniramin giúp điều trị triệu chứng viêm mũi dị ứng", details: "Chi tiết sản phẩm..." },
//     { id: 3, name: "Thuốc C", price: 150000, image: "https://via.placeholder.com/150", description: "Thuốc Clopheniramin giúp điều trị triệu chứng viêm mũi dị ứng", details: "Chi tiết sản phẩm..." },
//   ];

//   useEffect(() => {
//     const selectedProduct = productList.find((product) => product.id === parseInt(productId));
//     if (selectedProduct) {
//       setProduct(selectedProduct);
//     }
//   }, [productId]);

//   const handleQuantityChange = (e) => {
//     const newQuantity = parseInt(e.target.value);
//     if (newQuantity > 0) {
//       setQuantity(newQuantity);
//     }
//   };

//   const handleAddToCart = () => {
//     addToCart({ ...product, quantity });
//   };

//   const handleBuyNow = () => {
//     addToCart({ ...product, quantity });
//     navigate("/cart");
//   };

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="product-profile">
//       <Header />
//       <div className="product-profile-box">
//         <div className="product-image">
//           <img src={product.image} alt={product.name} />
//         </div>
//         <div className="product-details">
//           <h2>{product.name}</h2>
//           <p className="product-price">{product.price.toLocaleString("vi-VN")} VNĐ</p>
//           <p className="product-description">{product.description}</p>
//           <p className="product-details-text">{product.details}</p>

//           <div className="product-quantity">
//             <label>Số lượng:</label>
//             <input 
//               type="number" 
//               value={quantity} 
//               onChange={handleQuantityChange} 
//               min="1" 
//               step="1"
//             />
//           </div>

//           <div className="product-actions">
//             <button onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
//             <button onClick={handleBuyNow}>Mua ngay</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductProfile;
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useCart } from "../cart/CartContext.";
// import Header from "../Trangchu/Header"; // Import Header vào
// import "./ProductProfile.scss";

// const ProductProfile = () => {
//   const { productId } = useParams(); // Lấy ID sản phẩm từ URL
//   const navigate = useNavigate();
//   const { addToCart } = useCart();
//   const [product, setProduct] = useState(null);
//   const [quantity, setQuantity] = useState(1); 


//   // Dữ liệu sản phẩm mô phỏng, có thể thay bằng API hoặc database
//   const productList = [
//     { id: 1, name: "Clopheniramin 4mg", price: 100000, image: "https://via.placeholder.com/300", description: "Thuốc Clopheniramin giúp điều trị triệu chứng viêm mũi dị ứng", details: "Chi tiết sản phẩm..."},
//     // Các sản phẩm khác
//   ];

//   useEffect(() => {
//     const selectedProduct = productList.find((product) => product.id === parseInt(productId));
//     if (selectedProduct) {
//       setProduct(selectedProduct);
//     }
//   }, [productId]);

//   // Cập nhật số lượng
//   const handleQuantityChange = (e) => {
//     const newQuantity = parseInt(e.target.value);
//     if (newQuantity > 0) {
//       setQuantity(newQuantity);
//     }
//   };

//   const handleAddToCart = () => {
//     addToCart({ ...product, quantity }); // Thêm sản phẩm và số lượng vào giỏ hàng
//   };

//   const handleBuyNow = () => {
//     addToCart({ ...product, quantity });
//     navigate("/cart");
//   };

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="product-profile">
//       <Header /> {/* Hiển thị Header */}
//       <div className="product-profile-box">
//         <div className="product-image">
//           <img src={product.image} alt={product.name} />
//         </div>
//         <div className="product-details">
//           <h2>{product.name}</h2>
//           <p className="product-price">{product.price.toLocaleString("vi-VN")} VNĐ</p>
//           <p className="product-description">{product.description}</p>
//           <p className="product-details-text">{product.details}</p>

//           <div className="product-quantity">
//             <label>Số lượng:</label>
//             <input 
//               type="number" 
//               value={quantity} 
//               onChange={handleQuantityChange} 
//               min="1" 
//               step="1"
//             />
//           </div>

//           <div className="product-actions">
//             <button onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
//             <button onClick={handleBuyNow}>Mua ngay</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductProfile;
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useCart } from "../cart/CartContext.";
// import Header from "../Trangchu/Header"; // Import Header vào
// import "./ProductProfile.scss";

// const ProductProfile = () => {
//   const { productId } = useParams(); // Lấy ID sản phẩm từ URL
//   const navigate = useNavigate();
//   const { addToCart } = useCart();
//   const [product, setProduct] = useState(null);
//   const [quantity, setQuantity] = useState(1); // Sử dụng `quantity` để quản lý số lượng

//   // Dữ liệu sản phẩm mô phỏng, có thể thay bằng API hoặc database
//   const productList = [
//     { id: 1, name: "Clopheniramin 4mg", price: 100000, image: "https://via.placeholder.com/300", description: "Thuốc Clopheniramin giúp điều trị triệu chứng viêm mũi dị ứng", details: "Chi tiết sản phẩm..."},
//     // Các sản phẩm khác
//   ];

//   useEffect(() => {
//     const selectedProduct = productList.find((product) => product.id === parseInt(productId));
//     if (selectedProduct) {
//       setProduct(selectedProduct);
//     }
//   }, [productId]);

//   // Cập nhật số lượng
//   const handleQuantityChange = (e) => {
//     const newQuantity = parseInt(e.target.value);
//     if (newQuantity > 0) {
//       setQuantity(newQuantity);
//     }
//   };

//   const handleAddToCart = () => {
//     // Dùng quantity để thêm sản phẩm vào giỏ hàng
//     addToCart({ ...product, quantity });
//   };

//   const handleBuyNow = () => {
//     addToCart({ ...product, quantity }); // Thêm sản phẩm và số lượng vào giỏ hàng
//     navigate("/cart"); // Điều hướng đến trang giỏ hàng
//   };

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="product-profile">
//       <Header /> {/* Hiển thị Header */}
//       <div className="product-profile-box">
//         <div className="product-image">
//           <img src={product.image} alt={product.name} />
//         </div>
//         <div className="product-details">
//           <h2>{product.name}</h2>
//           <p className="product-price">{product.price.toLocaleString("vi-VN")} VNĐ</p>
//           <p className="product-description">{product.description}</p>
//           <p className="product-details-text">{product.details}</p>

//           <div className="product-quantity">
//             <label>Số lượng:</label>
//             <input 
//               type="number" 
//               value={quantity}  // Sử dụng quantity để hiển thị số lượng
//               onChange={handleQuantityChange} 
//               min="1" 
//               step="1"
//             />
//           </div>

//           <div className="product-actions">
//             <button onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
//             <button onClick={handleBuyNow}>Mua ngay</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductProfile;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../cart/CartContext.";
import Header from "../Trangchu/Header";
import "./ProductProfile.scss";

const ProductProfile = () => {
  const { productId } = useParams(); // Lấy ID sản phẩm từ URL
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // Sử dụng `quantity` để quản lý số lượng

  const productList = [
    { id: 1, name: "Clopheniramin 4mg", price: 100000, image: "https://via.placeholder.com/300", description: "Thuốc Clopheniramin giúp điều trị triệu chứng viêm mũi dị ứng", details: "Chi tiết sản phẩm..." },
    // Các sản phẩm khác
  ];

  useEffect(() => {
    const selectedProduct = productList.find((product) => product.id === parseInt(productId));
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [productId]);

  // Cập nhật số lượng
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity }); // Thêm sản phẩm và số lượng vào giỏ hàng
  };

  const handleBuyNow = () => {
    addToCart({ ...product, quantity });
    navigate("/cart"); // Điều hướng đến trang giỏ hàng
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-profile">
      <Header /> {/* Hiển thị Header */}
      <div className="product-profile-box">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-details">
          <h2>{product.name}</h2>
          <p className="product-price">{product.price.toLocaleString("vi-VN")} VNĐ</p>
          <p className="product-description">{product.description}</p>
          <p className="product-details-text">{product.details}</p>

          <div className="product-quantity">
            <label>Số lượng:</label>
            <input 
              type="number" 
              value={quantity} 
              onChange={handleQuantityChange} 
              min="1" 
              step="1"
            />
          </div>

          <div className="product-actions">
            <button onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
            <button onClick={handleBuyNow}>Mua ngay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductProfile;
