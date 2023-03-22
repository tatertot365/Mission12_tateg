import React from "react";

{/*This component is the team card and is styled using the tableStyle variable */}
const tableStyle = {
    border: "1px solid black",
    borderCollapse: "collapse",
    textAlign: "center",
    margin: "auto",
    width: "50%",
}

class TeamCard extends React.Component {
    render() {
        return (
            <tr style={tableStyle}>
                <td>{this.props.school}</td>
                <td>{this.props.name}</td>
                <td>{this.props.city}, {this.props.state}</td>
            </tr>
        );
    }
}

export default TeamCard;