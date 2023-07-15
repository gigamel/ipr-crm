export default function Logo({
  href = "/",
  title = "AShCRM",
  handler = (e) => {}
}) {
  return (
    <a href={href} className="logo" onClick={(e) => handler(e, "/")}>
      {title}
    </a>
  );
}
