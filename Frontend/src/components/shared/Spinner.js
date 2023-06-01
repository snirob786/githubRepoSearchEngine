const Loader = require('../../assets/images/spinner.gif')
const Spinner = (props) => {
    return (
        <>
            <div className="spinnerContainer">
                <img src={Loader}></img>
                <h3>Loading..</h3>
            </div>
        </>
    );
}

export default Spinner;
