Project explanation
I created the budget manager as a good practice for creating React app but also for myself, friends, or family who may be able to use it in the future to help manage budgets. It is a common application that I'll eventually go back to so I can refine it and eventually deploy.

Layout
The layout of the application is pretty basic. I have the added components in a components folder to keep them organized and utilitzed react router to be able to go to different "pages" for a better user interface experience. A lot of the concepts were new to me at the time and I do plan to go back and refine it as I learn more and grow.

I also created a routes folder to be able to keep those seperate and organized with their own .css files for the styling.
s
Functionality
As of right now, the application is able to add an expense to the already hard coded "data" created in the Expenses.js. The user has the ability to delete, add, set a budget and calculate how much they've spent so far as well as see if they are negative or position for the month. Having it layed out, they can see where the expenses are going and eventually I would like to add important or fixed expenses vs optional/varying expenses so the user can distinguish between what is required and what is optional for their budget.

To set the budget I set up an input that will take in their number and calculate how much remaining they have and what they've spent so far. Unfortunately, any changes with adding an additional expense or deleting a expense will have to be recalculated manually by the user with the calculate button. I will change this in the future to be automatically rerendered which is more realistic to professional level applications. Since I am still learning, this would a good start for now.

Bootstrap Styling and traditional CSS
I used a combination of bootstrap styling and traditional CSS styling to achieve the look and format of the application. As this was my first time becoming familiar with bootstrap there is a lot more I could have improved or achieved using it. Since I am more educated on traditional CSS that was what I used mainly to design and format the application.