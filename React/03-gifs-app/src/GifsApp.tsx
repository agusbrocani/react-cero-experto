import PreviousSearches from "./gifs/components/PreviousSearches";
import GifsList from "./gifs/GifsList";
import useGifs from "./gifs/hooks/useGifs";
import CustomHeader from "./shared/components/CustomHeader";
import SearchBar from "./shared/components/SearchBar";

const GifsApp = () => {
    const {
        gifs,
        previousTerms,
        handleTermClicked,
        handleSearch
    } = useGifs();

    return (
        <>
            {/* Header */}
            <CustomHeader
                title="Buscador de Gifs"
                description="Descubre y comparte el gif perfecto"
            />

            {/* Search */}
            <SearchBar
                placeholder="Buscar gifs"
                buttonName="Buscar"
                onQuery={(query: string) => handleSearch(query)}
            />

            {/* Búsquedas previas */}
            <PreviousSearches
                searches={previousTerms}
                onLabelClicked={handleTermClicked}
            />

            {/* Gifs */}
            <GifsList
                gifs={gifs}
            />
        </>
    )
}

export default GifsApp;
