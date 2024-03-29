export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "edb60f9b5fmshbe31f2b5f402ce1p158426jsn48f28deea281",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`,
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
