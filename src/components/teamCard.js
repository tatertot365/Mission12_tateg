import React from "react";

{/*This component is the team card and is styled using the tableStyle variable */}
const tableStyle = {
    border: "1px solid black",
    borderCollapse: "collapse",
    textAlign: "center",
    margin: "auto",
    width: "50%",
}

const TeamCard = (props) => {
    return (
        <tr style={tableStyle}>
            <td>{props.school}</td>
            <td>{props.name}</td>
            <td>{props.city}, {props.state}</td>
        </tr>
    );
}

export default TeamCard;