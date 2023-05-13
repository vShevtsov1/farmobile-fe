import "../stylesSheets/users-admin.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const UsersAdmin = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const [token, setToken] = useState("");

    useEffect(() => {
        try {
            const token = localStorage.getItem("jwt");
            const decodedToken = jwt_decode(token);
            const expirationTime = decodedToken.exp;

            if (expirationTime < Date.now() / 1000) {
                navigate("/login");
            } else {
                setToken(token);
            }
        } catch (e) {
            navigate("/login");
        }
    }, [navigate]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let config = {
                    method: "get",
                    maxBodyLength: Infinity,
                    url: "/user/all",
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                };

                const response = await axios.request(config);
                setUsers(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        if (token) {
            fetchData();
        }
    }, [token]);

    const handleRoleChange = (userId, event) => {
        const newRole = event.target.value;
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.idusers === userId ? { ...user, role: newRole } : user
            )
        );
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `/user/change-role/${userId}/${newRole}`,
            headers: {
                Authorization: "Bearer " + token,
            },
        };
        axios.request(config);
    };

    return (
        <div className={"users-admin-container"}>
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
        </div>
    );
};

export default UsersAdmin;
