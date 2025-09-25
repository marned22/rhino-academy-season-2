const axios = require('axios')

//Exercise 1

// const getTodo = async () => {
//     try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
//         const todos = response.data
//         for(const todo of todos){
//             if(todo.id <= 5){
//                 console.log(`Title: ${todo.title}, Completed: ${todo.completed}`)
//             }
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }

// getTodo()


//Exercise 2

// const createTodo = async () => {
//     try {
//         const response = await axios.post('https://jsonplaceholder.typicode.com/todos',{
//             title: "Complete homework" ,
//             completed: false,
//             userId: 1
//         })
//         console.log(response.data)
//     } catch(error) {
//         console.log(error)
//     }
// }

// createTodo()


//Exercise 3

// const updateTodo = async (todoId, data) => {
//     try {
//         const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${todoId}`, data)
//         console.log(response.data);
//     } catch(error){
//         console.log(error);
//     }
// }

// updateTodo(1, {
//     completed: true
// })

//Exercise 4

// const deleteTodo = async(todoId) => {
//     if(!todoId){
//         throw new Error('Post ID is required to delete TODO')
//     }

//     try{
//         const deleteResponse = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
//         console.log(`TODO with ${todoId} has been deleted`)
//     } catch(error){
//         console.log(error);
//     }
// }

// deletePost(99)


//Exercise 5

// const getAlbums = async() => {
//     try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/albums/')
//         const albums = response.data
//         for(const album of albums){
//             if(album.id === 1){
//                 console.log(album)
//             }
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAlbums()


// const getAlbums = async() => {
//     try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/albums/1')
//         console.log(response.data)
//     } catch(error){
//         console.log(error);
//     }
// }

// getAlbums()

