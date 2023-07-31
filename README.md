
## Deployed Link 
Visit [https://photoholic-five.vercel.app/](https://photoholic-five.vercel.app/)

## Technologies Used 
- Next JS
- SWR
- CSS Modules
- Redux Toolkit

## Enpoints Used 
- For fetching Random Photos [https://unsplash.com/documentation#get-a-random-photo](https://unsplash.com/documentation#get-a-random-photo)
- For fetching User Info [https://unsplash.com/documentation#users](https://unsplash.com/documentation#users)

## Features

- Light/dark mode toggle
- Infinte Scroll for Posts
- Caching API Response
- Loading and Error States
- Switching views from Grid to List for Profile Post
- Responsive Layout
- Dynamic Routing

## API Rate Limit
50 Requests Per Hour

## Infine Scroll Approach
In order to not reach the rate limit quickly, following things are implemented :
- Feed is loading 5 posts in one go , so making required loads to be able to fetch 10 posts equal to 2
- Grid Posts are loading 16 posts in one go as those posts will be large in no
- List Posts are loading 6 posts in one go

## Caching
- useSWR hook has been used to fetch and cache API response data
- automatic revalidations has been turned off to save API calls

## Screenshot Walkthrough

- User's feed with infinite scroll
  
  ![Feed](https://github.com/pgtir/Photoholic/assets/87230033/be3e245d-5683-406b-90f2-f8ce0344fcdd)
  

- Profile Section after clicking on any of the feed's user profile
  
  ![ProfileSection](https://github.com/pgtir/Photoholic/assets/87230033/39c37258-5ff2-431c-9756-fea4a3b332ad)
  

- Light Mode
  
  ![LightMode](https://github.com/pgtir/Photoholic/assets/87230033/39b08aef-28e9-4961-a67a-fd67e279568d)
  

- List View of Photos
  
  ![ListView](https://github.com/pgtir/Photoholic/assets/87230033/c4804bde-9a6f-4ce1-871a-dcc4317c3552)
  
  
- Responsive View

  ![Responsive](https://github.com/pgtir/Photoholic/assets/87230033/3240bf18-7452-458c-8d3a-46a3197228bc)
