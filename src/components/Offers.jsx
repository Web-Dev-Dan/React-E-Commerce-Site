import './Offers.css';

export default function Offers() {

    // Temporarily access API data
    function returnData() {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="offers">
            <h2 className="offers__header">Special Offers</h2>
            <div className="offers__boxes">
                50% Off
            </div>
        </div>
    )
}