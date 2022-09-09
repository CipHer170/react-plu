import React from "react";

function Footer() {
  return (
    <footer className="w-full h-[150px] flex items-center justify-center">
      <div className="creator">LOGO</div>
      <div className="social flex flex-col items-center justify-center">
        <a href="https://telegram.org/" className="text-[#1877f2]">
          telegram
        </a>
        <a
          href="http://instagram.com"
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#e94df7] to-[#df1b4c]"
        >
          instagram
        </a>
        <a href="http://facebook.com" className="text-[#1877f2]">
          facebook
        </a>
      </div>
    </footer>
  );
}

export default Footer;
