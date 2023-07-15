import Button from "./UI/Button";
import InputText from "./UI/InputText";
import Select from "./UI/Select";
import Textarea from "./UI/Textarea";

export default function Form({
  fields = [],
  action = "",
  method = "POST",
  buttonPlaceholder = "Save",
  handler = (e, fields) => {}
}) {
  if (!fields.length) {
    return "";
  }

  return (
    <form action={action} method={method} onSubmit={(e) => handler(e, fields)}>
      {fields.map((field) => {
        switch (field.type.toLowerCase()) {
          case "input":
            return (
              <InputText
                name={field.name}
                defaultValue={field.defaultValue}
                placeholder={field.placeholder}
              />
            );

          case "text":
            return (
              <Textarea
                name={field.name}
                placeholder={field.placeholder}
                key={field.id}
              />
            );

          case "options":
            return (
              <Select
                name={field.name}
                options={field.options}
                placeholder={field.placeholder}
                key={field.id}
              />
            );

          default:
            return "";
        }
      })}
      <Button placeholder={buttonPlaceholder} />
    </form>
  );
}
