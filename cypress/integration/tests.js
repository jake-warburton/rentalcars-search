describe("Running the application", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });
});

describe("Interacting with search input box", () => {
  it("Displays Pick-up Location in search bar", () => {
    cy.get("#search-bar").should(
      "have.attr",
      "placeholder",
      "Pick-up Location"
    ); //  Find the input box and ensure it has the placeholder of "Pick-up Location"
    cy.get("#search-bar").should("have.attr", "aria-label", "Pick-up Location"); //  Find the input box and ensure it has the aria-label of "Pick-up Location"
  });

  it("Displays No results found when focusing the dropdown", () => {
    cy.get("#search-bar").click(); // Click on input
    cy.focused(); // Click on input with focus
    cy.get(".search-results").contains("No results found"); // Search results div appears. The dropdown contains "No results found"
  });

  it("Displays no results when entering just 1 alphanumerical character in the search input", () => {
    cy.get("#search-bar").clear().type("M"); //   Enter "M" into the search input
    cy.get(".search-results").contains("No results found"); // Search results div appears. The dropdown contains "No results found"
  });

  it("Displays several results when entering criteria in the search input", () => {
    cy.get("#search-bar").clear().type("MA"); // Enter "MA" into the search input
    cy.get(".search-results").contains("Manchester"); // Search results div appears. The dropdown contains "Manchester"
    cy.get(".search-results").contains("Airport"); // Search results div appears. The dropdown contains "Airport"
  });

  it("Displays up to 6 results when entering a matched search term in the search input", () => {
    cy.get("#search-bar").clear().type("MANCHESTER"); // Enter "MA" into the search input
    cy.get(".search-results-list").children().should("have.length", 6); // Search results div appears. The dropdown contains 6 list items
  });

  it("Displays No results found when entering a non recognised search term in the search input", () => {
    cy.get("#search-bar").clear().type("asdf1234"); // Enter asdf1234" into the search input
    cy.get(".search-results-list").contains("No results found"); // Search results div appears. The dropdown contains "No results found"
  });

  it("Displays No results found when truncating the search term to 1 character from 2 length", () => {
    cy.get("#search-bar").clear().type("MA"); // Enter asdf1234" into the search input
    cy.get(".search-results").contains("Manchester"); // Search results div appears. The dropdown contains "Manchester"
    cy.get(".search-results").contains("Airport"); // Search results div appears. The dropdown contains "Airport"
    cy.get("#search-bar").type("{backspace}"); //  Enter special key "Backspace" to truncate the search input back to 1 character in length
    cy.get(".search-results").contains("No results found"); // Search results div appears. The dropdown contains "No results found"
  });
});
