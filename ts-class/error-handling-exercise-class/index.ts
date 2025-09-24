// const findLower = (word: string[]): string | Error => {
//     if(word.length === 0){
//         return new Error(' Array dont have words')
//     }
//     return word[0]
// }

// const word = findLower(['Abcbc', 'cbcbcb'])
// if(word instanceof Error){
//     console.error(word.message)
// } else {
//     console.log(word)
// }

// type ApiResult<T> =
//   | { success: true; data: T }
//   | { success: false; error: Error };

// async function fetchData<T>(url: string): Promise<ApiResult<T>> {
//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw {
//         success: false,
//         error: new Error(
//           "HTTP Error : " + response.status + response.statusText
//         ),
//       };
//     }
//     const data: T = await response.json();
//     return { success: true, data };
//   } catch (error) {
//     if (error instanceof Error) {
//       return { success: false, error };
//     }
//     return  { success: false, error: new Error("Unknown error") };
//   }
// }

// interface Post {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

// async function data() {
// let result;
//   try {
//      result = await fetchData<Post>(
//       "https://jsonplaceholder.typicode.com/posts/1"
//     );

//     if (result.success) {
//       console.log("Post data", result.data);
//     }  else {
//     console.error("Api error", result.error.message);
//     }
// } catch (error) {
//     console.log(error)

//   }
// }

// data();

type Option<T> = { kind: 'some'; value: T} | { kind: 'none'}

function some<T>(value: T): Option<T>{
    return { kind: 'some', value}
}

function none<T>(): Option<T>{
    return { kind: 'none'}
}

async function findPostById<T>(id: number): Promise<Option<T>>{
    try{
        const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const result = await post.json()
        if(result.ok){
            return some(result)
        } else {

            return none()
        }

        
    } catch(error){
        console.log(error)
    }

    return { kind: 'none'}

}
(async function () {
    
    const res = await findPostById(1222222)
    console.log(res)
})()