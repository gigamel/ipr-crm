export default function Nav({
  type = "vertical",
  links = [],
  handler = (e) => {}
}) {
  if (!links.length) {
    return "";
  }

  return (
    <div className={["nav", type].join(" ")}>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.href} onClick={(e) => handler(e, link.href)}>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
