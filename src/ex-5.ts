// UPPGIFT: Skapa en egen sammansatt typ som beskriver stockMeasurements. Byt ut any mot passande typer / 2 poäng
// Kompilera TS-koden och se att den fortfarande fungerar som den ska.

type Stock = {
  filter(arg0: (data: Stock) => boolean): void;
  day: string,
  price: number,

}

const getRisingStockDays = (stockMeasurements: Stock): void =>
  stockMeasurements.filter((data: Stock) => data.price > 100);

const stockMeasurements: any = [
  {
    day: "Monday",
    price: 105,
  },
  {
    day: "Tuesday",
    price: 98,
  },
  {
    day: "Wednesday",
    price: 110,
  },
];

const profitableDays: any = getRisingStockDays(stockMeasurements);
console.log(profitableDays);
