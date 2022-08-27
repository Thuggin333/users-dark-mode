export default async function request(url) {
  return await fetch(url).then((resp) => resp.json());
}
