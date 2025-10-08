import { SlSocialLinkedin } from "react-icons/sl";
import { FaSquareGithub } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-[#1c0d30] text-gray-300 py-10 mt-10 border-t border-gray-800">
      <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-4">
        {/* Social Icons */}
        <div className="flex gap-8">
          <a
            href="https://www.linkedin.com/in/mohamedroshansafeek5"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-all hover:-translate-y-1 text-white text-2xl shadow-lg"
          >
            <SlSocialLinkedin />
          </a>

          <a
            href="https://github.com/mohamedroshansafeek"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all hover:-translate-y-1 text-white text-2xl shadow-lg"
          >
            <FaSquareGithub />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-400 font-mono">
          © 2025 <span className="text-white font-semibold">Mohamed Roshan</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
