import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import "./homepage.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

import Button from "@mui/material/Button";
import axios from "axios";



const Homepage = ({ User,setLoginUser }) => {
  const [contacts, setContacts] = useState(data);
  

  const [addFormData, setAddFormData] = useState({
    user: "",
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
    user: "",
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


  const rechange = () => {
    axios
      .post(
        "mongodb+srv://ankit:Onetheway123@cluster0.t5vm4.mongodb.net/myaLoginRegisterDB?retryWrites=true&w=majority",
        User
      )
      .then((res) => {
        console.log("Call for dataBase UseEffect");
        console.log(res.data);
        let newArr = [...res.data];
        setContacts(newArr);
      });
    console.log("Rechange Called")
  }


  useEffect(() => {
    console.log("Use Effect Triggered");
    rechange();
    console.log(contacts);


    // const newFormData = { ...editFormData };
    // axios.post("http://localhost:3001/add", newFormData).then((res) => {
    //   console.log("Call for add - Edit ");
    //   console.log(res.data);
    // });

  }, []);



  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChangeSubmit = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    const toDelete={...newFormData}
    newFormData[fieldName] = fieldValue;

    // axios.post("http://localhost:3001/del", toDelete).then((res) => {
    //   console.log("Call for Delete - Edit ");
    //   console.log(res.data);
    // });

    // axios.post("http://localhost:3001/add", newFormData).then((res) => {
    //   console.log("Call for add - Edit ");
    //   console.log(res.data);
    // });

    setEditFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    const toDelete = { ...newFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };
  

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      user: User.email,
      info: addFormData.info,
      cost: (addFormData.cost),
      startloc: addFormData.startloc,
      destination: addFormData.destination,
      SfullName: addFormData.SfullName,
      SphoneNumber: (addFormData.SphoneNumber),
      Saddress: addFormData.Saddress,

      RfullName: addFormData.RfullName,
      RphoneNumber: (addFormData.RphoneNumber),
      Raddress: addFormData.Raddress,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    
    axios.post("https://log2.herokuapp.com/add", newContact).then((res) => {
      console.log("Call for dataBase Added");
      console.log(res.data.message);
    });

  };


  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      user: User.email,
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

    axios.post("https://log2.herokuapp.com/del", contacts[index]).then((res) => {
      console.log("Call for Delete - Edit ");
      console.log(res.data);
    });

    axios.post("https://log2.herokuapp.com/add", editedContact).then((res) => {
      console.log("Call for add - Edit ");
      console.log(res.data);
    });
    rechange();
    setContacts(newContacts);
    setEditContactId(null);
  };;

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

    const toDelete=newContacts[index]

    // newContacts.splice(index, 1);
    console.log(toDelete)
    axios.post("https://log2.herokuapp.com/del", toDelete).then((res) => {
      console.log("Call for Delete ");
      console.log(res.data);
      rechange();
    });
    rechange();


    // setContacts(newContacts);
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
                          handleEditFormChangeSubmit={handleEditFormChangeSubmit}
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

              <button type="submit">Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
