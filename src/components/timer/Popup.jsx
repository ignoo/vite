export default function Popup({popupOn, setPopupOn}) {
    
    if (popupOn === false) {
        return null;
    }

    const hidePopup = _ => {
        setPopupOn(false);
    }

    return (
        <>
            <div className="blanket popupbl" onClick={hidePopup}></div>
            <div className="popup" onClick={hidePopup}></div>
        </>
    );
}