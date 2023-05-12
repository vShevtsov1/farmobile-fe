import "../stylesSheets/users-admin.css"
import React, {useEffect, useState} from "react";
import axios from "axios";

const UsersAdmin = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: '/user/all',
            headers: {}
        };
        axios.request(config)
            .then((response) => {
                setUsers(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [users])

    const handleRoleChange = (userId, event) => {
        const newRole = event.target.value;
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.idusers === userId ? { ...user, role: newRole } : user
            )
        );
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `/user/change-role/${userId}/${newRole}`,
        };
        axios.request(config);
    };
    return (<div className={"users-admin-container"}>
            <table>
                <thead>
                <tr>
                    <td>Id</td>
                    <td>Ім'я</td>
                    <td>Прізвище</td>
                    <td>Eлектронна пошта</td>
                    <td>Роль</td>
                    <td>Дійсний</td>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.idusers}>
                        <td>{user.idusers}</td>
                        <td>{user.name}</td>
                        <td>{user.surname}</td>
                        <td>{user.email}</td>
                        <td>
                            <select
                                value={user.role}
                                onChange={(event) => handleRoleChange(user.idusers, event)}
                            >
                                <option value="ADMIN">ADMIN</option>
                                <option value="USER">USER</option>
                            </select>
                        </td>
                        <td>{user.active ? "Так" : "Ні"}</td>
                    </tr>
                ))}
                </tbody>
            </table>
    </div>)
}
export default UsersAdmin;