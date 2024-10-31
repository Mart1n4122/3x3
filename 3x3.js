const originalNumbers = [1,2,3,4,5,6,7,8,9]
function Shuffle(){
    const gridContainer = document.getElementById("grid")
    const shufflednumbers = [...originalNumbers].sort(()=> Math.random()-0.5)
    gridContainer.innerHTML = ""
    shufflednumbers.forEach(number => {
        const cell = document.createElement("div")
        cell.classList.add("grid-item")
        cell.textContent = number
        gridContainer.appendChild(cell)
    })
}