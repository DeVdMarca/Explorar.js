async function ExplorarPokemon() {
  const explora = fetch ("https://pokeapi.co");

  if (!explora.ok) {
  console.log("Algo salió mal. Código:", explora.status);
  return;
   
  }
  const datos = await explora.json();
  console.log("Nombre del Pokémon:", datos.name);
}
ExplorarPokemon ();