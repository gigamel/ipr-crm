export default function Textarea({
  name,
  placeholder = "",
  defaultValue = ""
}) {
  return (
    <div className="form-field mb-15">
      <textarea name={name} placeholder={placeholder} autoComplete="off">
        {defaultValue}
      </textarea>
    </div>
  );
}
