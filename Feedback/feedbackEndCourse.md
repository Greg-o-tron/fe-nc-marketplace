# Checklist for NC Games Front End

## README - write your own and make sure that it:

- [ ] has a link to the deployed version
- [ ] provides general info about your app
- [ ] includes links to your back end repo
- [ ] specifies the minimum version of Node required to run locally (check your Node version, `node --version` and use the major version that you are on)
- [ ] has clear instructions on how to run your project locally (`git clone <repo-url>, cd ...`)

## UX

- [x] Basic styling added
- [ ] Responsive design
- [x] Items aligned
- [x] Content legible (not too wide, obstructed, etc)
- [ ] Refreshing doesn't cause an issue on sub-pages
- [x] No errors in the console
- [ ] Votes / Posts / Deletions happen instantly _OR_ give user indication of loading

## Functionality

### Login

- [ ] Some indication of who is logged in

### Reviews

- [x] Serves all reviews / top reviews
- [ ] Can vote on reviews
- [ ] Can vote a maximum of once in either direction per page load
- [ ] Votes are persistent when page is refreshed
- [x] Reviews by category pages load only relevant reviews (especially when navigating from one category page to another)
- [ ] Can sort reviews by date created / comment_count / votes

### Individual Review / Comments

- [ ] Individual reviews are served with comments
- [ ] Can vote on comments
- [ ] Can vote a maximum of once in either direction per page load
- [ ] Votes are persistent when page is refreshed
- [ ] Can post new comments, which are persistent
- [ ] Can only delete comments of logged in user
- [ ] Deleted comments don't re-appear on re-render/refresh

### Additional functionality:

- [ ] sort comments by date created / votes
- [ ] navigate over pages of reviews (if implemented in back-end)
- [ ] navigate over pages of comments (if implemented in back-end)
- [ ] filter / display reviews by specific user
- [ ] post new review
- [ ] delete logged in user's reviews

## Error Handling

- [ ] Bad url
- [ ] Bad category slug in url
- [ ] Bad review_id in url
- [ ] Post comment: (No text in comment body / Can you post without logging in?)

## Code

- [x] Well named components
- [ ] Components reused where possible (`Reviews` / `Voter`...)
- [ ] Minimal state - don't hold derivable data in state
- [ ] Set state correctly, using previous state where possible
- [ ] Handle asynchronicity clearly (i.e. isLoading pattern)
- [ ] Functions are DRY (`handleChange` for controlled components / api calls)
- [ ] Use object destructuring where possible
- [ ] Tidy? If not: ESLint / Prettier
- [ ] `node_modules` git ignored
- [ ] No `console.log`s / comments
- [ ] remove unnecessary files (e.g. App.test.js)

## MAKE SURE ALL TESTS ARE STILL PASSING IN BACK END

## Once everything else is complete, here are some extra challenges:

- [ ] Use `aXe` extension to check for a11y issues
- [ ] Make sure any pure functions are extracted and tested with `Jest`
- [ ] Use Context API for sharing logged in user amongst components
- [ ] Create a user page where you can change their profile information if they are "logged in as the right user". This will require having an additional PATCH endpoint on your backend
- [ ] Create a view for all the reviews a user has liked. This will require additional functionality on your backend
- [ ] Make use of [web sockets](https://en.wikipedia.org/wiki/WebSocket) to allow your page to automatically update with a little notification if there have been any recent posts. [socket.io](https://socket.io/) is quite a good one to use and has some good getting started guides. This will require additional functionality on your backend for recent reviews e.g. last 10 minutes

## Feedback

### what we loved about this

- Lovely design! Very clear and well-spaced, and your colour scheme is very soothing :)
- The subtle hover effect on the box-shadow around your review boxes is a really nice touch. Good CSS skills there!
- Very nice use of the Moment library for handling your timestamps!

### would be even better if...

- You've asked for some help getting comments into each review, so I'll focus on that first to give you some next steps.
  - First, set up your function to get comments for a review in `utils/api.js`.
  - Where would you use this function in your code? Which component needs to be aware of the comments data?
  - I would recommend creating a new component named `Comment` that displays each individual component. I can see that a design for a comment component doesn't appear in your wireframe yet, so it would be a great idea to create a wireframe for this one too.
  - Hope this gives you a good idea of where to start with the comments - don't forget to use nchelp if you have any questions.

- Now, for some more general feedback for you to have a look at once you've got your comments working!
  - One of the best things about React is the ability to create components. It makes things easier for developers to focus on just one small part of the UI at a time. Your `Reviews` component contains a lot of elements that could be extracted into their own components, then imported back into `Reviews`.
  - For example, how about creating a `SingleReview` component? You could use the code that's currently inside your `reviews.map`, and eventually end up with something that looks like `reviews.map((review) => <SingleReview review={review} />)`.

## Summary

This is a great start, Greg. We've talked about getting comments into your reviews as your next step, which is a great idea. Please hang onto this checklist - it will come in useful when you plan your comment functionality. Let me know if anything in this feedback doesn't make sense, I'm always happy to clarify things for you if you need! Can't wait to see what you do with the comments!