export default function Popup({popupOn, setPopupOn}) {
    
    if (popupOn === false) {
        return null;
    }

    const hidePopup = _ => {
        setPopupOn(false);
    }

    return (
        <>
            <div className="blanket"></div>
            <div className="popup">
                <button className="close-popup" onClick={hidePopup}>x</button>
            </div>
        </>
    );
}