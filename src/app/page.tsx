"use client";

import { use, useEffect, useState } from "react";
import { useDebounce } from "./hooks/useDebounce"; 
import { Advocate } from "./types/Advocate";
import Table from "./components/Table";
import SimpleSearchBar from "./components/SimpleSearchBar";
import AdvancedSearchBar from "./components/AdvancedSearchBar";
import { AdvancedSearch } from "./types/AdvancedSearch";

export default function Home() {
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [simpleSearch, setSimpleSearch] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    if (simpleSearch) {
      setIsLoading(true);
      setError("");
    }
    else{
      return
    }
    let route = ""
    let searchParams = ""
    if (debouncedSearchTerm === "" && simpleSearch) {
      route = "/api/advocates";
    }
    else if (simpleSearch) {
      route = "/api/advocates/simpleSearch";
      searchParams = `?term=${encodeURIComponent(debouncedSearchTerm)}`;
    } 
    fetch(route + searchParams)
      .then((res) => res.json())
      .then((json) => {
        setFilteredAdvocates(json.data);
      })
      .catch((err) => { // added error handling
        console.error(err);
        setError("Failed to fetch advocates");
      })
      .finally(() => setIsLoading(false)); // set loading to false after fetch completes
  }, [debouncedSearchTerm, simpleSearch]);

  const advancedSearch = (advancedSearchFields: AdvancedSearch) => {
    setIsLoading(true);
    const route = "/api/advocates/advancedSearch?";
    const searchParams = new URLSearchParams({
      ...advancedSearchFields,
      specialties: Array.isArray(advancedSearchFields.specialties) ? advancedSearchFields.specialties.join(",") : ""
    }).toString();
    fetch(route + searchParams)
      .then((res) => res.json())
      .then((json) => {
        setFilteredAdvocates(json.data);
      })
      .catch((err) => { // added error handling
        console.error(err);
        setError("Failed to fetch advocates");
      })
      .finally(() => setIsLoading(false)); // set loading to false after fetch completes
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const showProperView = () => {
    if (isLoading) {
      return showLoading();
    } else if (error) {
      return showError();
    } else {
      return <Table filteredAdvocates={filteredAdvocates} />; 
    }
  };

  const showLoading = () => {
    return <p>Loading...</p>;
  };

  const showError = () => {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  };

  const toggleSearchMode = () => {
    setSimpleSearch(!simpleSearch)
  }

  return (
    <main style={{ margin: "24px" }}>
      <h1>Solace Advocates</h1>
      <br />
      <div className="flex flex-row justify-between items-center mb-4">
        { simpleSearch ? (
            <SimpleSearchBar
              searchTerm={searchTerm}
              onChange={onChange}
              onReset={() => setSearchTerm("")}
            />
        ) : (
            <AdvancedSearchBar
              onSearch={advancedSearch}
              toggleSearchMode={toggleSearchMode}
            />
        )}
        {simpleSearch && (
          <button
            onClick={toggleSearchMode}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            type="button"
          >
            Switch to Advanced Search
          </button>
        )}
      </div>
      <br />
      {showProperView()}
      <br />
    </main>
  );
}
