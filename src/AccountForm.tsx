import FormWrapper from "./FormWrapper";

export default function AccountForm() {
     return (
          <>
               <FormWrapper title="Account Creation">
                    <label>Email</label>
                    <input required autoFocus type="email" />
                    <label>Password</label>
                    <input required type="password" />
               </FormWrapper>
          </>
     );
}
