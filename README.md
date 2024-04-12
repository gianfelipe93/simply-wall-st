# Welcome

This is the take-home test for Simply Wall St. 

I have created a simple page that lists stocks by country and allows ascending and descending sort by market cap.

## Considerations

- Style: I created most of the style using "styled components" because I am familiar with it and it's pretty straightforward. Additionally, I used material UI to create the dropdowns because it's also an easy integration and works well.
- Pagination: I implemented infinite scroll pagination because it gives a smooth experience to the client as they go through the stocks.
- Components:
  - Landing Page: A initial component that sets basic style for the app and sets the basic structure of the application.
  - Header: It is the header.
  - Body: The main component in the app. It is responsible for managing the filters and pages (from the pagination) and it also fires the search.
  - Filters: This component has 3 dropdows:
    - Country Filter: Allows user to select what country we show stocks from
    - Order by dropdown: Change the order of the list
    - Select language dropdown: Allows user to change the app language. I used i18n to setup basic translation, when you change the country in that dropdown it will change the placeholder for the dropdowns above. Example: Filter by country -> Filtrar por país. It is a small change but shows that I set it up and understood the concept.
    - Tile: The tile component will show stock information like name, unique code and snowflake chart
    - Chart: Renders the snowflake chart. I created an average score value and used it to show stocks that go from light/shiny green if score is 6 all the way down to blood red if the score is 0. (this one was nice to implement)
- State management: I setup Redux as state management tool. It is one of the most famous state management frameworks and it makes the data flow easily throughout the application.
- Types:
  - Country
  - Grid
  - Meta
  - OrderBy
  - Score
  - SearchResults
  - Stock


## If this was a feature on a real product

- I would have used environment variables. For example, the SWS URL API and Header.
- I would have handled API errors. Currently it will simply show an empty list whereas in a read product I would show a user friendly message/image.
- I would have invested more time on making it look better on smaller screens:
  - The tile has inconsistent height on smaller screen because the sentence might be too large, which breaks the line, making those tiles a bit longer than tiles with short sentences.
  - The filters could look better on smaller screens as well.
- I would have invested more time into testing. I have written front-end tests with Jest in the past but I have not had a lot of exposure to it. If this was going to be published on the live website, I would make sure I write tests.

## See instructions below to run the app:

Or you can access it here: 

In the project directory, you can run:

### `npm install`
and then
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.