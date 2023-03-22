import React from "react";
import TeamCard from "./teamCard";
import teams from "./CollegeBasketballTeams.json";

{/*This component is the team list and is styled using the tableStyle variable */}

const tableStyle = {
    border: "1px solid black",
    borderCollapse: "collapse",
    textAlign: "center",
    margin: "auto",
    width: "50%",

}

const TeamList = () => {
    return (
        <table style={tableStyle}>
            <thead>
                <tr>
                    <th>School</th>
                    <th>Team</th>
                    <th>Location</th>
                </tr>
            </thead>
            {teams.teams.map((team) => (
                <TeamCard
                    school={team.school}
                    name={team.name}
                    city={team.city}
                    state={team.state}
                />
            ))}
        </table>
    );
}

export default TeamList;