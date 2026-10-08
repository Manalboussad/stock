const nameInput = document.getElementById("productName")
const quantityInput = document.getElementById("quantity")
const priceInput = document.getElementById("price")
const addBtn = document.getElementById("addBtn")
const stockList = document.getElementById("stockList")

addBtn.addEventListener("click", ajouterProduit)

// Entrée dans n'importe quel champ = ajouter
;[nameInput, quantityInput, priceInput].forEach(function (champ) {
    champ.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            ajouterProduit()
        }
    })
})

function ajouterProduit() {
    const nom = nameInput.value.trim()
    const quantite = quantityInput.value.trim()
    const prix = priceInput.value.trim()

    // Vérifications
    if (nom === "" || quantite === "" || prix === "") {
        alert("Please fill in all fields.")
        return
    }
    if (Number(quantite) < 0 || Number(prix) < 0) {
        alert("Quantity and price must be positive.")
        return
    }

    const ligne = document.createElement("tr")

    const tdNom = document.createElement("td")
    tdNom.textContent = nom

    const tdQuantite = document.createElement("td")
    tdQuantite.textContent = quantite

    const tdPrix = document.createElement("td")
    tdPrix.textContent = Number(prix).toFixed(2)

    const tdActions = document.createElement("td")
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    deleteBtn.className = "btn btn-danger btn-sm"
    deleteBtn.addEventListener("click", function () {
        ligne.remove()
    })
    tdActions.appendChild(deleteBtn)

    ligne.appendChild(tdNom)
    ligne.appendChild(tdQuantite)
    ligne.appendChild(tdPrix)
    ligne.appendChild(tdActions)
    stockList.appendChild(ligne)

    // Vider les champs
    nameInput.value = ""
    quantityInput.value = ""
    priceInput.value = ""
    nameInput.focus()
}