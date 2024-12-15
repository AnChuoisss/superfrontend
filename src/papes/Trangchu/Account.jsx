import { Link } from "react-router-dom"
import "./Account.css"
import Header from "./Header"
const Account = () => {
    return( 
       <div>
        <Header />
        <div>
        <div className="profile-container">
  {/* Sidebar */}
  <div className="sidebar__account">
    <h2>Menu</h2>
    <ul>
      <li className="active">
        <a href="#account">Tài khoản của tôi</a>
      </li>
      <li>
        <a href="#orders">Đơn mua</a>
      </li>
    </ul>
  </div>
  {/* Main Content */}
  <div className="main-content">
    {/* Account Section */}
    <div id="account" className="content-section">
      <div className="wrap"><h1>Tài khoản của tôi</h1>
      <Link to="/login">Đăng xuất</Link></div>
      <form>
        <label htmlFor="username">Tên đăng nhập</label>
        <input
          type="text"
          id="username"
          defaultValue="NguyenVanA"
          disabled=""
        />
        <label htmlFor="fullname">Tên cá nhân</label>
        <input type="text" id="fullname" defaultValue="Nguyễn Văn A" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" defaultValue="nguyenvana@gmail.com" />
        <label htmlFor="phone">Số điện thoại</label>
        <input type="tel" id="phone" defaultValue={"0123456789"} />
        <button type="button" className="btn-edit">
          Chỉnh sửa
        </button>
      </form>
    </div>
    {/* Orders Section */}
    <div id="orders" className="content-section">
      <h1>Đơn mua</h1>
      <ul className="order-status">
        <li>Chờ thanh toán</li>
        <li>Vận chuyển</li>
        <li>Chờ giao hàng</li>
        <li>Hoàn thành</li>
        <li>Đã hủy</li>
        <li>Trả hàng/Hoàn tiền</li>
      </ul>
    </div>
  </div>
</div>

        </div>
       </div>
    )
}
export default Account