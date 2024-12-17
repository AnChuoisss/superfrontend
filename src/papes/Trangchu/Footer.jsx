import './Footer.scss'
const Footer = ()=>{
    return (
        <div className="footer">
            <div className="footer_footer">
                <div className="Ve_chung_toi">
                    <h3>Về Pharmacity</h3>
                    <ul>
                        <li>Giới thiệu</li>
                        <li>Hệ thống cửa hàng</li>
                        <li>Giấy phép kinh doanh</li>
                    </ul>
                </div>
                <div className="danh_muc">
                    <h3>Danh mục</h3>
                    <li>Thuốc</li>
                    <li>Tra cứu bệnh</li>
                    <li>Thực phẩm chức năng</li>
                </div>
                <div className="tong_dai">
                    <h3>Tổng đài hỗ trợ</h3>
                    <p>Hỗ trợ đặt hàng</p>
                    <p>1800 1515</p>
                </div>
                <div className="social_media">
                    <h3>Theo dõi chúng tôi trên</h3>
                    <i><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>
</i><span>Facebook</span>
<i class="fa-brands fa-facebook"></i><i></i><p>Facebook</p>
                    <i></i><p>Facebook</p>

                </div>
                
            </div>
            <div className='ngang'></div>
            <div className='footer_last'>
                <div className="left">
                    <h3>Công Ty Cổ Phần Dược Phẩm Pharmacity</h3>
                    <div>Địa chỉ: 123 Nguyễn Văn Cừ, P. Nguyễn Cư</div>
                    <div>Điện thoại: 1800 6821 - Email: cskh@pharmacity.vn</div>
                </div>
                <div className="right">
                    <div>GCNDKDN: 0311770883 do sở KH & ĐT TP.HCM cấp lần đầu ngày 05/05/2012.</div>
                    <div>GCNDDKKDD: 6782/DDKKDDD-ĐNai ngày cấp 26/4/2022 Sở Y Tế Tỉnh Đồng Nai.

                </div>
                </div>
            </div>
        </div>

    )
}
export default Footer;