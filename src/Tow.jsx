import Tow from "./assets/Tow.svg"
export default function Towb() {

    const styles = {
        width: '80%', // Adjust width as needed
        height: '60%', // Maintain aspect ratio
    };

    return (
        <div>
            <img src={Tow} style={styles} alt="tow" />
        </div>
    );
}

// const styles = {
//     width: '80%', // Adjust width as needed
//     height: '60%', // Maintain aspect ratio
// };


// function Tow (props) {
//     return (
//         <div className="Tow">
//             {props.children} {/* This will render the children passed to Tow component */}
//         </div>
//     );
// };

// export default Tow;