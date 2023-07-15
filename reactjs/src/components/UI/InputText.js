export default function InputText({
  name,
  placeholder = "",
  defaultValue = "",
  handler = (e) => {}
}) {
  return (
    <div className="form-field mb-15">
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={defaultValue}
        autoComplete="off"
        onChange={(e) => handler(e)}
      />
    </div>
  );
}
