export function GetBadge(bookingId: string) {
  //  Get name from the bookingId
  let idName = "";
  if (bookingId && bookingId.indexOf("-") > -1) {
    idName = bookingId.split("-")[0];
  }
  //  Return background colour for the badge
  let bgColour = "#7d8c31";

  //  The return name value
  let name = "";

  switch (idName) {
    case "city":
      name = "City";
      bgColour = "#6dae1d";
      break;
    case "train":
      name = "Station";
      bgColour = "#1d78ae";
      break;
    case "airport":
      name = "Airport";
      bgColour = "#ae1d46";
      break;
    case "region":
      name = "Region";
      bgColour = "#26266f";
      break;
    case "district":
      name = "District";
      bgColour = "#26266f";
      break;
    default:
      name = "Item"; //  I am providing the fallback of name "Item" and this background colour for any unexpected results which require a badge but not defined here
      bgColour = "#7d8c31";
  }

  return {
    name,
    bgColour,
  };
}
