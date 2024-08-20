# OurAniApp

Created by Mekhi Miller and Mekhi Tudor.

## 🚀 Mission statement

Our application, OurAniApp is for Anime Fans. It allows users to search for anime recommendations easily, and organize their watchlist accordingly. 

## API & React Router

This application will use the Jikan API. Below are the documentation and specific endpoints we intend to use and the front-end pages that will use them.

- Link to API documentation:[ [Link goes here]](https://jikan.moe/)
- API endpoint #1: Requesting: https://api.jikan.moe/v4/anime?q={USER_INPUT}&sfw
  - Description of endpoint: to search through the entire database for anime and will return an array of objects.
  - For each anime, we will use the images, title and ID's
- API endpoint #2: https://api.jikan.moe/v4/top/anime
  - Description of endpoint: top anime trending currently
  -   - For each anime, we will use the images, title and ID's
- API endpoint #3: https://api.jikan.moe/v4/anime/{ANIME_ID}/full
  - Description of endpoint: for separate pages of Anime
  - For each anime we will display these endpoints: * "mal_id"
* 		"url"
* 		"images"
* 		"trailer”
* 		"approved"
* 		"title_english"
* 		"title_japanese"
* 		"type"
* 		"episodes"
* 		"status"
* 		"airing"
* 		"aired"
* 		"duration"
* 		"rating"
* 		"score"
* 		"scored_by"
* 		"rank"
* 		"popularity"
* 		"synopsis"
* 		"background"
* 		"season"
* 		"year"
* 		"producers"
* 		"licensors"
* 		"studios"
* 		"genres"
* 		"themes"
* 		"demographics"
* 		"theme"

  - Formatted to be more eye-friendly

[If your API requires an API key, say so here.]

**Example:**
- https://api.artic.edu/api/v1/artworks
  - This will fetch an array of artwork objects
  - For each artwork, I want the `id`, `title`, and `image_id`
- https://api.artic.edu/api/v1/artworks/{id}
  - This will fetch a single artwork object
  - I will use the `id`, `title`, `short_description`, `medium_display`, `place_of_origin` and `image_id`
- https://api.artic.edu/api/v1/artworks/search?q={query}
  - This will fetch a list of artworks that relate to the search query
  - For each artwork, I will use the `id` and `title`

## 👩‍💻 MVP User Stories & Frontend Routes

The application will feature the following frontend routes and core features:

* On the `/trending` page, users can view currently trending anime in the world
* On the `/anime` pages, users can view the details of the anime
* On the `/anime-search` page, users can search through an entire database of previously aired and currently airing anime.

**Example:**
- On the `/artworks` page, users can view a grid of all artwork
- On the `/artworks` page, users can click on a piece of art in the grid, taking them to the details page for that piece of art.
- On the `/artworks/:artworkId` page, users can view additional details for a single piece of art
- On the `/` page, users can search for artwork titles related to a search term.

## 🤔 Stretch User Stories

If time permits, the following stretch features will be implemented in order of priority:

* Users will be able to save anime to a watchlist
* Users will be able to sort their watch list based on genre, length etc..
* Users will be able to rate their favorite anime and build a profile around what they like.

**Example:**
* Users will be able to save and view favorited artworks using local storage
* Users will be able to change the color scheme of the website from light mode to dark mode

## 📆 Timeline for reaching MVP in 1 week

To ensure that we can complete all core features of the application in 1 week, we will aim to complete tasks according to the following timeline:

**Day 1**
- [ ] Project set-up and lay-out
- [ ] Ticket description and due date
- [ ] Ticket description and due date

**Day 2**
- [ ] Ticket description and due date
- [ ] Ticket description and due date
- [ ] Ticket description and due date

**Day 3** (MVP due by the end of the day)
- [ ] Ticket description and due date
- [ ] Ticket description and due date
- [ ] Ticket description and due date

**Day 4**
- [ ] Ticket description and due date
- [ ] Ticket description and due date
- [ ] Ticket description and due date

**Day 5**
- [ ] Ticket description and due date
- [ ] Ticket description and due date
- [ ] Ticket description and due date

## Wireframes of each page in your application

Below, you can find wireframes for our project. Each wireframe shows a different page of our application as well as the key components of the application. Details such as specific text values or images are intentionally not included:

[Wireframe for page 1]

[Wireframe for page 2]
