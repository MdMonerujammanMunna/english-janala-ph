const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then(valu => displayLessons(valu.data))
}
loadLessons()

const displayLessons = (array) => {
    const levelContainer = document.getElementById("Level_container")
    levelContainer.innerHTML = ""
    for (const element of array) {
        const btndiv = document.createElement("div")
        btndiv.innerHTML = `<button class="btn btn-outline btn-primary">
        <i class="fa-solid fa-book-open"></i></i>
                            Learn ${element.level_no}</a> </button>`
        levelContainer.appendChild(btndiv)
    }
}