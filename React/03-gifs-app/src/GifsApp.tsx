import { mockGifs } from "./mocks-data/gifs.mock"

const GifsApp = () => {
    return (
        <>
            {/* Header */}
            <div className="content-center">
                <h1>Buscador de Gifs</h1>
                <p>Descubre y comparte el gif perfecto</p>
            </div>

            {/* Search */}
            <div className="search-container">
                <input type="text" placeholder="Buscar gifs" />
                <button>Buscar</button>
            </div>

            {/* Búsquedas previas */}
            <div className="previous-searches">
                <h2>Búsquedas previas</h2>
                <ul className="previous-searches-list">
                    <li>Goku</li>
                    <li>Saitama</li>
                    <li>Goku</li>
                    <li>Eldeng Ring</li>
                </ul>
            </div>

            {/* Búsquedas previas */}
            <div className="gifs-container">
                {
                    mockGifs.map((gif) => (
                        <div key={gif.id} className="gif-card">
                            <img src={gif.url} alt={gif.title} />
                            <h3>{gif.title}</h3>
                            <p>
                                {gif.width}x{gif.height} (1.5mb)
                            </p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default GifsApp
