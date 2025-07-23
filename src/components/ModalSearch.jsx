import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";

const searchData = [
  {
    category: "Articles",
    items: ["beaTheG", "kurtBugok"],
  },
];

const ModalSearch = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="w-[380px] rounded-xl bg-[#1c1f2c] p-4 text-white shadow-lg"
      >
        {/* Search Bar */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-md bg-[#2a2d3d] px-4 py-2 text-white placeholder-gray-400 outline-none"
            autoFocus
          />
          <div className="rounded-md bg-[#2a2d3d] px-2 py-1 text-xs text-gray-300">
            esc
          </div>
        </div>

        {/* Content */}
        <div className="mt-4 space-y-6">
          {searchData.map((section, index) => (
            <div key={index}>
              <h4 className="mb-3 text-sm font-semibold text-gray-400">
                {section.category}
              </h4>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex cursor-pointer items-center justify-between rounded-md bg-[#2a2d3d] px-4 py-2 text-sm hover:bg-neutral-600 hover:text-white"
                  >
                    <span>
                      <span className="mr-1 text-blue-400">#</span>
                      {item}
                    </span>
                    <span className="text-gray-400">›</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-xs text-gray-500">
          Search by{" "}
          <a
            href="https://www.algolia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Algolia
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModalSearch;
