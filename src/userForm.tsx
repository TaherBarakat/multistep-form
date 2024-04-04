import FormWrapper from "./FormWrapper";
type UserData = {
     firstName: string;
     lastName: string;
     age: string;
};
type UserFormProps = UserData & {
     updateFields: (fields: Partial<UserData>) => void;
};
export default function UserForm({
     firstName,
     lastName,
     age,
     updateFields,
}: UserFormProps) {
     return (
          <>
               <FormWrapper title="User Details">
                    <label>First Name</label>
                    <input
                         value={firstName}
                         autoFocus
                         required
                         type="text"
                         onChange={(e) =>
                              updateFields({ firstName: e.target.value })
                         }
                    />
                    <label>Last Name</label>
                    <input
                         value={lastName}
                         required
                         type="text"
                         onChange={(e) =>
                              updateFields({ lastName: e.target.value })
                         }
                    />
                    <label>Age</label>
                    <input
                         value={age}
                         required
                         min={1}
                         type="number"
                         onChange={(e) => updateFields({ age: e.target.value })}
                    />
               </FormWrapper>
          </>
     );
}
