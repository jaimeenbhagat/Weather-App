# Weather App 🌤️

This is a simple **Weather App** built using **React** and **OpenWeatherMap API** to fetch real-time weather data for any country. The app provides current temperature, humidity, and weather conditions. Additionally, users can toggle between dark and light mode for a more personalized experience.

## Features
- 🌍 Fetches weather data based on user-inputted country name.
- 🌡️ Displays temperature, humidity, and weather conditions (with an appropriate weather icon).
- 🌙 Toggle between **Dark Mode** and **Light Mode**.
- ⚡ Modern UI with smooth transitions.
- 🛠️ Error handling for invalid country inputs.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/jaimeenbhagat/Weather-App.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd Weather-App
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Get your API key** from [OpenWeatherMap](https://home.openweathermap.org/users/sign_up) and replace the `API_KEY` variable in the `App.jsx` file:
   ```javascript
   const API_KEY = "your_api_key_here";
   ```

5. **Run the app**:
   ```bash
   npm start
   ```

6. Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the app in action.

## Technologies Used

- **React**: For building the user interface.
- **Axios**: For making HTTP requests to fetch weather data.
- **OpenWeatherMap API**: For fetching real-time weather data.
- **React Icons**: For displaying weather-related icons (sun, clouds, rain, etc.).
- **CSS**: For styling the app, including Dark Mode and Light Mode themes.

## Project Structure

```
/public
  index.html
/src
  /assets
    back.jpeg           # Background image
  App.css               # Stylesheet
  App.jsx               # Main component
  index.js              # Entry point
.gitignore
package.json
README.md
```

## How to Use

1. Enter the name of any country into the input field.
2. Click the **"Get Weather"** button to retrieve the current weather data for the country.
3. Toggle between **Dark Mode** and **Light Mode** by clicking the **"Light Mode"/"Dark Mode"** button at the top.

## Weather Icons

- ☀️ **Clear skies**: Sun icon
- ☁️ **Cloudy**: Cloud icon
- 🌧️ **Rain**: Cloud with rain icon
- 🌙 **Night/Clear**: Moon icon

## Future Enhancements

- 🌐 Add support for multiple cities or locations.
- 🌦️ Display additional weather details (wind speed, pressure, etc.).
- 📍 Use **Geolocation API** to fetch weather based on the user's current location.
- 🎨 Improve the overall design and add animations for a more interactive experience.

## Contributions

Feel free to fork the repository and create pull requests. Any contributions or suggestions for new features are welcome!

## Contact

For any questions or feedback, please reach out via [jaimeenbhagat@outlook.com](mailto:jaimeenbhagat@outlook.com).