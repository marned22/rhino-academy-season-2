console.log('SpaceX exercise');

const API_URL = "https://api.spacexdata.com/v5/launches/upcoming"

const ftchLnchs = document.getElementById('launchResults')
const ftchBtn = document.getElementById('fetchLaunches')

const getPosts = async () => {
    try{
        const response = await axios.get(API_URL)
        const data = response.data
        console.log(data)
        ftchLnchs.innerHTML= data.map(item => `
            <div class="launch-item">
            <li>Rocket: ${item.rocket}</li>
            <li>Name: ${item.name}</li>
            <li>Date: ${item.date_local}</li>
            </div>
            `)
    } catch(error){
        console.log(error)
    }
}

ftchBtn.addEventListener('click', getPosts)
