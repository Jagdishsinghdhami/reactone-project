import { useRef, useCallback } from "react";

// import Card from "./components/card";
import UseRefCard from "./UseRefCard";

const UseRefform = () => {
  const fullName1 = useRef();
  const email1 = useRef();
  const phone1 = useRef();
  const password1 = useRef();
  const passwordConfirm1 = useRef();

  const formHandler = useCallback(
    () => (event) => {
      event.preventDefault();

      const data = {
        fullName: fullName1.current?.value,
        email: email1.current?.value,
        phone: phone1.current.value,
        password: password1.current?.value,
        passwordConfirmation: passwordConfirm1.current?.value,
      };

      console.log(data);

    },
    []
  );

  return (
    <div>
      <UseRefCard>
        <h1>Register</h1>
        <form onSubmit={formHandler()}>
          <div>
            <label htmlFor="full_name">Full name</label>
            <input
              ref={fullName1}
              id="full_name"
              placeholder="Full name"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              ref={email1}
              id="email"
              placeholder="Email"
              type="email"
            />
          </div>
          <div>
            <label htmlFor="number">Phone No.</label>
            <input
              ref={phone1}
              id="phone"
              placeholder="phone no"
              type="number"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              ref={password1}
              id="password"
              placeholder="Password"
              type="password"
            />
          </div>
          <div>
            <label>Password Confirmation</label>
            <input
              ref={passwordConfirm1}
              id="password_confirmation"
              placeholder="Password Confirmation"
              type="password"
            />
          </div>
          <button>Submit</button>
        </form>
       
      </UseRefCard>
    </div>
    
  );
};

export default UseRefform;
