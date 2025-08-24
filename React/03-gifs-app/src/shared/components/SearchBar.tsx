import { useEffect, useState, type KeyboardEvent } from "react";

interface SearchBarProps {
    placeholder?: string;
    buttonName?: string;
    onQuery: (query: string) => void;
};

const SearchBar = ({
    placeholder = 'Buscar',
    buttonName = 'Buscar',
    onQuery
}: SearchBarProps) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        // Debounce
        const timeoutId = setTimeout(() => {
            onQuery(query);
        }, 700);

        // Función de limpieza
        return () => {
            clearTimeout(timeoutId);
        };
    }, [query, onQuery]);

    const handleSerach = () => {
        onQuery(query);
        setQuery('');
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSerach();
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleSerach}>{buttonName}</button>
        </div>
    )
}

export default SearchBar;
