  // import "./header.scss";
  // import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
  // import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
  // import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
  // import { Link } from "react-router-dom";
  // import Cart from"../../papes/cart/cart.jsx"
  // const Header = () => {
  //   return (
  //     <header className="header">
  //       <div className="header-container">
  //         {/* Logo góc trái */}
  //         <div className="top" style={{paddingRight:"250px"}}>
  //           <Link to="/" style={{ textDecoration: "none" }}>
  //             <span className="logo" style={{paddingLeft:"20px"}}>Medical App</span>
  //           </Link>
  //         </div>

  //         {/* Thanh tìm kiếm ở giữa */}
  //         <div className="search-bar">
  //           <input
  //             type="text"
  //             placeholder="Tìm kiếm sản phẩm, thuốc..."
  //             className="search-input"
  //           />
  //           <button className="search-button">
  //             <SearchOutlinedIcon />
  //           </button>
  //         </div>

  //         {/* User actions góc phải */}
  //         <div className="user-actions" style={{paddingRight:"20px"}} >
  //           <Link to="/Cart" className="action-item"  >
  //             <ShoppingCartOutlinedIcon />
  //             <span>Giỏ hàng</span>
  //           </Link>
  //           <Link to="/account" className="action-item">
  //             <PersonOutlineOutlinedIcon />
  //             <span>Tài khoản</span>
  //           </Link>
  //         </div>
  //       </div>
  //     </header>
  //   );
  // };

  // export default Header;
// import React from "react";
// import "./header.scss";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="header-container">
//         {/* Logo góc trái */}
//         <div className="top" style={{ paddingRight: "250px" }}>
//           <Link to="/" style={{ textDecoration: "none" }}>
//             <span className="logo" style={{ paddingLeft: "20px" }}>
//               Medical App
//             </span>
//           </Link>
//         </div>

//         {/* Thanh tìm kiếm ở giữa */}
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Tìm kiếm sản phẩm, thuốc..."
//             className="search-input"
//           />
//           <button className="search-button">
//             <SearchOutlinedIcon />
//           </button>
//         </div>

//         {/* User actions góc phải */}
//         <div className="user-actions" style={{ paddingRight: "20px" }}>
//           {/* Liên kết đến trang Giỏ hàng */}
//           <Link to="/cart" className="action-item">
//             <ShoppingCartOutlinedIcon />
//             <span>Giỏ hàng</span>
//           </Link>
//           <Link to="/login" className="action-item">
//             <PersonOutlineOutlinedIcon />
//             <span>Tài khoản</span>
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

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
          <Link to="/login" className="action-item">
            <PersonOutlineOutlinedIcon />
            <span>Tài khoản</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
