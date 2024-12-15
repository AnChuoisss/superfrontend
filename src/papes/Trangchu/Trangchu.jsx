
// import React, { useState } from "react";
// import { Link } from "react-router-dom"; // Import Link để tạo liên kết
// import "./Trangchu.scss";
// import Header from "./Header";
// import { useCart } from "../cart/CartContext.";

// const TrangChu = () => {
//   const { addToCart } = useCart();
//   const [searchTerm, setSearchTerm] = useState("");

//   const featuredProducts = [
//     { id: 1, name: "Thuốc A", price: 100000, image: "https://via.placeholder.com/150" },
//     { id: 2, name: "Thuốc B", price: 200000, image: "https://via.placeholder.com/150" },
//     { id: 3, name: "Thuốc C", price: 150000, image: "https://via.placeholder.com/150" },
//     { id: 4, name: "Thuốc D", price: 180000, image: "https://via.placeholder.com/150" },
//     { id: 11, name: "Thuốc A", price: 100000, image: "https://via.placeholder.com/150" },
//     { id: 22, name: "Thuốc B", price: 200000, image: "https://via.placeholder.com/150" },
//     { id: 33, name: "Thuốc C", price: 150000, image: "https://via.placeholder.com/150" },
//     { id: 43, name: "Thuốc D", price: 180000, image: "https://via.placeholder.com/150" },
//   ];

//   // Lọc sản phẩm theo tên
//   const filteredProducts = featuredProducts.filter((product) =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Cập nhật hàm addToCart để thêm sản phẩm với số lượng mặc định là 1
//   const themsanpham = (product) => {
//     const quantitye = 1; // Mặc định là 1
//     addToCart({ ...product, quantitye }); // Thêm sản phẩm và số lượng vào giỏ hàng
//   };

//   return (
//     <div className="trangchu">
//       <Header setSearchTerm={setSearchTerm} /> 
//       <div className="content">
//         <h2>Sản phẩm nổi bật</h2>
//         <div className="product-list">
//           {filteredProducts.map((product) => (
//             <div className="product-item" key={product.id}>
//               <img src={product.image} alt={product.name} />
//               <h3 style={{ textDecoration: "none" }}>
//                 <Link to={`/products/${product.id}`}>{product.name}</Link>
//               </h3>
//               <p>{product.price.toLocaleString("vi-VN")} VNĐ</p>
//               <button onClick={() => themsanpham(product)}>Thêm vào giỏ hàng</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrangChu;
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link để tạo liên kết
import "./Trangchu.scss";
import Header from "./Header";
import { useCart } from "../cart/CartContext."; // Sửa lại import CartContext cho đúng

const TrangChu = () => {
  const { addToCart } = useCart(); // Lấy hàm addToCart từ context
  const [searchTerm, setSearchTerm] = useState(""); // State cho tìm kiếm

  const featuredProducts = [
    { id: 1, name: "Thuốc A", price: 100000, image: "https://via.placeholder.com/150",type:"thuoc" },
    { id: 2, name: "Thuốc B", price: 200000, image: "https://via.placeholder.com/150" ,type:"thuoc"},
    { id: 3, name: "Thuốc C", price: 150000, image: "https://via.placeholder.com/150" ,type:"thuoc"},
    { id: 4, name: "Thuốc D", price: 180000, image: "https://via.placeholder.com/150" ,type:"thuoc"},
    { id: 11, name: "Thuốc E", price: 120000, image: "https://via.placeholder.com/150" ,type:"thuoc"},
    { id: 22, name: "Thuốc F", price: 220000, image: "https://via.placeholder.com/150" ,type:"thuoc"},
    { id: 33, name: "Thuốc G", price: 130000, image: "https://via.placeholder.com/150" ,type:"thuoc"},
    { id: 43, name: "Thuốc H", price: 170000, image: "https://via.placeholder.com/150" ,type:"thuoc"},
  ];

  // Lọc sản phẩm theo tên
  const filteredProducts = featuredProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Hàm thêm sản phẩm vào giỏ hàng
  const themsanpham = (product) => {
    const quantity = 1; // Mặc định số lượng là 1
    addToCart({ ...product, quantity }); // Thêm sản phẩm vào giỏ hàng với số lượng
  };

  return (
    <div className="trangchu">
      <Header setSearchTerm={setSearchTerm} /> {/* Đảm bảo Header nhận props setSearchTerm để cập nhật tìm kiếm */}
      <div className="content">
        <h2>Sản phẩm nổi bật</h2>
        <div className="product-list">
          {filteredProducts.map((product) => (
            <div className="product-item" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>
                <Link to={`/products/${product.id}`}>{product.name}</Link>
              </h3>
              <p>{product.price.toLocaleString("vi-VN")} VNĐ</p>
              <button onClick={() => themsanpham(product)}>Thêm vào giỏ hàng</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrangChu;


