
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link để tạo liên kết
import "./Trangchu.scss";
import Header from "./Header";
import { useCart } from "../cart/CartContext."; // Sửa lại import CartContext cho đúng
import Slideshow from "./SlideShow.jsx";
import Footer from "./Footer.jsx";
import ChatWidget from "./Chatmode.jsx";

const TrangChu = () => {
  const { addToCart } = useCart(); // Lấy hàm addToCart từ context
  const [searchTerm, setSearchTerm] = useState(""); // State cho tìm kiếm
  const [filterType, setFilterType] = useState(""); // State cho loại sản phẩm
  const [isChatOpen, setIsChatOpen] = useState(false); // State để quản lý hiển thị bảng chat
  const [chatMode, setChatMode] = useState("chatbot"); // State để chọn chế độ chat

  const featuredProducts = [
    { id: 1, name: "Clopheniramin 4mg", price: 100000, image: "/Clopheniramin 4mg.jpg", type: "thuoc" },
    { id: 2, name: "Paracetamol 500mg", price: 200000, image: "/paracetamol.jpg", type: "thuoc" },
    { id: 3, name: "Veet Pure (Kem tẩy lông)", price: 150000, image: "/Veet Pure(Kem tay long).webp", type: "duoc-my-pham" },
    { id: 4, name: "Thuốc D", price: 180000, image: "https://via.placeholder.com/150", type: "thuoc" },
    { id: 11, name: "Thuốc E", price: 120000, image: "https://via.placeholder.com/150", type: "thuoc" },
    { id: 22, name: "Thuốc F", price: 220000, image: "https://via.placeholder.com/150", type: "thuoc" },
    { id: 33, name: "Thuốc G", price: 130000, image: "https://via.placeholder.com/150", type: "thuoc" },
    { id: 43, name: "Thuốc H", price: 170000, image: "https://via.placeholder.com/150", type: "thuoc" },
  ];

  // Lọc sản phẩm theo từ khóa tìm kiếm và loại
  const filteredProducts = featuredProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterType === "" || product.type === filterType)
  );

  const themsanpham = (product) => {
    const quantity = 1;
    addToCart({ ...product, quantity });
  };

  return (
    <div className="trangchu">
      {/* Header */}
      <Header setSearchTerm={setSearchTerm} setFilterType={setFilterType} />

      <Slideshow />

      {/* Nội dung sản phẩm */}
      <div className="content">
        <h2>Sản phẩm nổi bật</h2>
        <div className="product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="product-item" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h3>
                  <Link to={`/products/${product.id}`}>{product.name}</Link>
                </h3>
                <p>{product.price.toLocaleString("vi-VN")} VNĐ</p>
                <button onClick={() => themsanpham(product)}>Thêm vào giỏ hàng</button>
              </div>
            ))
          ) : (
            <p>Không tìm thấy sản phẩm nào phù hợp.</p>
          )}
        </div>
      </div>
      <ChatWidget />
      {/* <div className="chat-widget">
        <button className="chat-bubble" onClick={() => setIsChatOpen(!isChatOpen)}>
          💬
        </button>

        {isChatOpen && (
          <div className="chat-box">
            <div className="chat-header">
              <h4>Hỗ trợ trực tuyến</h4>
              <button onClick={() => setIsChatOpen(false)}>✖</button>
            </div>
            <div className="chat-options">
              <button onClick={() => setChatMode("chatbot")}>
                Chatbot
              </button>
              <button onClick={() => setChatMode("tuvan")}>
                Tư vấn
              </button>
            </div>
            <div className="chat-content">
              {chatMode === "chatbot" ? (
                <p>Bạn đang trò chuyện với Chatbot.</p>
              ) : (
                <p>Bạn đang trò chuyện với nhân viên tư vấn.</p>
              )}
            </div>
          </div>
        )}
      </div> */}

      

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TrangChu;


