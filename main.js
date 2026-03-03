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
        btndiv.innerHTML = `<button id="level-btn-${element.level_no}" onclick="wordSee(${element.level_no})" class="btn btn-outline btn-primary removeAct">
        <i class="fa-solid fa-book-open"></i></i>
                            Learn ${element.level_no}</a> </button>`
        levelContainer.appendChild(btndiv)
    }
}
// reomove active class:- 
const reomoveActive = () => {
    const all = document.querySelectorAll(".removeAct")
    all.forEach(element => {
        element.classList.remove("active")
    });
}
// word see:- 

const wordSee = (id) => {
    fetch(`https://openapi.programming-hero.com/api/level/${id}`)
        .then(res => res.json())
        .then(valu => {
            reomoveActive()
            const btn = document.getElementById(`level-btn-${id}`)
            btn.classList.add("active")
            displayWordSee(valu.data)
        })
}
const displayWordSee = (word) => {
    let WordContiner = document.getElementById("word-continer")
    WordContiner.innerHTML = ""
    if (word.length == 0) {
        WordContiner.innerHTML = ` <div class="font-Bangla col-span-3 text-center text-[#79716B] space-y-3">
        <img class="mx-auto" src="./assets/alert-error.png" alt="No image Found">
            <p class="mb-[12px]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h2 class="font-semibold text-[34px] text-[#292524]">নেক্সট Lesson এ যান</h2>
        </div>`
    }
    word.forEach(element => {
        const wordDiv = document.createElement("div")
        wordDiv.innerHTML = ` <div class="bg-white text-center shadow-sm rounded-xl py-15 px-5 space-y-4">
            <h2 class="text-2xl font-bold">${element.word ? element.word : "Word Not Found"}</h2>
            <p class="font-semibold">Meaning /Pronounciation</p>
            <div class="font-bangla text-2xl font-medium">"${element.meaning ? element.meaning
                : "Meaning Not Found"} / ${element.pronunciation ? element.pronunciation : "Pronunciation Not Found"}"</div>
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