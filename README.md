# Scriptable Weather Fetcher

This Scriptable script fetches current weather and forecast data from the OpenWeatherMap API.  The script is written in JavaScript and is designed to run in the [Scriptable](https://scriptable.app) app on iOS devices.  This script was written to be included with a custom "Daily Briefing" apple shortcut that runs each morning to provide a summary of todays weather.

## Requirements

- Scriptable app installed on your iOS device.
- API key from OpenWeatherMap to access their weather data. (free)

## Setup

1. Get an API key from [OpenWeatherMap](https://openweathermap.org/api) if you haven't already.
2. Replace `<<API KEY>>` in the script with your OpenWeatherMap API key.
3. Set your desired ZIP code in the `<<ZIP CODE>>` variable.

## Usage

1. Open the Scriptable app on your iOS device.
2. Create a new script and paste the contents of `weather-fetcher.js`.
3. Run the script by tapping the play button in the top-right corner.
4. Check the console output for the current weather and forecast information.

## Customization

- You can customize the output formatting or add additional features by modifying the `createOutput` function in the script.
- Feel free to adjust units, language, or any other parameters in the API URLs to suit your preferences.

## License

This script is open-source and available under the [MIT License](LICENSE). You are free to use, modify, and distribute it as per the license terms.

## Author

This script is developed and maintained by Daniel Whicker.

---

For any questions or contributions, please feel free to open an issue or submit a pull request on the repository.
