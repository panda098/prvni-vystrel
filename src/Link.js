export default function Link({ text, url }) {
  return (
    <a
      style={{ color: "white" }}
      href={url}
      target="_blank"
      without
      rel="noreferrer"
    >
      {text}
    </a>
  );
}
