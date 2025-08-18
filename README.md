# Review Carousel

A simple and responsive review carousel component that allows navigation between different reviewers, displaying their photos, names, positions, and comments. It also supports random navigation and persists the last viewed review using `localStorage`.

## Features

- Navigate reviews with "Next" and "Previous" buttons.
- Display a random review with a dedicated button.
- Persist the last viewed review using `localStorage`.
- Dynamically load reviewer images from [randomuser.me](https://randomuser.me).
- Support for both male and female profiles.

## Technologies

- JavaScript (ES6+)
- HTML5 & DOM API
- LocalStorage API

## Project Structure

```
/
├── index.html           # Main page with basic markup
├── css/
│   └── styles.css       # Project styles
├── js/
│   └── carousel.js      # JavaScript logic for the carousel
└── README.md            # Project documentation
```

## Data Structure

The `reviewers` array contains objects representing each reviewer with the following fields:

| Field     | Type    | Description                                                    |
|-----------|---------|----------------------------------------------------------------|
| `icon`    | Number  | Reviewer image ID from randomuser.me                           |
| `name`    | String  | Full name of the reviewer                                      |
| `sex`     | String  | Reviewer's sex (`"men"` or `"women"`) for correct image loading |
| `position`| String  | Reviewer's professional title                                  |
| `review`  | String  | Review/testimonial text                                        |

## Implementation Details

- The `changePages(page)` function updates the interface with the corresponding reviewer's data.
- "Next" button advances to the next reviewer, looping back to the first after the last.
- "Previous" button goes back to the previous reviewer, looping to the last after the first.
- "Random" button selects a review randomly.
- The current state is saved in `localStorage` to maintain the last viewed review.

## License

This project is open-source and can be used freely