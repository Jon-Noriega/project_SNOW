const baseURL = "http://localhost:3000"

const membersURL = `${baseURL}/members`
const portfoliosURL = `${baseURL}/portfolios`
const passesURL = `${baseURL}/passes`
const resortsURL = `${baseURL}/resorts`


function getResorts() {
    fetch(portfoliosURL)
        .then(response => response.json())
        .then(portfolios => {
            
            portfolios.forEach(portfolio => {
                
                const resortContainer = document.querySelector(`.${portfolio.name}-resort-cards-container`)
                // console.log(portfolio.resorts)
                
                portfolio.resorts.forEach(resort => {
                    const resortCard = document.createElement("div")
                    const resortName = document.createElement("h2")
                    const resortImage = document.createElement("img")
                    const resortSlogan = document.createElement("p")
                    
                    resortName.textContent = resort.name
                    resortImage.src = resort.image
                    resortSlogan.textContent = resort.slogan
                    
                    resortContainer.appendChild(resortCard)
                    resortCard.append(resortName, resortImage, resortSlogan)
                    
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
                
                portfolio.members.forEach(member => {
                    const memberCard = document.createElement("div")
                    const memberName = document.createElement("h2")
                    const memberImage = document.createElement("img")
                    const memberMode = document.createElement("p")
                    
                    memberName.textContent = member.name
                    memberImage.src = member.image
                    memberMode.textContent = member.mode
                    
                    memberContainer.appendChild(memberCard)
                    memberCard.append(memberName, memberImage, memberMode)
                    
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
