import React from "react";
import { SearchBarProps } from "../types/SearchBarProps";

const SimpleSearchBar: React.FC<SearchBarProps> = ({ searchTerm, onChange, onReset }) => (
    <div className="flex items-center space-x-2">
        <input
            type="text"
            value={searchTerm}
            onChange={onChange}
            placeholder="Search..."
            className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {searchTerm && (
            <button
                onClick={onReset}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                aria-label="Reset search"
                type="button"
            >
                ✕
            </button>
        )}
    </div>
);
export default SimpleSearchBar;

