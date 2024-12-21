
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CheckForm.scss";
import Header from "../Trangchu/Header";
import Footer from "../Trangchu/Footer";
import { useCart } from "../cart/CartContext.";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    paymentMethod: "cash",
  });
  const [showQRCode, setShowQRCode] = useState(false);
  const navigate = useNavigate();

  const { cart } = useCart(); // Lấy dữ liệu giỏ hàng từ context

  // Tính toán tổng số lượng và tổng giá tiền
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const shippingCost = 20000;
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  ) + shippingCost;

  // Xử lý thay đổi trong form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "paymentMethod") {
      setShowQRCode(value === "transfer");
    }
  };

  // Xử lý gửi form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Customer Information:", formData);
    console.log("Cart Information:", cart);
    alert("Thông tin của bạn đã được gửi!");
    navigate("/");
  };

  return (
    <>
      <Header />
      <div className="checkout-page-container" >
        <div className="checkout-form">
          <h1 style={{ textAlign: "center" }}>Thông tin nhận hàng</h1>
          <form onSubmit={handleSubmit}>
            <label>
              <h3>Họ và tên</h3>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Họ và tên"
                required
              />
            </label>
            <label>
              <h3>Số điện thoại</h3>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Số điện thoại"
                required
              />
            </label>
            <label>
              <h3>Địa chỉ nhận hàng</h3>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Địa chỉ nhận hàng"
                required
              />
            </label>
            <label>
              <h3>Email</h3>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
              />
            </label>
            <label>
              <h3>Phương thức thanh toán</h3>
              <div className="payment-options">
                <div className="payment-box">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={formData.paymentMethod === "cash"}
                    onChange={handleInputChange}
                  />
                  <span>Thanh toán khi nhận hàng</span>
                </div>
                <div className="payment-box">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="transfer"
                    checked={formData.paymentMethod === "transfer"}
                    onChange={handleInputChange}
                  />
                  <span>Chuyển khoản</span>
                </div>
              </div>
            </label>
            {showQRCode && (
              <div className="qr-code-section" style={{ marginBottom: "20px" }}>
                <img src="/QR.png" alt="QR Code" />
              </div>
            )}
            <button type="submit">Xác nhận</button>
          </form>
        </div>
        <div className="cart-summary">
          <div className="tren">
          <h1 style={{textAlign: "center"}}>Thông tin thanh toán</h1>
          <p>Tổng sản phẩm: {totalQuantity}</p>
          <p>Giá vận chuyển: {shippingCost.toLocaleString("vi-VN")} VNĐ</p>
          <hr />
          <p style={{ marginTop: "20px" }}>
            Tổng tiền: {totalPrice.toLocaleString("vi-VN")} VNĐ
          </p>
          </div>
          <div className="duoi">
            XIn chao
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default CheckoutForm;