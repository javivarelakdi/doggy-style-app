# Doggy Style

## Description
Doggy Style is a Social Network for dogs with Geolocation and real-time chat. The frontend is built using Vite, React, and TypeScript.

## User Stories (MVP)

1. **Sign up** - As a user, I want to sign up on the webpage so that I can access app functionalities.
2. **Login** - As a user, I want to be able to log in on the webpage so that I can get access to the homepage.
3. **Homepage - Dogs grid** - As a user, I want to be able to access the homepage so that I see a grid of closer dogs sorted by distance.
4. **Favourites** - As a user, I want to be able to access a grid with dogs that added me as a favourite, and another with my favourite dogs.
5. **Own profile** - As a user, I want to be able to access a page with info about my dog, and be able to edit it.
6. **Others profile** - As a user, I want to be able to access a page with info about other dogs with distance from me by geolocation, a button to chat, and a button to make it a favourite.
7. **Logout** - As a user, I want to be able to log out from the webpage so that I can make sure no one will access my account.
8. **Geolocation** - As a user, I want to see the grid sorted by location (featuring first those closer to me). This information must be available also for events.
9. **Chat** - As a user, I want to chat with other dog owners featured in my grid.
10. **Filters** - As a user, I want to filter the main page according to different criteria (gender, breed, age).

## Frontend Pages

| Component   | Path     | Description                                                   |
|-------------|----------|---------------------------------------------------------------|
| LoginPage   | /login   | Allows users to log in to their account                       |
| SignupPage  | /signup  | Allows new users to create an account                         |
| ListPage    | /        | Displays a grid of nearby dogs (protected route)              |
| ProfilePage | /profile | Displays and allows editing of the user's dog profile         |
| FavoritesPage | /favorites | Shows grids of the user's favorite dogs and fans          |
| ChatPage    | /chat    | Allows users to chat with other dog owners                    |

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run lint`: Runs the linter to check for code style issues.
- `npm run preview`: Locally preview the production build.

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Technologies Used

- Vite
- React
- TypeScript
- Material-UI
- React Router
- Axios
- Date-fns

## Environment Variables

The following environment variables are required:

- `VITE_API_URL`: The URL of your backend API

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.