const div = document.getElementById("container")


const fetchData = ()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then( active => active.json())
    .then(output =>{
        console.log(output)

        output.forEach(each =>{
            div.innerHTML +=`

            <div class= items>
            <h1>${each.body}</h1>
            <h2>${each.id}</h2>
            <h3>${each.title}</h3>
            <h4>${each.userId}</h4>
            
            
            
            
            
            
            
            </div>
            
            
            
            
            
            
            `







        })
      






    });
}

fetchData()






