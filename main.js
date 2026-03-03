// lesson level :-
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
        btndiv.innerHTML = `<button onclick="wordSee(${element.level_no})" class="btn btn-outline btn-primary">
        <i class="fa-solid fa-book-open"></i></i>
                            Learn ${element.level_no}</a> </button>`
        levelContainer.appendChild(btndiv)
    }
}
// word see:- 

const wordSee = (id) => {
    fetch(`https://openapi.programming-hero.com/api/level/${id}`)
        .then(res => res.json())
        .then(valu => displayWordSee(valu.data))
}
const displayWordSee = (word) => {
    let WordContiner = document.getElementById("word-continer")
    WordContiner.innerHTML = ""
    word.forEach(element => {
        const wordDiv = document.createElement("div")
        wordDiv.innerHTML = ` <div class="bg-white text-center shadow-sm rounded-xl py-15 px-5 space-y-4">
            <h2 class="text-2xl font-bold">${element.word}</h2>
            <p class="font-semibold">Meaning /Pronounciation</p>
            <div class="font-bangla text-2xl font-medium">"${element.meaning} / ${element.pronunciation}"</div>
            <div class="flex justify-between items-center">
                <button class="btn bg-[#1A91FF10] outline-none  hover:bg-primary hover:text-white"> <i
                        class="fa-solid fa-circle-info "></i></button>
                <button class="btn  bg-[#1A91FF10] outline-none  hover:bg-primary hover:text-white"> <i
                        class="fa-solid fa-volume-high"></i></button>
            </div>
        </div>`
        WordContiner.appendChild(wordDiv)
    });
}