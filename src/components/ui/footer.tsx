const Footer = () => {
  return (
    <footer
      className="bg-black border-t border-white/10 pt-20 pb-10"
      data-purpose="main-footer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
          <div className="text-xl font-light tracking-[0.3em] uppercase">
            <span>HD</span>
            <span className="text-[10px] tracking-[0.5em] block -mt-1 opacity-70">
              Perfume
            </span>
          </div>
          <p className="text-sm opacity-50 font-light leading-relaxed">
            The pinnacle of artisanal perfumery. Heritage, elegance, and soul in
            every drop.
          </p>
        </div>
        <div>
          <h5 className="text-xs uppercase tracking-widest mb-6 font-semibold">
            Concierge
          </h5>
          <ul className="space-y-4 text-sm opacity-60 font-light">
            <li>
              <a className="hover:text-brand-gold transition-colors" href="#">
                Bespoke Consultations
              </a>
            </li>
            <li>
              <a className="hover:text-brand-gold transition-colors" href="#">
                Shipping &amp; Returns
              </a>
            </li>
            <li>
              <a className="hover:text-brand-gold transition-colors" href="#">
                Sustainability
              </a>
            </li>
            <li>
              <a className="hover:text-brand-gold transition-colors" href="#">
                Store Locator
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-xs uppercase tracking-widest mb-6 font-semibold">
            Collections
          </h5>
          <ul className="space-y-4 text-sm opacity-60 font-light">
            <li>
              <a className="hover:text-brand-gold transition-colors" href="#">
                The Heritage Line
              </a>
            </li>
            <li>
              <a className="hover:text-brand-gold transition-colors" href="#">
                Limited Editions
              </a>
            </li>
            <li>
              <a className="hover:text-brand-gold transition-colors" href="#">
                Home Fragrance
              </a>
            </li>
            <li>
              <a className="hover:text-brand-gold transition-colors" href="#">
                Gifts &amp; Sets
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-xs uppercase tracking-widest mb-6 font-semibold">
            Newsletter
          </h5>
          <p className="text-xs opacity-50 mb-4 italic">
            Join our inner circle for exclusive previews.
          </p>
          <form className="flex border-b border-white/20 pb-2">
            <input
              className="bg-transparent border-none text-xs focus:ring-0 w-full placeholder:text-white/20 px-0"
              placeholder="Your email address"
              type="email"
            />
            <button
              className="text-brand-gold hover:text-white transition-colors"
              type="submit"
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
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 text-[10px] uppercase tracking-widest opacity-40">
        <p>© 2026 HD Perfume House. All rights reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
