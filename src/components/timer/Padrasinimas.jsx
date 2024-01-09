export default function Padrasinimas({padrasinimasOn, setPadrasinimasOn, selectedPadrasinimas, handleChange, handleSubmit}) {
    
    if(padrasinimasOn === false) {
        return null;
    }

    return (
        <>
            <div className="blanket padrasinimas" onClick={_ => setPadrasinimasOn(false)}></div>
            <div className="padr-container">
                <div className="padr-header">
                    <h2 className="padr-h2">Kas kiek laiko norite padrąsinimo?</h2>
                    <button className="close-padrasinimas" onClick={_ => setPadrasinimasOn(false)}>x</button>
                </div>
                <div className="padr-input">
                    <input type="text" value={selectedPadrasinimas} onChange={handleChange} />
                    <span>sek.</span>
                </div>
                <button className="padr-nustatyti" onClick={handleSubmit}>Nustatyti</button>
            </div>
        </>
    );
}