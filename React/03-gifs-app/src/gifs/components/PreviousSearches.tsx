interface PreviousSerachesProps {
    searches: string[];
    onLabelClicked: (term: string) => void;
};

const PreviousSearches = ({ searches, onLabelClicked }: PreviousSerachesProps) => {
    return (
        <div className="previous-searches">
            <h2>Búsquedas previas</h2>
            <ul className="previous-searches-list">
                {
                    searches.map((term) =>
                        <li
                            key={term}
                            onClick={() => onLabelClicked(term)}
                        >
                            {term}
                        </li>)
                }
            </ul>
        </div>
    )
}

export default PreviousSearches;
