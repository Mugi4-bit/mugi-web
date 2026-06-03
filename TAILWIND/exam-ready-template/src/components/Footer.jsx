import { siteInfo } from "../data/siteData.js";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-neutral-300 md:flex-row md:items-center md:justify-between">
        <p className="text-lg font-black text-lime-300">{siteInfo.brand}</p>
        <div className="flex flex-wrap gap-4">
          <a href="#programs" className="hover:text-white">
            Programs
          </a>
          <a href="#coaches" className="hover:text-white">
            Coaches
          </a>
          <a href="#pricing" className="hover:text-white">
            Pricing
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
