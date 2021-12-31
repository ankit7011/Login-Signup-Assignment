import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  handleEditFormChangeSubmit,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="info"
          required="required"
          placeholder="Enter Info..."
          value={editFormData.info}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="cost"
          required="required"
          placeholder="Enter cost ..."
          value={editFormData.cost}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="startloc"
          required="required"
          placeholder="Enter Start Loc..."
          value={editFormData.startloc}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="destination"
          required="required"
          placeholder="Enter Desti ..."
          value={editFormData.destination}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="SfullName"
          required="required"
          placeholder="Enter a sender name..."
          value={editFormData.SfullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="Saddress"
          required="required"
          placeholder="Enter an Sender add..."
          value={editFormData.Saddress}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="SphoneNumber"
          required="required"
          placeholder="Enter a Sender phone..."
          value={editFormData.SphoneNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="RfullName"
          required="required"
          placeholder="Enter a Reciver name..."
          value={editFormData.RfullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="Raddress"
          required="required"
          placeholder="Enter an Reciver add..."
          value={editFormData.Raddress}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="RphoneNumber"
          required="required"
          placeholder="Enter a Reciver phone..."
          value={editFormData.RphoneNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit" onChange={handleEditFormChange}>
          Save
        </button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
