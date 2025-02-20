import React, { useEffect } from "react";
import useUserProfileStore from "../../store/UserProfileStore";
import Loader from "../Loader";
import './ManageUsers.css'

const ManageUsers = () => {
    const { users, fetchAllUsers, loading, updateUserRole } = useUserProfileStore();

    useEffect(() => {
        fetchAllUsers();
    }, []);

    const handleAction = async (userId, action) => {
        try {
            await updateUserRole({userId, action});
          } catch (error) {
            console.error("Error adding category:", error);
          }
    };

    if (loading) return <Loader />;

    return (
        <div className="manage-users-container">
            <h2>Manage Users</h2>
            <table className="users-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td className={`role-${user.role}`}>{user.role}</td>
                            <td>
                                {user.role === "blocked" && (
                                    <button onClick={() => handleAction(user.id, "unblock")} className="unblock-btn">Unblock</button>
                                )}
                                {user.role === "admin" && (
                                    <>
                                        <button onClick={() => handleAction(user.id, "block")} className="block-btn">Block</button>
                                        <button onClick={() => handleAction(user.id, "remove-admin")} className="remove-admin-btn">Remove Admin</button>
                                    </>
                                )}
                                {user.role === "buyer" && (
                                    <>
                                        <button onClick={() => handleAction(user.id, "block")} className="block-btn">Block</button>
                                        <button onClick={() => handleAction(user.id, "make-admin")} className="give-admin-btn">Make Admin</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;
