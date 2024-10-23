import { useEffect, useState } from "react"

export default function Friends() {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h2>Friends: {friends.length}</h2>
        </div>
    )
}