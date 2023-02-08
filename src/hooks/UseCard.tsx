export async function fetchData() {
  const result = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php");
  const json = await result.json();
  console.log(json);
  return json;
}
