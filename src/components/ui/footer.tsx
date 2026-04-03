const Footer = () => {
  return (
    <footer
      className="bg-black border-t border-white/10 pt-16 md:pt-20 pb-10"
      data-purpose="main-footer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 md:mb-20">
        {/* Brand Info */}
        <div className="space-y-6">
          <div className="text-xl font-light tracking-[0.3em] uppercase">
            <span>HD</span>
            <span className="text-[10px] tracking-[0.5em] block -mt-1 opacity-70">
              Perfume
            </span>
          </div>
          <p className="text-sm opacity-50 font-light leading-relaxed max-w-xs">
            Đỉnh cao của nghệ thuật chế tác nước hoa. Sự giao thoa của di sản,
            vẻ thanh lịch và tâm hồn trong từng giọt hương.
          </p>
        </div>

        {/* Support */}
        <div>
          <h5 className="text-xs uppercase tracking-widest mb-6 font-semibold">
            Dịch vụ khách hàng
          </h5>
          <ul className="space-y-4 text-sm opacity-60 font-light">
            <li>
              <a className="hover:text-brand-gold transition-colors" href="#">
                Tư vấn cá nhân
              </a>
            </li>
            <li>
              <a className="hover:text-brand-gold transition-colors" href="#">
                Giao hàng & Đổi trả
              </a>
            </li>
            <li>
              <a className="hover:text-brand-gold transition-colors" href="#">
                Phát triển bền vững
              </a>
            </li>
            <li>
              <a className="hover:text-brand-gold transition-colors" href="#">
                Tìm cửa hàng
              </a>
            </li>
          </ul>
        </div>

        {/* Collections */}
        <div>
          <h5 className="text-xs uppercase tracking-widest mb-6 font-semibold">
            Bộ sưu tập
          </h5>
          <ul className="space-y-4 text-sm opacity-60 font-light">
            <li>
              <a className="hover:text-brand-gold transition-colors" href="#">
                Dòng di sản
              </a>
            </li>
            <li>
              <a className="hover:text-brand-gold transition-colors" href="#">
                Phiên bản giới hạn
              </a>
            </li>
            <li>
              <a className="hover:text-brand-gold transition-colors" href="#">
                Hương thơm nội thất
              </a>
            </li>
            <li>
              <a className="hover:text-brand-gold transition-colors" href="#">
                Quà tặng & Bộ sản phẩm
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h5 className="text-xs uppercase tracking-widest mb-6 font-semibold">
            Bản tin
          </h5>
          <p className="text-xs opacity-50 mb-4 italic">
            Tham gia danh sách ưu tiên để nhận những đặc quyền sớm nhất.
          </p>
          <form className="flex border-b border-white/20 pb-2">
            <input
              className="bg-transparent border-none text-xs focus:ring-0 w-full placeholder:text-white/20 px-0"
              placeholder="Địa chỉ email của bạn"
              type="email"
            />
            <button
              className="text-brand-gold hover:text-white transition-colors"
              type="submit"
              aria-label="Đăng ký bản tin"
            >
              <svg
                fill="none"
                height="18"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 text-[10px] uppercase tracking-widest opacity-40">
        <p className="text-center md:text-left mb-4 md:mb-0">
          © 2026 HD Perfume House. Bảo lưu mọi quyền.
        </p>
        <div className="flex gap-8">
          <a className="hover:text-white transition-colors" href="#">
            Chính sách bảo mật
          </a>
          <a className="hover:text-white transition-colors" href="#">
            Điều khoản dịch vụ
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
