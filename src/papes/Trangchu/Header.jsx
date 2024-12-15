import "./header.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div><div className="header-container">
        {/* Logo góc trái */}
        <div className="top">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo" style={{paddingLeft:"0px"}}>Medical App</span>
          </Link>
        </div>

        {/* Thanh tìm kiếm ở giữa */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm, thuốc..."
            className="search-input"
          />
          <button className="search-button">
            <SearchOutlinedIcon />
          </button>
        </div>

        {/* User actions góc phải */}
        <div className="user-actions">
          <Link to="/cart" className="action-item">
            <ShoppingCartOutlinedIcon />
            <span>Giỏ hàng</span>
          </Link>
          <Link to="/account" className="action-item">
            <PersonOutlineOutlinedIcon />
            <span>Tài khoản</span>
          </Link>
        </div>
      </div></div>
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
