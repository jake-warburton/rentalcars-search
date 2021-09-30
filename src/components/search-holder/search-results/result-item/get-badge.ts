export function GetBadge(bookingId: string) {
  //  Get name from the bookingId
  let idName = "";
  if (bookingId && bookingId.indexOf("-") > -1) {
    idName = bookingId.split("-")[0];
  }
  //  Return background colour for the badge
  let bgColour = "#7d8c31";
  let color = "#fff";

  //  The return name value
  let name = "";

  switch (idName) {
    case "city":
      name = "City";
      bgColour = "#1879ca";
      color = "#fff";
      break;
    case "train":
      name = "Station";
      bgColour = "#1879ca";
      color = "#fff";
      break;
    case "airport":
      name = "Airport";
      bgColour = "#ff8000";
      color = "#262626";
      break;
    case "region":
      name = "Region";
      bgColour = "#f1c74c";
      color = "#222";
      break;
    case "district":
      name = "District";
      bgColour = "#008009";
      color = "#fff";
      break;
    default:
      name = "Item"; //  I am providing the fallback of name "Item" and this background colour for any unexpected results which require a badge but not defined here
      bgColour = "#1879ca";
      color = "#fff";
  }

  return {
    name,
    bgColour,
    color,
  };
}
