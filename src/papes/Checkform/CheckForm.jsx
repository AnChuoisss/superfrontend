import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CheckForm.scss";

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "paymentMethod") {
      setShowQRCode(value === "transfer");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Customer Information:", formData);
    alert("Mua hàng thành công ");

    navigate("/");
  };

  return (
    <div className="checkout-form-container">
      <h2>Thông tin nhận hàng</h2>
      <form onSubmit={handleSubmit}>
        <label>
        <h3>Họ và tên</h3>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}  
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
            required
          />
        </label>
        <label>
        <h3>Phương thức thanh toán</h3>
          <div className="radio-options">
            <label className="radio-label">
              <span>Thanh toán khi nhận hàng</span>
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                checked={formData.paymentMethod === "cash"}
                onChange={handleInputChange}
              />
            </label>
            <label className="radio-label">
              <span>Chuyển khoản</span>
              <input
                type="radio"
                name="paymentMethod"
                value="transfer"
                checked={formData.paymentMethod === "transfer"}
                onChange={handleInputChange}
              />
            </label>
          </div>
        </label>
        {showQRCode && (
          <div className="qr-code-section" style={{marginBottom:"20px"}}>
            <img
              src="/QR.png"
              alt="QR Code"
            />
          </div>
        )}
        <button type="submit">Xác nhận</button>
      </form>
    </div>
  );
};

export default CheckoutForm;