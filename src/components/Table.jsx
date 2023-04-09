import React from "react";

const Table = (props) => {
    return (
        <table className="table table-bordered table-container">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">{props.userData.data.id}</th>
                    <td>{props.userData.data.username}</td>
                    <td>{props.userData.data.email}</td>
                    <td>{props.userData.data.password}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default Table;
