//-- people function-->



document.getElementById('getFilms').addEventListener
('click',getFilms);
document.getElementById('getShips').addEventListener
('click',getShips);
document.getElementById('getVehicles').addEventListener
('click',getVehicles);
document.getElementById('getSpecies').addEventListener
('click',getSpecies);
document.getElementById('getPlanets').addEventListener
('click',getPlanets);
document.getElementById('getPeople').addEventListener
('click',getPeople);

 


//-- people function-->

 async function getPeople(){
   
   urls= await Promise.all( [fetch("https://www.swapi.tech/api/people/1").then(res => res.json()),
  fetch("https://www.swapi.tech/api/people/2").then(res => res.json()),fetch("https://www.swapi.tech/api/people/3").then(res => res.json()),
  fetch("https://www.swapi.tech/api/people/4").then(res => res.json()),fetch("https://www.swapi.tech/api/people/5").then(res => res.json()),
  fetch("https://www.swapi.tech/api/people/6").then(res => res.json()),fetch("https://www.swapi.tech/api/people/7").then(res => res.json()),
  fetch("https://www.swapi.tech/api/people/8").then(res => res.json()),fetch("https://www.swapi.tech/api/people/9").then(res => res.json()),
  fetch("https://www.swapi.tech/api/people/10").then(res => res.json()),fetch("https://www.swapi.tech/api/people/11").then(res => res.json()),
  fetch("https://www.swapi.tech/api/people/12").then(res => res.json()),fetch("https://www.swapi.tech/api/people/13").then(res => res.json()),
  fetch("https://www.swapi.tech/api/people/14").then(res => res.json()),fetch("https://www.swapi.tech/api/people/15").then(res => res.json()),
  fetch("https://www.swapi.tech/api/people/16").then(res => res.json()),])
  .then((data) => {
   console.log(data.result);
     
 
   const data1= data;

let output = "<h1 > Characters </h1>";

data1.forEach(element=> {
               output += `
         <div> <ul class="list-group mb-1">
            <li href="#" class="list-group-item list-group-item-action "><h5> Character:${element.result.properties.name}</h5></li>
            <li href="#" class="list-group-item list-group-item-action "><b>Birth Year:</b> ${element.result.properties.birth_year}</li>
            <li href="#" class="list-group-item list-group-item-action "><b>Height:</b> ${element.result.properties.height}</li>   
               <li href="#" class="list-group-item list-group-item-action "><b>Mass: </b>${element.result.properties.mass}</li>
               <li href="#" class="list-group-item list-group-item-action "><b>Gender:</b> ${element.result.properties.gender}</li>
               <li href="#" class="list-group-item list-group-item-action "><b>Hair Color:</b> ${element.result.properties.hair_color}</li>
               <li href="#" class="list-group-item list-group-item-action "><b>Skin Color:</b> ${element.result.properties.skin_color}</li>
               <li href="#" class="list-group-item list-group-item-action "><b>Eye Color:</b> ${element.result.properties.eye_color}</li>
               <li href="#" class="list-group-item list-group-item-action "><b>HomeWorld: </b>${element.result.properties.homewold}</li>
               <li href="#" class="list-group-item list-group-item-action "><b>Discription:</b> ${element.result.properties.description}</li>
              <li href="#" class="list-group-item list-group-item-action "><b>When Info was Created:</b> ${element.result.properties.created}</li>
               <li href="#" class="list-group-item list-group-item-action "><b>When Infor was Edited Las:</b> ${element.result.properties.edited}</li> 
              
          </ul></div>
            `;
           });
     
    
        document.getElementById('output').innerHTML = output;
       
        })
    }

   //-- film function-->
   async function getFilms(){
    urls=await Promise.all( [fetch("https://www.swapi.tech/api/films/1").then(res => res.json()),
    fetch("https://www.swapi.tech/api/films/2").then(res => res.json()),fetch("https://www.swapi.tech/api/films/3").then(res => res.json()),
    fetch("https://www.swapi.tech/api/films/4").then(res => res.json()),fetch("https://www.swapi.tech/api/films/5").then(res => res.json()),
    fetch("https://www.swapi.tech/api/films/6").then(res => res.json())])
      .then(data => {
         console.log(data);
       
    const data1= data; 
          
       let output = "<h1> Film Titles of Star Wars</h1>";    
     data1.forEach(element =>  {output +=`
              <div> 
             
              <ul class="list-group mb-1">
              <li href="#" class="list-group-item list-group-item-action "><h5><b> Film Tiltle :</b>${element.result.properties.title}</h5></li>
              <li href="#" class="list-group-item list-group-item-action "><b> Episode:</b> ${element.result.properties.episode_id}</li>
              <li href="#" class="list-group-item list-group-item-action "><b>Director:</b> ${element.result.properties.director}</li>
              <li href="#" class="list-group-item list-group-item-action "><b> Producer:</b> ${element.result.properties.producer}</li>

              <li href="#" class="list-group-item list-group-item-action "> <b>Relase Date:</b> ${element.result.properties.release_date}</li>
              
               
              <li href="#" class="list-group-item list-group-item-action "> <b>Planets in Film:</b> ${element.result.properties.Planets}</li>

              <li href="#" class="list-group-item list-group-item-action "> <b>When Info was creacted:</b> ${element.result.properties.created}</li>
              <li href="#" class="list-group-item list-group-item-action "><b> When Info was last Edited:</b> ${element.result.properties.edited}</li> 
              </ul> 
              </div>
           `; 
          }); 
        
          document.getElementById('output').innerHTML = output;
        })
      
    }
       //-- starship function-->
    async function getShips(){
   
        urls= await Promise.all( [fetch("https://www.swapi.tech/api/starships/22").then(res => res.json()),
       fetch("https://www.swapi.tech/api/starships/2").then(res => res.json()),fetch("https://www.swapi.tech/api/starships/3").then(res => res.json()),
       fetch("https://www.swapi.tech/api/starships/29").then(res => res.json()),fetch("https://www.swapi.tech/api/starships/23").then(res => res.json()),
       fetch("https://www.swapi.tech/api/starships/5").then(res => res.json()),fetch("https://www.swapi.tech/api/starships/9").then(res => res.json()),
       fetch("https://www.swapi.tech/api/starships/10").then(res => res.json()),fetch("https://www.swapi.tech/api/starships/27").then(res => res.json()),
       fetch("https://www.swapi.tech/api/starships/28").then(res => res.json()),fetch("https://www.swapi.tech/api/starships/11").then(res => res.json()),
       fetch("https://www.swapi.tech/api/starships/12").then(res => res.json()),fetch("https://www.swapi.tech/api/starships/13").then(res => res.json()),
       fetch("https://www.swapi.tech/api/starships/15").then(res => res.json()),fetch("https://www.swapi.tech/api/starships/21").then(res => res.json()),
       fetch("https://www.swapi.tech/api/starships/17").then(res => res.json()),])
       .then((data) => {
        console.log(data.result);
          
        
     const data1= data;
     
     let output = "<h1> Starships </h1>";
     
     data1.forEach(element=> {
                    output += `
              <div> <ul class="list-group mb-1">
                 <li href="#" class="list-group-item list-group-item-action "><h5><b> StarShip Name:</b>${element.result.properties.name}</h5></li>
                 <li href="#" class="list-group-item list-group-item-action "><b>Model Name:</b> ${element.result.properties.model}</li>
                 <li href="#" class="list-group-item list-group-item-action "><b>Manufacturer:</b> ${element.result.properties.manufacturer}</li>   
                    <li href="#" class="list-group-item list-group-item-action "><b>Star Ship Length:</b> ${element.result.properties.length}</li>
                    <li href="#" class="list-group-item list-group-item-action "><b>Max Speed:</b> ${element.result.properties.max_atmosphering_speed}</li>
                    <li href="#" class="list-group-item list-group-item-action "><b>StarShip Cost:</b> ${element.result.properties.cost_in_credits}</li>
                    <li href="#" class="list-group-item list-group-item-action "><b>Crew Number:</b> ${element.result.properties.crew}</li>
                    <li href="#" class="list-group-item list-group-item-action "><b>How long Consumable on board will last:</b> ${element.result.properties.consumables}</li>
                    <li href="#" class="list-group-item list-group-item-action "><b>HyperDrive Rating:</b> ${element.result.properties.hyperdrive_rating}</li>
                    <li href="#" class="list-group-item list-group-item-action "><b>MGLT:</b> ${element.result.properties.MGLT}</li>
                   <li href="#" class="list-group-item list-group-item-action "><b>StartShip Class:</b> ${element.result.properties.starship_clas}</li>
       
                    <li href="#" class="list-group-item list-group-item-action "> <b>When Info was creacted:</b> ${element.result.properties.created}</li>
              <li href="#" class="list-group-item list-group-item-action "><b> When Info was last Edited:</b> ${element.result.properties.edited}</li> 
              
                   
               </ul></div>
                 `;
                });
          
         
             document.getElementById('output').innerHTML = output;
             
             })
         }
        
   //-- vehicles function-->
 async function getVehicles(){
   
    urls= await Promise.all( [fetch("https://www.swapi.tech/api/vehicles/18").then(res => res.json()),
   fetch("https://www.swapi.tech/api/vehicles/20").then(res => res.json()),fetch("https://www.swapi.tech/api/vehicles/24").then(res => res.json()),
   fetch("https://www.swapi.tech/api/vehicles/25").then(res => res.json()),fetch("https://www.swapi.tech/api/vehicles/26").then(res => res.json()),
   fetch("https://www.swapi.tech/api/vehicles/6").then(res => res.json()),fetch("https://www.swapi.tech/api/vehicles/7").then(res => res.json()),
   fetch("https://www.swapi.tech/api/vehicles/8").then(res => res.json()),fetch("https://www.swapi.tech/api/vehicles/30").then(res => res.json()),
   fetch("https://www.swapi.tech/api/vehicles/33").then(res => res.json()),fetch("https://www.swapi.tech/api/vehicles/34").then(res => res.json()),
   fetch("https://www.swapi.tech/api/vehicles/35").then(res => res.json()),fetch("https://www.swapi.tech/api/vehicles/37").then(res => res.json()),
   fetch("https://www.swapi.tech/api/vehicles/14").then(res => res.json()),fetch("https://www.swapi.tech/api/vehicles/36").then(res => res.json()),
   fetch("https://www.swapi.tech/api/vehicles/16").then(res => res.json()),])
   .then((data) => {
    console.log(data.result);
      
  
 const data1= data;
 
 let output = "<h1> Vehicles</h1>";
 
 data1.forEach(element=> {
                output += `
          <div> <ul class="list-group mb-1">
             <li href="#" class="list-group-item list-group-item-action "><h5> <b>Vehicle Name:</b>${element.result.properties.name}</h5></li>
             <li href="#" class="list-group-item list-group-item-action "><b>Vehicle Model:</b> ${element.result.properties.model}</li>
             <li href="#" class="list-group-item list-group-item-action "><b>Vehicle Manufacturer:</b> ${element.result.properties.manufacturer}</li>   
                <li href="#" class="list-group-item list-group-item-action "><b>Vehicle Length:</b> ${element.result.properties.length}</li>
                <li href="#" class="list-group-item list-group-item-action "><b>Max Speed :</b> ${element.result.properties.max_atmosphering_speed}</li>
                <li href="#" class="list-group-item list-group-item-action "><b>Vehicle Cost:</b> ${element.result.properties.cost_in_credits}</li>
                <li href="#" class="list-group-item list-group-item-action "><b>Crew Number:</b> ${element.result.properties.crew}</li>
                <li href="#" class="list-group-item list-group-item-action "><b>How long Consumable on board will last:</b> ${element.result.properties.consumables}</li>
                <li href="#" class="list-group-item list-group-item-action "><b>Passengers Number:</b> ${element.result.properties.passengers}</li>
                <li href="#" class="list-group-item list-group-item-action "><b>Vehicle Class:</b> ${element.result.properties.vehicle_class}</li>
               <li href="#" class="list-group-item list-group-item-action "><b>Cargo Capacity :</b> ${element.result.properties.cargo_capacity}</li>

                <li href="#" class="list-group-item list-group-item-action "> <b>When Info was creacted:</b> ${element.result.properties.created}</li>
                <li href="#" class="list-group-item list-group-item-action "> <b>When Info was last Edited:</b> ${element.result.properties.edited}</li> 
                
                

               
           </ul></div>
             `;
            });
      
     
         document.getElementById('output').innerHTML = output;
        
         })
     }
 
 
  //-- Species function-->
     async function getSpecies(){
   
        urls= await Promise.all( [fetch("https://www.swapi.tech/api/species/1").then(res => res.json()),
       fetch("https://www.swapi.tech/api/species/2").then(res => res.json()),fetch("https://www.swapi.tech/api/species/3").then(res => res.json()),
       fetch("https://www.swapi.tech/api/species/4").then(res => res.json()),fetch("https://www.swapi.tech/api/species/5").then(res => res.json()),
       fetch("https://www.swapi.tech/api/species/6").then(res => res.json()),fetch("https://www.swapi.tech/api/species/6").then(res => res.json()),
       fetch("https://www.swapi.tech/api/species/8").then(res => res.json()),fetch("https://www.swapi.tech/api/species/7").then(res => res.json()),
       fetch("https://www.swapi.tech/api/species/10").then(res => res.json()),fetch("https://www.swapi.tech/api/species/9").then(res => res.json()),
       fetch("https://www.swapi.tech/api/species/12").then(res => res.json()),fetch("https://www.swapi.tech/api/species/11").then(res => res.json()),
       fetch("https://www.swapi.tech/api/species/14").then(res => res.json()),fetch("https://www.swapi.tech/api/species/13").then(res => res.json()),
       fetch("https://www.swapi.tech/api/species/16").then(res => res.json()),])
       .then((data) => {
        console.log(data.result);
          
      {function waitAll (){
     
      } }
     const data1= data;
     
     let output = "<h1>Species</h1>";
     
     data1.forEach(element=> {
                    output += `
              <div> <ul class="list-group mb-1">
                 <li href="#" class="list-group-item list-group-item-action "><h5><b> Specie Type:</b>${element.result.properties.name}</h5></li>
                 <li href="#" class="list-group-item list-group-item-action "><b>Specie Classification :</b> ${element.result.properties.classification}</li>
                 <li href="#" class="list-group-item list-group-item-action "><b>Designation :</b> ${element.result.properties.designationt}</li>   
                    <li href="#" class="list-group-item list-group-item-action "><b>Average Height:</b> ${element.result.properties.average_height}</li>
                    <li href="#" class="list-group-item list-group-item-action "><b>Language :</b> ${element.result.properties.language}</li>
                    <li href="#" class="list-group-item list-group-item-action "><b>Hair: </b>${element.result.properties.hair_color}</li>
                    <li href="#" class="list-group-item list-group-item-action "><b>Skin:</b> ${element.result.properties.skin_color}</li>
                    <li href="#" class="list-group-item list-group-item-action "><b>Eye:</b> ${element.result.properties.eye_color}</li>
                    <li href="#" class="list-group-item list-group-item-action "><b>Average Life Span:</b> ${element.result.properties.average_lifespan}</li>
                   
                    <li href="#" class="list-group-item list-group-item-action "><b> When Info was creacted:</b> ${element.result.properties.created}</li>
                    <li href="#" class="list-group-item list-group-item-action "><b> When Info was last Edited:</b> ${element.result.properties.edited}</li> 
                    
                   
               </ul></div>
                 `;
                });
          
         
             document.getElementById('output').innerHTML = output;
            
             })
         }
   
  //-- Planets function-->
 async function getPlanets(){
   
    urls= await Promise.all( [fetch("https://www.swapi.tech/api/planets/1").then(res => res.json()),
   fetch("https://www.swapi.tech/api/planets/2").then(res => res.json()),fetch("https://www.swapi.tech/api/planets/3").then(res => res.json()),
   fetch("https://www.swapi.tech/api/planets/4").then(res => res.json()),fetch("https://www.swapi.tech/api/planets/5").then(res => res.json()),
   fetch("https://www.swapi.tech/api/planets/6").then(res => res.json()),fetch("https://www.swapi.tech/api/planets/7").then(res => res.json()),
   fetch("https://www.swapi.tech/api/planets/8").then(res => res.json()),fetch("https://www.swapi.tech/api/planets/9").then(res => res.json()),
   fetch("https://www.swapi.tech/api/planets/10").then(res => res.json()),fetch("https://www.swapi.tech/api/planets/11").then(res => res.json()),
   fetch("https://www.swapi.tech/api/planets/12").then(res => res.json()),fetch("https://www.swapi.tech/api/planets/13").then(res => res.json()),
   fetch("https://www.swapi.tech/api/planets/14").then(res => res.json()),fetch("https://www.swapi.tech/api/planets/15").then(res => res.json()),
   fetch("https://www.swapi.tech/api/planets/16").then(res => res.json()),])
   .then((data) => {
    console.log(data.result);
      
  
 const data1= data;
 
 let output = "<h1> Planets</h1>";
 
 data1.forEach(element=> {
                output += `
          <div> <ul class="list-group mb-1">
             <li href="#" class="list-group-item list-group-item-action "><h5><b> Planet Name :</b>${element.result.properties.name}</h5></li>
             <li href="#" class="list-group-item list-group-item-action "><b>Population:</b> ${element.result.properties.population}</li>
             <li href="#" class="list-group-item list-group-item-action "><b>Rotation Period :</b> ${element.result.properties.rotation_period}</li>
             <li href="#" class="list-group-item list-group-item-action "><b>Orbital Period :</b> ${element.result.properties.orbital_period}</li>   
                <li href="#" class="list-group-item list-group-item-action "><b>Diameter:</b> ${element.result.properties.diameter}</li>
                <li href="#" class="list-group-item list-group-item-action "><b>Climate:</b> ${element.result.properties.climate}</li>
                <li href="#" class="list-group-item list-group-item-action "><b>Gravity:</b> ${element.result.properties.gravity}</li>
                <li href="#" class="list-group-item list-group-item-action "><b>Terrain:</b> ${element.result.properties.terrain}</li>
                <li href="#" class="list-group-item list-group-item-action "><b>Surface Water:</b> ${element.result.properties.surface_water}</li>
  
                <li href="#" class="list-group-item list-group-item-action "><b> When Info was creacted:</b> ${element.result.properties.created}</li>
                <li href="#" class="list-group-item list-group-item-action "><b> When Info was last Edited:</b> ${element.result.properties.edited}</li> 
                
               
           </ul></div>
             `;
            });
      
     
         document.getElementById('output').innerHTML = output;
        
         })
     }
   