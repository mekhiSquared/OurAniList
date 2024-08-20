# ANIList

Created by Mekhi Miller and Mekhi Tudor.

## 🚀 Mission statement

Our application, ANIList is for Anime Fans. It allows users to search for anime recommendations easily, and organize their watchlist accordingly. 

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
* On the `/anime/:id` path, users can view the details of the anime
* On the `/results` path, users can search through an entire database of previously aired and currently airing anime.

## 🤔 Stretch User Stories

If time permits, the following stretch features will be implemented in order of priority:

* Users will be able to save anime to a watchlist
* Users will be able to sort their watch list based on genre, length etc..
* Users will be able to rate their favorite anime and build a profile around what they like.

## 📆 Timeline for reaching MVP in 1 week

To ensure that we can complete all core features of the application in 1 week, we will aim to complete tasks according to the following timeline:

**8/20**
- [x] Project Prosal 
- [x] Wire-frame done 
- [ ] Component design done 

**8/21**
- [ ] Scrum Board
- [ ] Project structure document/skeleton code
- [ ] Start Building

**8/22** BUILD DAY
- [ ] working on completing the application
      


**8/23**
- [ ] Minimum Viable Project  complete
- [ ] Ticket description and due date
- [ ] Ticket description and due date

**8/24 - 8/26**
- [ ] Styling
- [ ] Stretch Features
- [ ] Clean Up [finishing code we didn't have a chance to complete]

**8/27**
- [ ] Presentation Slides
- [ ] Presentation Script
- [ ] Presentation Video
- [ ] Reflections
- [ ] Stretch Deployed Project


      
## Wireframes of each page in your application

Below, you can find wireframes for our project. Each wireframe shows a different page of our application as well as the key components of the application. Details such as specific text values or images are intentionally not included:

<img width="875" alt="Screen Shot 2024-08-20 at 2 56 33 PM" src="https://github.com/user-attachments/assets/78bf0f76-d09e-4b5f-a2b7-176049801765">
