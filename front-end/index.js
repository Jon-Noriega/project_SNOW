
const baseURL = "http://localhost:3000"
const membersURL = `${baseURL}/members`
const portfoliosURL = `${baseURL}/portfolios`
const passesURL = `${baseURL}/passes`
const resortsURL = `${baseURL}/resorts`

const nightsWatchResortContainer = document.querySelector(".nights-watch-resort-container")
const nightsWatchResortHeader = document.createElement("h1")
nightsWatchResortHeader.textContent = "Ski Day: Friends and Resort"
nightsWatchResortHeader.className = "nights-watch-resort-header"
nightsWatchResortContainer.append(nightsWatchResortHeader)


const toggleViewButton = document.querySelector(".toggle-view-button")

toggleViewButton.addEventListener("click", () => {
    
    let membersContainer = document.querySelector(".members-container")
    let resortsContainer = document.querySelector(".resorts-container")
    
    membersContainer.classList.toggle("hide")
    resortsContainer.classList.toggle("hide")
})


function getResorts() {
    
    fetch(portfoliosURL)
    .then(response => response.json())
    .then(portfolios => {
        
        portfolios.forEach(portfolio => {
            
            const resortContainer = document.querySelector(`.${portfolio.name}-resort-cards-container`)
            // console.log(portfolio.resorts)
            
            const passHeader = document.createElement("h1")
            passHeader.textContent = `${portfolio.name} Pass`
            passHeader.className = "resort-pass-headers"
            resortContainer.append(passHeader)
            
            portfolio.resorts.forEach(resort => {
                
                const reservationCalendar = document.createElement("input")
                const resortCardOuter = document.createElement("div")
                const resortCardInner = document.createElement("div")
                const resortCardFront = document.createElement("div")
                const resortCardBack = document.createElement("div")
                const resortBackTesting = document.createElement("h2")
                const resortName = document.createElement("h2")
                const resortImage = document.createElement("img")
                const resortSlogan = document.createElement("h4")
                
                reservationCalendar.className = "datetime"
                reservationCalendar.placeholder = "Select reservation date"
                resortCardOuter.className = "outer-resort-card-divs"
                resortCardInner.className = "inner-resort-card-divs"
                resortCardFront.className = "front-resort-card-divs"
                resortCardBack.className = "back-resort-card-divs"
                resortBackTesting.textContent = resort.name
                resortBackTesting.className = "resort-back-header"
                resortName.textContent = resort.name
                resortName.className = "resort-front-header"
                resortImage.src = resort.image
                resortImage.className = "resort-card-images"
                resortSlogan.textContent = resort.slogan
                resortSlogan.className = "resort-slogan"
                
                resortContainer.append(resortCardOuter)
                resortCardOuter.append(resortCardInner)
                resortCardInner.append(resortCardFront, resortCardBack)
                resortCardFront.append(resortName, resortImage, resortSlogan)
                resortCardBack.append(resortBackTesting, reservationCalendar)
                mobiscroll.datetime('.datetime')
                
                resortCardOuter.addEventListener("click", event => {
                    resortCardOuter.classList.toggle("reverse")
                
                reservationCalendar.addEventListener("click", () => selectedResort(resortCardOuter))

                })
            })
        })
    })
}

function selectedResort(resortCardOuter) {

    const selectedResortUL = document.createElement("ul")
    const selectedResortLI = document.createElement("li")
    
    selectedResortLI.className = "selected-resort"

    nightsWatchResortContainer.append(selectedResortUL)
    selectedResortUL.append(selectedResortLI)
    selectedResortLI.append(resortCardOuter)
    
}


function getMembers() {
    
    fetch(portfoliosURL)
    .then(response => response.json())
    .then(portfolios => {
        
        portfolios.forEach(portfolio => {
            
            const memberContainer = document.querySelector(`.${portfolio.name}-member-cards-container`)
            
            const passHeader = document.createElement("h1")
            passHeader.textContent = `${portfolio.name} Pass`
            passHeader.className = "member-pass-headers"
            memberContainer.append(passHeader)
            
            portfolio.members.forEach(member => {
                
                const memberCardOuter = document.createElement("div")
                const memberCardInner = document.createElement("div")
                const memberCardFront = document.createElement("div")
                const memberCardBack = document.createElement("div")
                const memberBackTesting = document.createElement("h2")
                const memberName = document.createElement("h2")
                const memberImage = document.createElement("img")
                const memberMode = document.createElement("h4")
                const inviteButton = document.createElement("button")
                
                memberCardOuter.className = "outer-member-card-divs"
                memberCardInner.className = "inner-member-card-divs"
                memberCardFront.className = "front-member-card-divs"
                memberCardBack.className = "back-member-card-divs"
                memberBackTesting.textContent = member.name
                memberBackTesting.className = "member-back-header"
                memberName.textContent = member.name
                memberName.className = "member-front-header"
                memberImage.src = member.image
                memberImage.className = "member-card-images"
                memberMode.textContent = member.mode
                memberMode.className = "member-mode"
                inviteButton.textContent = "Invite"
                inviteButton.className = "invite-button"
                
                memberContainer.append(memberCardOuter)
                memberCardOuter.append(memberCardInner)
                memberCardInner.append(memberCardFront, memberCardBack)
                memberCardFront.append(memberName, memberImage, memberMode)
                memberCardBack.append(memberBackTesting, inviteButton)
                
                memberCardOuter.addEventListener("click", event => {
                    memberCardOuter.classList.toggle("reverse")

                inviteButton.addEventListener("click", () => nightsWatch(memberCardOuter))

                })
            })
        })
    })
}

function nightsWatch(memberCardOuter) {
    
    const nightWatch = document.createElement("ul")
    const watchMember = document.createElement("li")

    nightWatch.className = "nights-watch"
    watchMember.className = "watch-member"
    
    nightsWatchResortContainer.append(nightWatch)
    nightWatch.append(watchMember)
    watchMember.append(memberCardOuter)

}

getMembers()
getResorts()


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
