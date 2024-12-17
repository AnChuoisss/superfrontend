import React, { useState } from "react";
import "./header.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";


const Header = ({ setSearchTerm }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    setSearchTerm(searchQuery); // Truyền giá trị tìm kiếm lên TrangChu
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo góc trái */}
        <div className="top" style={{ paddingRight: "250px" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo" style={{ paddingLeft: "20px" }}>
              Medical App
            </span>
          </Link>
        </div>

        {/* Thanh tìm kiếm ở giữa */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm, thuốc..."
            className="search-input"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="search-button" onClick={handleSearchSubmit}>
            <SearchOutlinedIcon />
          </button>
        </div>

        {/* User actions góc phải */}
        <div className="user-actions" style={{ paddingRight: "20px" }}>
          {/* Liên kết đến trang Giỏ hàng */}
          <Link to="/cart" className="action-item">
            <ShoppingCartOutlinedIcon />
            <span>Giỏ hàng</span>
          </Link>
          <Link to="/account" className="action-item">
            <PersonOutlineOutlinedIcon />
            <span>Tài khoản</span>
          </Link>
        </div>
      </div>
      <div className="trangchu_navbar">
          <ul>
            <Link to="/Trangchu" className="action-item">Trang chủ </Link>
            <Link to="/giam_dau" className="action-item">Giảm đau</Link>
            <Link to ="/khang_sinh" className="action-item">Kháng sinh</Link>
            <Link to="/vitamin" className="action-item">Vitamin</Link>
            <Link to ="/thuoc_bo" className="action-item">Thuốc bổ</Link>
          </ul>
      </div>
    </header>
  );
};

export default Header;
