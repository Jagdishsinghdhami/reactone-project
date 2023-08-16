import React, { useRef, useState } from "react";

const UseRef = () => {
  // its like a useState only and its preserve the value no re-renders

  const firstName = useRef(null);
  const lastName = useRef(null);
  const phoneno = useRef(null);
  const Email = useRef(null);

  const [show, setShow] = useState(false);
  const [lnames, setLnames] = useState(false);
  const [pnum, setPnum] = useState(false);
  const [emails, setEmails] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();

    const name = firstName.current.value;
    name === "" ? alert("plz fill first name") : setShow(true);

    const lname = lastName.current.value;
    lname === "" ? alert("plz fill last name") : setLnames(true);

    const mobile = phoneno.current.value;
    mobile === "" ? alert("plz fill phone number") : setPnum(true);

    const emailab = Email.current.value;
    emailab === "" ? alert("plz fill email") : setEmails(true);

    const data = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      phoneno: phoneno.current.value,
      email: Email.current.value,
    };

    console.log(data);
  };

  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="fName">First Name </label>
          <input type="text" id="fName" ref={firstName} />
        </div>
        <div>
          <label htmlFor="LName">Last Name </label>
          <input type="text" id="LName" ref={lastName} />
        </div>
        <div>
          <label htmlFor="phone">Phone No.</label>
          <input type="number" id="phone" ref={phoneno} />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input type="email" id="email" ref={Email} />
        </div>
        <br />
        <button>submit</button>
      </form>
      <h1>{show ? `your First name is :  ${firstName.current.value}` : ""}</h1>
      <h1>{lnames ? `your Last name is :  ${lastName.current.value}` : ""}</h1>
      <h1>{pnum ? `your Phone number is :  ${phoneno.current.value}` : ""}</h1>
      <h1>{emails ? `your Email is : ${Email.current.value}` : ""}</h1>
    </div>
  );
};
export default UseRef;
