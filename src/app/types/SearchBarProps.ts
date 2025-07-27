import { AdvancedSearch } from "./AdvancedSearch";

export interface SearchBarProps {
    searchTerm: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onReset: () => void;
}

export interface AdvancedSearchProps {
    onSearch: (advancedSearchFields: AdvancedSearch) => void;
    toggleSearchMode: () => void;
}
