import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./homepage.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

import Button from "@mui/material/Button";

const Homepage = ({setLoginUser}) => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    info: "",
    cost: "",
    startloc: "",
    destination: "",
    SfullName: "",
    Saddress: "",
    SphoneNumber: "",
    RfullName: "",
    Raddress: "",
    RphoneNumber: "",
  });

  const [editFormData, setEditFormData] = useState({
    info: "",
    cost: "",
    startloc: "",
    destination: "",
    SfullName: "",
    Saddress: "",
    SphoneNumber: "",
    RfullName: "",
    Raddress: "",
    RvphoneNumber: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      info: addFormData.info,
      cost: addFormData.cost,
      startloc: addFormData.startloc,
      destination: addFormData.destination,
      SfullName: addFormData.SfullName,
      SphoneNumber: addFormData.SphoneNumber,
      Saddress: addFormData.Saddress,

      RfullName: addFormData.RfullName,
      RphoneNumber: addFormData.RphoneNumber,
      Raddress: addFormData.Raddress,
      
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      info: editFormData.info,
      cost: editFormData.cost,
      startloc: editFormData.startloc,
      destination: editFormData.destination,
      SfullName: editFormData.SfullName,
      SphoneNumber: editFormData.SphoneNumber,
      Saddress: editFormData.Saddress,

      RfullName: editFormData.RfullName,
      RphoneNumber: editFormData.RphoneNumber,
      Raddress: editFormData.Raddress,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      info: contact.info,
      cost: contact.cost,
      startloc: contact.startloc,
      destination: contact.destination,
      SfullName: contact.SfullName,
      SphoneNumber: contact.SphoneNumber,
      Saddress: contact.Saddress,

      RfullName: contact.RfullName,
      RphoneNumber: contact.RphoneNumber,
      Raddress: contact.Raddress,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="boss">
      <div className="main_home">
        <div className="nav">
          <div className="btnn" onClick={() => setLoginUser({})}>
            <Button variant="outlined" color="error">
              Log Out
            </Button>
          </div>
        </div>
        <div className="homepage-container">
          <div className="form1">
            <form className="f1" onSubmit={handleEditFormSubmit}>
              <table>
                <thead>
                  <tr>
                    <th>Info</th>
                    <th>Cost</th>
                    <th>Start Location</th>
                    <th>Destination</th>
                    <th>Sender Name</th>
                    <th>Sender Address</th>
                    <th>Sender Phone</th>

                    <th>Reciver Name</th>
                    <th>Reciver Address</th>
                    <th>Reciver Phone</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact) => (
                    <Fragment>
                      {editContactId === contact.id ? (
                        <EditableRow
                          editFormData={editFormData}
                          handleEditFormChange={handleEditFormChange}
                          handleCancelClick={handleCancelClick}
                        />
                      ) : (
                        <ReadOnlyRow
                          contact={contact}
                          handleEditClick={handleEditClick}
                          handleDeleteClick={handleDeleteClick}
                        />
                      )}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </form>
          </div>
          <div className="form2">
            <h2>Add a Parcel</h2>
            <form className="f2" onSubmit={handleAddFormSubmit}>
              <input
                type="text"
                name="info"
                required="required"
                placeholder="Enter Info..."
                onChange={handleAddFormChange}
              />
              <input
                type="text"
                name="cost"
                required="required"
                placeholder="Enter cost ..."
                onChange={handleAddFormChange}
              />
              <input
                type="text"
                name="startloc"
                required="required"
                placeholder="Enter Start Loc..."
                onChange={handleAddFormChange}
              />
              <input
                type="text"
                name="destination"
                required="required"
                placeholder="Enter Desti ..."
                onChange={handleAddFormChange}
              />
              <input
                type="text"
                name="SfullName"
                required="required"
                placeholder="S. Name..."
                onChange={handleAddFormChange}
              />
              <input
                type="text"
                name="Saddress"
                required="required"
                placeholder="S. Add..."
                onChange={handleAddFormChange}
              />
              <input
                type="text"
                name="SphoneNumber"
                required="required"
                placeholder="S. Phone..."
                onChange={handleAddFormChange}
              />

              <input
                type="text"
                name="RfullName"
                required="required"
                placeholder="R. Name..."
                onChange={handleAddFormChange}
              />
              <input
                type="text"
                name="Raddress"
                required="required"
                placeholder="R. Add..."
                onChange={handleAddFormChange}
              />
              <input
                type="text"
                name="RphoneNumber"
                required="required"
                placeholder="R. Phone..."
                onChange={handleAddFormChange}
              />

              <button type="submit">
                 Add 
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
