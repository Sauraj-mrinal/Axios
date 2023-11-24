
# Axios
hii my name is mrinal and today i am trying  to learn Axios

Axios is a simple promise based HTTP client for the browser and node.js.
Axios provides a simple to use library in a small package with a very extensible interface.

# use 
We can make API calls with Axios from JavaScript applications irrespective of whether
the JavaScript is running on the front-end like a browser or the server-side.

# To install Axios, you must be have Node JS installed on your device.

# These are basic methods for generating requests in axios.


axios.request(config)

        axios.get(url[, config])
        axios.delete(url[, config])
        axios.head(url[, config])
        axios.options(url[, config])
        axios.post(url[, data[, config]])
        axios.put(url[, data[, config]])
        axios.patch(url[, data[, config]])
        
These are method aliases, created for convenience.


# Why Use Axios?

Okay, think of Axios as a super-helpful tool for talking to the internet. We already have ways to do that in JavaScript, 
like using Fetch or XMLHttpRequest. But Axios? It's like the superhero version.

Easy to Use: Axios makes talking to the internet simpler.
It's like a friend who helps you ask for information or send messages without you having to write a ton of complicated code.

Works Everywhere: Axios is cool because it can do its job in different places - in a regular web browser and on a server.
Imagine it's like a messenger that can deliver your messages both at home and at work.

Promises Magic: Axios uses something called Promises, which is just a fancy way of saying it's really good at handling information. 
This is handy when you want your web page to do things without getting stuck.

Friend to All Frameworks: Whether you're using simple JavaScript or fancier tools like React or Angular, Axios gets along with everyone.
It's like the friend who fits in with any group.

Works with Old and New: Some tools only like new things, but not Axios.
It's like the superhero that can deal with the latest stuff and even helps out with older things like Internet Explorer.

So, Axios is like your trusty sidekick for internet adventures.
It helps you talk to the web easily, no matter where you're building your cool projects.

//-------------------------------------------------------------------------------------------------------------------------------//
Let us start by invoking a GET method with the Axios HTTP client from our server-side application: serversideapp.

For doing this, we will add an Express route handler function with a URL: /products to the application. 
In the route handler function, we will fetch the list of products by calling an API from our apiserver with the URL: http://localhost:3002/products.

We will use the signature: axios(config) on the default instance provided by the Axios HTTP client for doing this:

    but first we will see the syntex 
    //------------------------------------------
           axios.request(config)

          axios.get(url[, config])
  //--------------------------------------------

                      const express = require('express')
                      
                      // Get the default instance
                      const axios = require('axios')
                      
                      const app = express()
                      
                      // Express route handler with URL: '/products' and a handler function
                      app.get('/products', (request, response) => {
                      
                        // Make the GET call by passing a config object to the instance
                        axios({
                          method: 'get',
                          url: 'http://localhost:3002/products'
                        }).then(apiResponse => {
                           // process the response
                           const products = apiResponse.data
                           response.json(products)
                        })
                        
                      }) 
                      
In this example, we are first calling require('axios') for getting an instance: axios set up with a default configuration.

Then we are passing a configuration argument to the axios instance containing the method parameter set to the HTTP method:
get and the url parameter set to the URL of the REST endpoint: http://localhost:3002/products. 
The url parameter is mandatory while we can omit the method parameter that will then default to get.

This method returns a JavaScript Promise object which means the program does not wait for the method to complete before trying to execute the subsequent statement.
The Promise is either fulfilled or rejected, depending on the response from the API.

We use the then() method as in this example for processing the result. The then() method gets executed when the Promise is fulfilled .
In our example, in the then method, we are extracting the list of products by calling apiResponse.data.

Similarly, a POST request for adding a new product made with the axios default instance will look like this:




# Axios Response object
When we send a request to a server, it returns a response. The Axios response object consists of:

data - the payload returned from the server
status - the HTTP code returned from the server
statusText - the HTTP status message returned by the server
headers - headers sent by server
config - the original request configuration
request - the request object





















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
