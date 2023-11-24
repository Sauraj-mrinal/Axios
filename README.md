
# Axios
Axios is a simple promise based HTTP client for the browser and node.js.
Axios provides a simple to use library in a small package with a very extensible interface.

To install Axios, you must be have Node JS installed on your device.


# Let's begin the journey 🔥

Let's install Axios, paste the following command in your terminal
  1)   npm i axios
    Now, the main part arrives,
      To get the API data,

        app.get('/', (req, res) => {
   // get random user api using axios and show it on the page in json

    axios.get('https://tiny-news-api.herokuapp.com/api/news') // API url which is getting data
        .then((response) => {
            res.send(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
})
