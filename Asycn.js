async function fetchData() {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/comments')
        const resposne = await data.json()
        console.log(resposne)
    } catch (error) {
        console.log(error)
    }
}

fetchData()
