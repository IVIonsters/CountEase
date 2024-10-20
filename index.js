let count = 0
let saveEntry = document.getElementById("save-entry")
let countEntry = document.getElementById("count-entry")

function increment() {
  count += 1
  countEntry.textContent = count
}

function save() {
  let countStr = count + " - "
  saveEntry.textContent += countStr
  countEntry.textContent = 0
  count = 0
}

console.log("You are counting up!") 
