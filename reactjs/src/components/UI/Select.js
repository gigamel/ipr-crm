export default function InputText({ name, options = [], placeholder = "" }) {
  if (!options.length) {
    return "";
  }

  return (
    <div className="form-field mb-15">
      <select name={name}>
        <option disabled>{placeholder}</option>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
