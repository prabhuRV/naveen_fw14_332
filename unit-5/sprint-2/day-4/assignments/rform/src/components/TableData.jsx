
import React from "react";

const DataTable = ({formData})=> {
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Marital state</th>
            </tr>
            {/* {formData.Object.keys.map((val,key) => {
                <tr key = {key}>
                    <td>{val.name}</td>
                    <td>{val.age}</td>
                    <td>{val.Address}</td>
                    </tr>
            })} */}
        </table>
    )
}

export {DataTable}