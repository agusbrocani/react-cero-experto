const firstName = 'Agustín';
const lastName = 'Brocani';

const MyAwesomeApp = () => {
    return (
        <div data-testid="div-app">
            <h1 data-testid="first-name-title">{firstName}</h1>
            <h3>{lastName}</h3>
        </div>
    );
};

export default MyAwesomeApp;