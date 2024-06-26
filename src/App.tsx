import AccountForm from "./AccountForm";
import AddressForm from "./AddressForm";
import UserForm from "./UserForm";
import "./App.css";
import { useMultistepForm } from "./useMultistepForm";
import { FormEvent, useState } from "react";
type FormData = {
     firstName: string;
     lastName: string;
     age: string;
     street: string;
     city: string;
     state: string;
     zip: string;
     email: string;
     passWord: string;
};

const INITIAL_DATA: FormData = {
     firstName: "",
     lastName: "",
     age: "",
     street: "",
     city: "",
     state: "",
     zip: "",
     email: "",
     passWord: "",
};
function App() {
     const [data, setData] = useState(INITIAL_DATA);
     function updateFields(fields: Partial<FormData>) {
          setData((prev) => {
               return { ...prev, ...fields };
          });
     }
     const {
          currentStepIndex,
          steps,
          step,
          isFirstStep,
          back,
          next,
          isLastStep,
     } = useMultistepForm([
          <UserForm {...data} updateFields={updateFields} />,
          <AddressForm {...data} updateFields={updateFields} />,
          <AccountForm {...data} updateFields={updateFields} />,
     ]);
     function onSubmit(e: FormEvent) {
          e.preventDefault();
          if (!isLastStep) return next();
          alert("Successful Account Creation");
     }
     return (
          <>
               <div
                    style={{
                         position: "relative",
                         background: "white",
                         border: "1px solid black",
                         padding: "2rem",
                         margin: "1rem",
                         borderRadius: ".5rem",
                         fontFamily: "Arial",
                         maxWidth:'max-content'
                    }}
               >
                    <form action="" onSubmit={onSubmit}>
                         <div
                              style={{
                                   position: "absolute",
                                   top: ".5rem",
                                   right: ".5rem",
                              }}
                         >
                              {currentStepIndex + 1}/{steps.length}
                         </div>
                         {step}
                         <div
                              style={{
                                   marginTop: "1rem",
                                   display: "flex",
                                   gap: ".5rem",
                                   justifyContent: "flex-end",
                              }}
                         >
                              {!isFirstStep && (
                                   <button onClick={back} type="button">
                                        Back
                                   </button>
                              )}

                              <button type="submit">
                                   {isLastStep ? "Finish" : "Next"}
                              </button>
                         </div>
                    </form>
               </div>
          </>
     );
}

export default App;
