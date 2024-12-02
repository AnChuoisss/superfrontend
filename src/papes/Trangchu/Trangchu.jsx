import React from "react";
import "./TrangChu.scss";
import Header from "./Header.jsx"; // Component Header đã tạo sẵn
import Footer from "./Footer.jsx";

const TrangChu = () => {
  const featuredProducts = [
    { id: 1, name: "Thuốc A", price: "100,000 VNĐ", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Thuốc B", price: "200,000 VNĐ", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Thuốc C", price: "150,000 VNĐ", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Thuốc D", price: "180,000 VNĐ", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="trangchu">
      <Header />
      <div className="content">
        <div className="banner">
          <h1>Chào mừng đến với Medical App</h1>
          <p>
            Khám phá các sản phẩm chăm sóc sức khỏe chất lượng cao với giá cả hợp lý. Sức khỏe của bạn là ưu tiên hàng đầu của chúng tôi!
          </p>
        </div>
        <div className="featured-products">
          <h2>Sản phẩm nổi bật</h2>
          <div className="product-list">
            {featuredProducts.map((product) => (
              <div className="product-item" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button>Thêm vào giỏ hàng</button>
              </div>
            ))}
          </div>
        </div>
        
      </div>
      
      <div className="footer"><Footer/></div>
      

    </div>
  );
};

export default TrangChu;
