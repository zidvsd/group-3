import { useEffect, useRef, useState } from "react";
import useArticlesData from "../hook/useArticlesData";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { slugify } from "../utils/utils.js";
const ModalSearch = ({ isOpen, onClose, closeWhenClick }) => {
  const modalRef = useRef(null);
  const [query, setQuery] = useState("");
  const data = useArticlesData();

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = data.filter(
    (article) =>
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.author.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="bg-opacity-50 fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="w-full max-w-lg rounded-lg bg-[#1c1f2c] p-6 text-white shadow-lg"
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Search Articles</h2>
        </div>

        <input
          type="text"
          placeholder="Search by title or author..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-md bg-[#2a2d3d] px-4 py-2 text-white placeholder-gray-400 outline-none"
          autoFocus
        />

        <div className="scrollbar-thin scrollbar-thumb-[#3b3f53] scrollbar-track-[#1c1f2c] mt-4 max-h-60 overflow-y-auto scroll-smooth pr-2">
          {filtered.length === 0 ? (
            <p className="text-sm text-gray-400">No results found.</p>
          ) : (
            filtered.map((article, index) => (
              <Link
                onClick={closeWhenClick}
                to={`/blogs/${slugify(article.title)}`}
                key={index}
                className="mb-2 flex cursor-pointer flex-col rounded-md bg-[#2a2d3d] px-4 py-3 hover:bg-neutral-700"
              >
                <p className="text-lighter-base text-sm font-semibold">
                  {article.title}
                </p>
                <p className="text-xs text-white opacity-70">
                  by {article.author}
                </p>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalSearch;
