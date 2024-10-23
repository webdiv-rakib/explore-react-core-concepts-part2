export default function Employee({ role }) {
    const { name, username, email } = role;
    return (
        <div className='employ'>
            <p>Name: {name}</p>
            <p>User Name: {username}</p>
            <p>Email: {email}</p>
        </div>
    )
}