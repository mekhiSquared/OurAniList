# ANIlist

Created by Mekhi Miller and Mekhi Tudor.

## 🚀 Mission statement

Our application, ANIlist is for Anime Fans. It allows users to search for anime recommendations easily, and organize their watchlist accordingly. 

## API & React Router

This application will use the [Jikan API](https://jikan.moe/). Below are the documentation and specific endpoints we intend to use and the front-end pages that will use them.

- Link to API documentation: [Jikan API](https://jikan.moe/)
- API endpoint #1: Requesting: https://api.jikan.moe/v4/anime?q={USER_INPUT}&sfw
  - Description of endpoint: to search through the entire database for anime and will return an array of objects.
  - For each anime, we will use the `images`, `title` and `ID` data
- API endpoint #2: https://api.jikan.moe/v4/top/anime
  - Description of endpoint: top anime trending currently
  - For each anime, we will use the `images`, `title` and `ID` data
- API endpoint #3: https://api.jikan.moe/v4/anime/{ANIME_ID}/full
  - Description of endpoint: for separate pages of Anime
  - For each anime we will use the following data:
    - `mal_id`, `url`, `images`
    - `trailer`, `approved`, `title_english`
    - `title_japanese`, `type`, `episodes`
    - `status`, `airing`, `aired`
    - `duration`, `rating`, `score`
    - `scored_by`, `rank`, `popularity`
    - `synopsis`, `background`, `season`
    - `year`, `producers`, `licensors`
    - `studios`, `genres`, `themes`
    - `demographics`, `theme`

## 👩‍💻 MVP User Stories & Frontend Routes

The application will feature the following frontend routes and core features:

* On the `/` path, users will be greeted with a home page
* On the `/trending` path, users can view currently trending anime in the world
* On the `/anime` path, users can view the details of the anime
* On the `/anime-search` path, users can search through an entire database of previously aired and currently airing anime.

## 🤔 Stretch User Stories

If time permits, the following stretch features will be implemented in order of priority:

* Users will be able to save anime to a watchlist
* Users will be able to sort their watch list based on genre, length etc..
* Users will be able to rate their favorite anime and build a profile around what they like.

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
