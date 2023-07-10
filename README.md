# Daf-Tools-API
Express Application Programming Interface for the DAF Tools fullstack project

## Base URL
: _https://daf-express-api.netlify.app/.netlify/functions/api_

## API Paths
#### Here are some of the API paths available in this project:

## Currently all the API paths have `GET` method

### `/asset/carouselimages`
- `GET /asset/carouselimages` - Returns a list of daftools page snapshots.

### `/aboutdata`
- `GET /aboutdata` - Returns a list of data about daftools pages with mobile snapshots.

### `/foodlists`
- `GET /foodlists` - Returns a list of foods for each blood type.

### `/zodiacsignsinfo`
- `GET /zodiacsignsinfo` - Returns a list of horscope information for each zodiac.

### `/bmitips`
- `GET /hydrationtips` - Returns a list of tips on BMI.

### `/hydrationtips`
- `GET /hydrationtips` - Returns a list of tips on hydration.

### `/zodiacuidata`
- `GET /zodiacuidata` - Returns a list of UI data used for personality page.

### `/bloodinfo`
- `GET /bloodinfo` - Returns a list of foods for each blood type.

### `/asset/images`
- `GET /asset/images` - Returns a list of images.

### `/asset/zodiacimages`
- `GET /asset/zodiacimages` - Returns a list of zodiac images paths.
  
## Dependency
- express
- serverless-http
- cors
- netlify-cli
  
## Running the Project

To run the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the project dependencies by running `npm install <dependency name here>`.
3. Initialize netlify
4. Start the server by running `netlify dev`.
5. Access the API at `http://localhost:8080/.netlify/functions/api/`.


## Contributing

If you would like to contribute to this project, please open an [issue](https://github.com/Bekione/Daf-Tools-API/issues) or submit a [pull request](https://github.com/Bekione/Daf-Tools-API/pulls).

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
