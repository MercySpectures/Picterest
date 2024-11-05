# Picterest

Picterest is a simple React-based image gallery app that fetches images from the Lorem Picsum API. It allows users to view a collection of images, with an option to refresh the images by clicking a "Go" button. The app uses Axios for API requests and Vite for the development server.

## Features

- **Image Gallery**: Displays a collection of images fetched from the Lorem Picsum API.
- **Responsive Design**: Adjusts to various screen sizes, making it user-friendly on both desktop and mobile devices.
- **Dynamic Image Loading**: Fetches images upon clicking the "Go" button.
- **Reusable Components**: Organized with separate `Header`, `Footer`, and `App` components.

## Tech Stack

- **Frontend**: React, HTML, CSS
- **API Requests**: Axios
- **Build Tool**: Vite

## Folder Structure

```
picterest/
├── node_modules/
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

- **components**: Contains the reusable components `Header.jsx` and `Footer.jsx`.
- **App.jsx**: Main component that renders the layout and manages data fetching.
- **App.css**: Styling for the main `App` component.
- **index.css**: Global styles for the project.
- **main.jsx**: Entry point for the React app.
- **vite.config.js**: Vite configuration file for project setup.

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/MercySpectures/Picterest.git
   ```
   
2. **Install Dependencies**:
   ```bash
   cd picterest
   npm install
   ```

3. **Run the App**:
   ```bash
   npm run dev
   ```

4. **View in Browser**:
   Open your browser and go to `http://localhost:5173/`.

## Usage

- **Load Images**: Click the "Go" button to fetch images from the Lorem Picsum API.
- **Browse Images**: View images in a responsive gallery layout, with captions showing the author's name.

## API

This app uses the [Lorem Picsum API](https://picsum.photos/) to fetch random images. The endpoint used:
```
https://picsum.photos/v2/list?page=2&limit=100
```

## License

This project is open-source and available under the [MIT License](LICENSE).