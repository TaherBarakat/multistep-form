import FormWrapper from "./FormWrapper";

type UserData = {
     email: string;
     password: string;
};
type AccountFormProps = UserData & {
     updateFields: (fields: Partial<UserData>) => void;
};

export default function AccountForm({
     email,
     password,
     updateFields,
}: AccountFormProps) {
     return (
          <>
               <FormWrapper title="Account Creation">
                    <label>Email</label>
                    <input
                         required
                         autoFocus
                         type="email"
                         value={email}
                         onChange={(e) =>
                              updateFields({ email: e.target.value })
                         }
                    />
                    <label>Password</label>
                    <input
                         required
                         type="password"
                         value={password}
                         onChange={(e) =>
                              updateFields({ password: e.target.value })
                         }
                    />
               </FormWrapper>
          </>
     );
}
