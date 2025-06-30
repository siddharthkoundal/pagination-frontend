# Pagination Project

## Overview

This project is a React application that displays a list of products fetched from an API. It includes pagination controls to navigate through the product list.

## Features

- Fetches product data from an external API.
- Displays products in a grid format.
- Implements pagination to navigate through products.
- Responsive design with styled components.

## File Structure

```
pagination
├── public
│   └── vite.svg
├── src
│   ├── components
│   │   └── ProductCard.jsx
│   ├── constants
│   │   └── index.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd pagination
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the development server:
   ```
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to view the application.

## Components

- **App.jsx**: Main component that manages state and renders product cards and pagination.
- **ProductCard.jsx**: Component that displays individual product details.
- **index.js**: Entry point of the application.

## Constants

- **constants/index.js**: Contains constant values such as `PAGE_SIZE` for pagination.

## License

This project is licensed under the MIT License.
