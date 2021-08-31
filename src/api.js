const API_KEY = "2ac75e35b453400fb56d0f2caabc7e7a"
const base_url = "https://api.rawg.io/api/"

const time = (a,b,c,x,y,z) => {
    let currentTime = new Date();
    let firstYear = currentTime.getFullYear()+a;
    let firstMonth = (currentTime.getMonth() + 1+b).toString().padStart(2,0)
    let firstDay = (currentTime.getDate()+c).toString().padStart(2,0)
    let secondYear = currentTime.getFullYear()+x;
    let secondMonth = (currentTime.getMonth() + 1+y).toString().padStart(2,0)
    let secondDay = (currentTime.getDate()+z).toString().padStart(2,0)
    return `${firstYear}-${firstMonth}-${firstDay},${secondYear}-${secondMonth}-${secondDay}`
}

export let popular_games = () => `${base_url}games?key=${API_KEY}&dates=${time(-1,0,0,0,0,0)}&ordering=-rating&page_size=10`
export let new_games = () => `${base_url}games?key=${API_KEY}&dates=${time(-1,0,0,0,0,0)}&ordering=-released&page_size=10`
export let upcoming_games = () => `${base_url}games?key=${API_KEY}&dates=${time(0,0,0,1,0,0)}&ordering=-released&page_size=10`

export let game = (id) => `${base_url}games/${id}?key=${API_KEY}`
export let screenshots = (id) => `${base_url}games/${id}/screenshots?key=${API_KEY}`

export let searched_games = (game) => `${base_url}games?key=${API_KEY}&search=${game}&page_size=10`

