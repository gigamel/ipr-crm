import React from "react";
import Form from "../../Form";

export default function Users({ title = "Users" }) {
  const fields = [
    {
      id: 1,
      type: "input",
      name: "login",
      placeholder: "Login",
      defaultValue: ""
    },
    {
      id: 2,
      type: "options",
      name: "role",
      placeholder: "Role for user",
      options: [
        {
          id: 1,
          label: "Admin",
          value: 1
        },
        {
          id: 2,
          label: "Subscriber",
          value: 2
        }
      ]
    }
  ];

  const saveForm = (e, fields) => {
    e.preventDefault();
    console.log(fields.length);
  };

  return (
    <React.Fragment>
      <h1>{title}</h1>
      <Form fields={fields} handler={saveForm} />
    </React.Fragment>
  );
}
