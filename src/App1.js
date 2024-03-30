import Student from "./Student"

// props = read only properties shared between different components
//         a parent component can send data to child component
//         < component key = value/>


// propTypes = a mechanism that ensures that the passed value is of correct datatype
// age: PropTypes.number

// defaultProps = default values for props in case they are not passed from the parent component
//   name: "Guest"

function App1() {
    return (<>
        <Student name="Kartavaya" age={18} isStudent={true} />
        <Student name="Patrick" age={32} isStudent={false} />
        <Student name="Janvi" age={24} isStudent={false} />
        <Student name="Gourav" age={18} isStudent={true} />
        <Student />
        </>
    )
}

export default App1