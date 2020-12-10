const panels = document.querySelectorAll('.panel')
// querySelector : selects the class elements with assigned name. Only the first
//  querySelectorAll : used when more than one element has the same assigned name and puts them all in what is called a NodeList (similar to an array). console.log(panels)

panels.forEach((panels) => {
    panels.addEventListener('click', () => {
        removeActiveClasses()
        panels.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}