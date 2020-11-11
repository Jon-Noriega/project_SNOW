const baseURL = "http://localhost:3000"

const membersURL = `${baseURL}/members`
const portfoliosURL = `${baseURL}/portfolios`
const passesURL = `${baseURL}/passes`
const resortsURL = `${baseURL}/resorts`


const toggleViewButton = document.querySelector(".toggle-view-button")

toggleViewButton.addEventListener("click", () => {

    let resortsContainer = document.querySelector(".resorts-container")
    let membersContainer = document.querySelector(".members-container")

    resortsContainer.classList.toggle("hide")
    membersContainer.classList.toggle("hide")
})


function getResorts() {
    
    fetch(portfoliosURL)
    .then(response => response.json())
    .then(portfolios => {
        
        portfolios.forEach(portfolio => {
            
            const resortContainer = document.querySelector(`.${portfolio.name}-resort-cards-container`)
            // console.log(portfolio.resorts)
            
            const passHeader = document.createElement("h1")
            passHeader.textContent = portfolio.name
            passHeader.className = "resort-pass-headers"
            resortContainer.appendChild(passHeader)
            
            portfolio.resorts.forEach(resort => {
                
                const resortCardOuter = document.createElement("div")
                const resortCardInner = document.createElement("div")
                const resortCardFront = document.createElement("div")
                const resortCardBack = document.createElement("div")
                const resortBackTesting = document.createElement("h2")
                const resortName = document.createElement("h2")
                const resortImage = document.createElement("img")
                const resortSlogan = document.createElement("h3")
                
                resortCardOuter.className = "outer-resort-card-divs"
                resortCardInner.className = "inner-resort-card-divs"
                resortCardFront.className = "front-resort-card-divs"
                resortCardBack.className = "back-resort-card-divs"
                resortBackTesting.textContent = resort.name
                resortName.textContent = resort.name
                resortImage.src = resort.image
                resortImage.className = "resort-card-images"
                resortSlogan.textContent = resort.slogan
                
                resortContainer.appendChild(resortCardOuter)
                resortCardOuter.appendChild(resortCardInner)
                resortCardInner.append(resortCardFront, resortCardBack)
                resortCardFront.append(resortName, resortImage, resortSlogan)
                resortCardBack.appendChild(resortBackTesting)
                
                resortCardOuter.addEventListener("click", event => {
                    resortCardOuter.classList.toggle("reverse")
                    
                })
            })
        })
    })
}

function getMembers() {
    
    fetch(portfoliosURL)
    .then(response => response.json())
    .then(portfolios => {
        
        portfolios.forEach(portfolio => {
            
            const memberContainer = document.querySelector(`.${portfolio.name}-member-cards-container`)
            
            const passHeader = document.createElement("h1")
            passHeader.textContent = portfolio.name
            passHeader.className = "member-pass-headers"
            memberContainer.appendChild(passHeader)
            
            portfolio.members.forEach(member => {
                
                const memberCardOuter = document.createElement("div")
                const memberCardInner = document.createElement("div")
                const memberCardFront = document.createElement("div")
                const memberCardBack = document.createElement("div")
                const memberBackTesting = document.createElement("h2")
                const memberName = document.createElement("h2")
                const memberImage = document.createElement("img")
                const memberMode = document.createElement("h3")
                
                memberCardOuter.className = "outer-member-card-divs"
                memberCardInner.className = "inner-member-card-divs"
                memberCardFront.className = "front-member-card-divs"
                memberCardBack.className = "back-member-card-divs"
                memberBackTesting.textContent = member.name
                memberName.textContent = member.name
                memberImage.src = member.image
                memberImage.className = "member-card-images"
                memberMode.textContent = member.mode
                
                memberContainer.appendChild(memberCardOuter)
                memberCardOuter.appendChild(memberCardInner)
                memberCardInner.append(memberCardFront, memberCardBack)
                memberCardFront.append(memberName, memberImage, memberMode)
                memberCardBack.appendChild(memberBackTesting)

                memberCardOuter.addEventListener("click", event => {
                    memberCardOuter.classList.toggle("reverse")
                })
            })
        })
    })
}

getResorts()
getMembers()


// const memberContainer = document.querySelector(".member-cards-container")
// const resortContainer = document.querySelector(".resort-cards-container")

// RESORT DELINETATION BY PORTFOLIO //
// const epicResorts = (resort) => resort.portfolio.name === "Epic"

// fetch(resortsURL)
// .then(response => response.json())
// .then(resorts => {
//     resorts.filter(epicResorts).forEach(resort => {
        
//         const resortCard = document.createElement("div")
//         const resortName = document.createElement("h2")
//         const resortImage = document.createElement("img")
//         const resortSlogan = document.createElement("p")
        
//         resortName.textContent = resort.name
//         resortImage.src = resort.image
//         resortSlogan.textContent = resort.slogan
        
//         resortContainer.appendChild(resortCard)
//         resortCard.append(resortName, resortImage, resortSlogan)
        
//     })
//     console.log(resorts.filter(epicResorts))
// })

// const ikonResorts = (resort) => resort.portfolio.name === "Ikon"

// fetch(resortsURL)
// .then(response => response.json())
// .then(resorts => {
//     resorts.filter(ikonResorts).forEach(resort => {
        
//         const resortCard = document.createElement("div")
//         const resortName = document.createElement("h2")
//         const resortImage = document.createElement("img")
//         const resortSlogan = document.createElement("p")
        
//         resortName.textContent = resort.name
//         resortImage.src = resort.image
//         resortSlogan.textContent = resort.slogan
        
//         resortContainer.appendChild(resortCard)
//         resortCard.append(resortName, resortImage, resortSlogan)
        
//     })
//     console.log(resorts.filter(ikonResorts))
// })


// MEMBER DELINETATION BY PORTFOLIO //
// const epicMembers = (member) => member.portfolios[0].name === "Epic"

// fetch(membersURL)
// .then(response => response.json())
// .then(members => {
//     members.filter(epicMembers).forEach(member => {
        
//         const memberCard = document.createElement("div")
//         const memberName = document.createElement("h2")
//         const memberImage = document.createElement("img")
//         const memberMode = document.createElement("p")
        
//         memberName.textContent = member.name
//         memberImage.src = member.image
//         memberMode.textContent = member.mode
        
//         memberContainer.appendChild(memberCard)
//         memberCard.append(memberName, memberImage, memberMode)
        
//     })
//     console.log(members.filter(epicMembers))
// })
