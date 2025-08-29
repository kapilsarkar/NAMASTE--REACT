import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-black/90 text-gray-400 py-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 text-center space-y-4">
        {/* Made with ❤️ */}
        <p className="text-xs sm:text-sm text-gray-500 flex items-center justify-center gap-1">
          Made with
          <span className="text-red-500 animate-heartbeat">❤️</span>
          by <span className="text-white font-semibold">Kapil Sarkar</span>
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-xl">
          <a
            href="https://www.linkedin.com/in/kapil-sarkar-439754249/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-125 hover:text-blue-400 duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/kapilsarkar"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-125 hover:text-gray-200 duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/kapil_cena1"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-125 hover:text-white duration-300"
          >
            <FaXTwitter />
          </a>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;

