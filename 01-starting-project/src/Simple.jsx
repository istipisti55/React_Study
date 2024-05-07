export default function Simple({
  source = "https://agraragazat.hu/wp-content/uploads/2022/02/kacsa_nyito_20220204.jpg",
  ...props
}) {
  return <img {...props} src={source} />;
}
