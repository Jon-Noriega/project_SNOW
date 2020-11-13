<h1>skiHouse</h1>
Rally your friends, select from one of the US-Rockies' many world-reknown ski resorts, and book your priority reservation dates.
<br></br>
<h2>General Info</h2>
<p>
We are a community of skiers/snowboarders first! Secondly, we're a platform where passholders can reserve priority access at their favorite US-Rockies ski resorts. :blue_heart:
 
Our mission is to:

<li>Facilitate connection amongst community members of each ski pass (Ikon/Epic)</li>
<li>Become the go-to platform for ensuring the community locks in their priority access through our reservation system.</li>
</p>

<h2>Inspiration</h2>

<p>
I was inpired to create this project by the excitement of the upcoming ski season. Skiing is hands down one of my favorite ways to spend a weekend. Integrating a reservation system is also very relevant given the impact that COVID-19 has had on the local ski resorts, as they pivot torwards reservation systems as a way to control traffic and ensure they continue to deliver a best-in-class quality experience to their passholders.
</p>

<h2>Technologies</h2>

<ul>
 <li>Ruby: version 2.6.1</li>
 <li>Rails: version 6.0.3</li>
 <li>SQLite3: version 1.4</li>
 <li>Puma: version 4.1</li>
 <li>JavaScript: version 1.1.1</li>
 <li>JSON: version 2.3</li>
</ul>

<h2>Setup</h2>
To run this project, create a folder on your local environment where you can clone the "project_SNOW" GitHub repository. Open this repository in your code editor.<br><br>
From your backend folder perform the following commands:<br>
<li>Use the command to install all required gems: <code>bundle install</code></li>
<li>Use the Rails command: <code>rails db:migrate</code></li>
<li>Seed your backend database tables using the following command: <code>rails db:seed</code></li>
<li>Run the backend with command <code>rails s</code></li><br>
From your frontend folder perform the following command: <code>lite-server</code><br><br>
You are now ready to start using the first iteration of skiHouse<br>

<h2>Instructions</h2>
<ol>
 <li>Explore our member community, by ski pass. We ecourage you to connect with community members who may not already be 1st-degree connections. Make a new friend to ski with. Especially when they have the same pass as you. Don't let the passes restrict you either, you can always share a buddy pass with a member who has a different ski pass!</li>
 <li>Invite friends to a ski trip by flipping their card and clicking on the invite button.</li>
 <li>Once you have rounded out your friend group for the upcoming trip, it's now time to find a resort to ski at. Do so by clicking on the toggle button.</li>
 <li>Explore the resort community and once you're ready to reserve priority access to the resort of your choosing, click on the card to flip it over.</li>
 <li>You will now see an input area which you can click on to be taken to the reservation calendar.</li>
 <li>Select a reservation date and a reservation start time, then click "set".</li>
 <li>You will now see details for your upcoming Ski Day which will include your invited friends along with the reserved ski resort.</li>
</ol>

<h2>Code Examples</h2>

<h4>Card Flipping:</h4>

```
.inner-resort-card-divs {
    position: relative;
    width: 335px;
    height: 400px;
    transition: transform 1.8s;
    transform-style: preserve-3d;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-right: 30px;
    margin-left: 30px;
}

.front-resort-card-divs, .back-resort-card-divs {
    position: absolute;
    backface-visibility: hidden;
}

.back-resort-card-divs {
    transform: rotateY(180deg);
    color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    font-family: 'Roboto', sans-serif;
    text-align: center;
    width: 335px;
    height: 400px;
    background-color: rgb(44, 81, 248);
    margin-top: 21px;
    margin-bottom: 21px;
    margin-right: 21px;
    margin-left: 21px;
    border-radius: 10px 50px 10px 50px;
}

.outer-resort-card-divs.reverse .inner-resort-card-divs {
    transform: rotateY(180deg);
}
```

<h4>Toggle Communities:</h4>

```
const toggleViewButton = document.querySelector(".toggle-view-button")

toggleViewButton.addEventListener("click", () => {
    
    let membersContainer = document.querySelector(".members-container")
    let resortsContainer = document.querySelector(".resorts-container")
    
    membersContainer.classList.toggle("hide")
    resortsContainer.classList.toggle("hide")
})
```

<h2>Status</h2>

We're looking forward to rolling-out the following features:
<li>Create a user sign-in workflow.</li>
<li>Ability to select your favorite restaurants.</li>
<li>Introduce a search filter by location.</li>

<h2>Contact</h2>
<a href="https://www.linkedin.com/in/jonathannoriega/"><img src="https://user-images.githubusercontent.com/68958970/94946276-dc7b8a00-04a9-11eb-9431-366689b9fa06.png" alt="Jon Noriega" style="width:10px;height:10px;"></a>Jon Noriega :ocean:<br>
