import React, { useState } from "react";
import { Advocate } from "../types/Advocate";
import AdvocateRow from "./AdvocateRow";
import NoResultsRow from "./EmptyRow";
import { TableProps, Column } from "../types/TableProps";

const Table = ({ filteredAdvocates }: TableProps): JSX.Element => {
  const [sortAsc, setSortAsc] = useState(true);
  const [sortColumn, setSortColumn] = useState<keyof Advocate | "">("firstName");

  const sortedAdvocates = [...filteredAdvocates].sort((a, b) => {
    if (!sortColumn) return 0; // No sorting if no column is selected
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortAsc
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortAsc ? aValue - bValue : bValue - aValue;
    }
    return 0;
  });

  const handleColumnClick = (column: keyof Advocate) => {
    if(column === "specialties"){
      setSortColumn(""); // Reset sort column for specialties
      return; // Do not sort by specialties
    }
    if (sortColumn === column) {
      setSortAsc(!sortAsc);
    } else {
      setSortColumn(column);
      setSortAsc(true); 
    }
  };

  const createColumn = ({name, key}: Column) => {
    return (
      <th
        key={key}
        className="px-4 py-2 text-left font-semibold text-gray-700 cursor-pointer"
        onClick={() => handleColumnClick(key)}
      >
        <span className="inline-flex items-center">
          {name}
          <span className="ml-1 flex items-center" style={{ minWidth: "1em", display: "inline-block" }}>
            {sortColumn === key ? (sortAsc ? "▲" : "▼") : "\u00A0"}
          </span>
        </span>
      </th>
    );
  };


  const columns: Column[] = [
    {name: "First Name", key: "firstName"},
    {name: "Last Name", key: "lastName"},
    {name: "City", key: "city"},
    {name: "Degree", key: "degree"},
    {name: "Specialties", key: "specialties"},
    {name: "Years of Experience", key: "yearsOfExperience"},
    {name: "Phone Number", key: "phoneNumber"},
  ]

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 bg-white rounded-lg shadow">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((col: Column) => createColumn(col))}
          </tr>
        </thead>
        <tbody>
          {sortedAdvocates.length === 0 ? (
            <NoResultsRow />
          ) : (
            sortedAdvocates.map((advocate, key) => (
              <AdvocateRow advocate={advocate} key={key} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};



export default Table;