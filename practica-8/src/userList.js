

function UserList({users}){
    return(
        <div className="users-list">
        {users.map((user) => (

            <div key={user.id} className="user-card">
            {" "}
            <img src={`https://robohash.org/${user.id}`} alt="robot-pic" style={{width: "200px", height: "200px"}}/>
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
            <h3>{user.phone}</h3>

            </div>
        ))}

        </div>
    );
};

export default UserList