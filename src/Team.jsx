import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(11);
    const handleAddPlayer = () => {
        const newPlayer = team + 1;
        setTeam(newPlayer);
    }
    const handleRemovePlayer = () => {
        const newPlayer = team - 1;
        setTeam(newPlayer);
    }
    const teamStyle = {
        border: '2px solid red',
        margin: '15px',
        padding: '15px',
        borderRadius: '20px'
    }
    const buttonStyle = {
        display: 'flex',
        gap: '10px'
    }
    return (
        <div style={teamStyle}>
            <h3>Player: {team}</h3>
            <div style={buttonStyle}>
                <button onClick={handleAddPlayer}>Add Player</button>
                <button onClick={handleRemovePlayer}>Remove Player</button>
            </div>
        </div>
    )
}