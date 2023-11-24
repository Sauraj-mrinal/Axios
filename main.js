//--------------------------------------------------------------------------------------------------------

                                      // GET REQUEST
 //---------------------------------------------------------------------------------------------------------                                      
function getTodos() {
   
  // we can write it into two ways 

  // way 1)

    //  axios({
    //    method: 'get',
    //    url: 'https://jsonplaceholder.typicode.com/todos',

    //    // to limi the number of data 
    //    params :{
    //     _limit :5
    //    }
    //  }).then((res)=>{
    //     //  console.log(res.data);
    //      showOutput(res);
    //  }).catch((error)=>{
    //      console.log(error);
    //  })

     //----------------------------------------------------------------
     // in shortcut we can write it like 
     //-----------------------------------------------------------------

      // way2
     axios.get('https://jsonplaceholder.typicode.com/todos')
     .then((res)=>{
      //  console.log(res.data);
       showOutput(res);
       })
       .catch((error)=>{
       console.log(error);
       })
       //----------------------------------------------------------------
       //-----------------------------------------------------------------
                     console.log('GET Request');
      //---------------------------------------------------------------- -
  }
  //--------------------------------------------------------------------------------------------------------------------------------
                                                 // POST REQUEST
  //--------------------------------------------------------------------------------------------------------------------------------
  function addTodo() {

    // we can write it into two ways 

    // way 1)

    // axios({
    //      method: 'post',
    //      url: 'https://jsonplaceholder.typicode.com/todos',
    //      data :{
    //       title: 'Mrinal sauraj',
    //       completed: 'false'
    //      }
    //    }).then((res)=>{
    //       //  console.log(res.data);
    //        showOutput(res);
    //    }).catch((error)=>{
    //        console.log(error);
    //    })


      //----------------------------------------------------------------
      // in shortcut we can write it like 
      //-----------------------------------------------------------------

      // way2
      axios.post('https://jsonplaceholder.typicode.com/todos', {
        //here we can pass the object 
        title : 'new todo added successfully by mrinal',
        completed: 'false'
      }).then((res)=>{
        //  console.log(res.data);
         showOutput(res);
     }).catch((error)=>{
         console.log(error);
     })



    console.log('POST Request');
  }
  //--------------------------------------`-----------------------------  ---------------------------
  
                         // PUT/PATCH REQUEST
 //---------------------------------------------------------------------------------------------------
    function updateTodo() {

    //   // for put request
    //   axios({
    //    method: 'put',
    //    url: 'https://jsonplaceholder.typicode.com/todos/1',

    //    // to limi the number of data 
    //   data :{
    //     title : 'Updated Todo',
    //     completed : 'false'
    //    }
    //  }).then((res)=>{
    //     //  console.log(res.data);
    //      showOutput(res);
    //  }).catch((error)=>{
    //      console.log(error);
    //  })

         // for patch request 
          
         axios({
          method: 'patch',
          url: 'https://jsonplaceholder.typicode.com/todos/1',
   
          // to limi the number of data 
         data :{
           title : 'Updated Todo',
           completed : 'false'
          }
        }).then((res)=>{
           //  console.log(res.data);
            showOutput(res);
        }).catch((error)=>{
            console.log(error);
        })





                
                console.log('PUT/PATCH Request');
              }
 //------------------------------------------------------------------------------------------------             
                          // DELETE REQUEST
  //------------------------------------------------------------------------------------------------
  function removeTodo() {

   axios.delete('https://jsonplaceholder.typicode.com/todos/1')
   .then((res)=>{
     showOutput(res);
   })
   .catch((error)=>{
      console.log(error);
   })
    console.log('DELETE Request');
  }
  
  // SIMULTANEOUS DATA
  function getData() {
   axios.all([
    axios.get('https://jsonplaceholder.typicode.com/todos'),
      axios.get('https://jsonplaceholder.typicode.com/posts')
   ]).then((res)=>{
    console.log(res[0]);
    console.log(res[1]);
    console.log(res[2]);
  })
  .catch((error)=>{
     console.log(error);
  })
      

    console.log('Simultaneous Request');
  }
  
  // CUSTOM HEADERS
  function customHeaders() {

    console.log('Custom Headers');
  }
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
    const options={
      method: 'post',
      url :'https://jsonplaceholder.typicode.com/todos',
      data: {
       title : 'Hello world'
      },
      transformResponse : axios.defaults.transformResponse.concat( (data) => {
        // i want to change into upper case 
        data.title = data.title.toUpperCase();
        return data;
      })
    };
    axios(options).then((response)=>{
      showOutput(response);
    })
    console.log('Transform Response');
  }
  
  // ERROR HANDLING
  function errorHandling() {
      
    axios.get('https://jsonplaceholder.typicode.com/tod vos?_limit=5')
    .then((res)=>{
      showOutput(res)
    })
    .catch((error)=>{
      if(error.response){
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);

        //--------------------
         if(error.response.data === 404){
          alert('Error : Page Not Found')
         }
         else if(error.request){
          console.log(error.request);
         }else{
          console.log(error.message);
         }
      }
    });


    console.log('Error Handling');
  }
  
  // CANCEL TOKEN
  function cancelToken() {
    console.log('Cancel Token');
  }
  
  // INTERCEPTING REQUESTS & RESPONSES
  
  // AXIOS INSTANCES
  
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);








  