import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.info}</td>
      <td>{contact.cost}</td>
      <td>{contact.startloc}</td>
      <td>{contact.destination}</td>
      <td>{contact.SfullName}</td>
      <td>{contact.Saddress}</td>
      <td>{contact.SphoneNumber}</td>
      <td>{contact.RfullName}</td>
      <td>{contact.Raddress}</td>
      <td>{contact.RphoneNumber}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
