# DEPLOYED APP LINK
https://gsiv23-menjith-p.vercel.app/

## how to run app
1.Download the repository
2.open folder in visual studio code or ur desired editor.
3.create .env file in same directory.Add your movie api key like this. REACT_APP_MOVIE_API_KEY=(your Access token).I given procdure for creating api key below .
4.open terminal & run following command --> npm install
5.npm start (for development)

### To get an API Key:
1. Create a personal account at: https://www.themoviedb.org/account/signup
2. Once you have created an account, go to:
https://www.themoviedb.org/settings/api to create an API key
a. Usage: Personal
b. Application Name: Interview
c. Application URL: None
d. Application Summary: For a developer interview project

### List elements from the challenge that you think you have done well, and that exemplify your proficiency.why you chose those elements, and how they demonstrate your proficiency?
 1. I done both filtering and load more simultaneously meaning user write input & they click load more button new results fetched also filtered and shown to user.The upcoming movie api gives 576 movie results .so filtering new results also and showing only desired movies is good option.
 2. In movie detail page , if user accidently click browser refresh button then our app is able to load same data again instead of routing user again to home page and do filtering again and the reach detail page. (i thought it good user experience).
 3. I implemented loading bar in app similar to how our app layout look alike in both home route and movie detail route.when app load initially user will get idea of how our app structure look alike before data loading.
### List what you would do to improve your solution if you had 4 more hours available for this task. Describe why you would do those things
  1.i will write test case for the app.
  2.i am interested to implemented infinite scrolling instead of clicking load more button in app which is very smoothy experience.
  3.Now user need to click load more button and do filtering to get their desired movie which is bad experience.I mean upcomin movie api giving only 20 movie detail at a time .so if we allow user to filtering from backend it would be very good user experience , since now they need to click load more everytime.

### Any feedback about how we may improve this challenge.
upcoming movie api giving backdrop path & poster path for images in frontend but when i try to load images getting 401 error .I am not able to find correct api for loading backdrop images and poster images . so that need to be briefed.

  

 
 
