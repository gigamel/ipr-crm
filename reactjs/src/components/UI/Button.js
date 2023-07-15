export default function Button({ placeholder = "Send" }) {
  return (
    <button type="submit" className="form-button">
      {placeholder}
    </button>
  );
}
