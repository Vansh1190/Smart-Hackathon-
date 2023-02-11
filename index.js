let date = "0-0-0";

let defaultFunc = (a,site)=>{
    counts = 0;
    let api = a
    let pos = a.search("all")
    console.log(pos)
    console.log(a)
    let text = ""
    let response = fetch(api)
    try{

        document.body.style.height = "900px"
        document.getElementById("hackathons").innerHTML = "";
        document.getElementById("loading").src ="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
    }
    catch{

    }
      response.then((r)=>{
        return r.json()
    }).then((res)=>{
        document.body.style.height = "100%"
        document.getElementById("loading").src =""
        document.getElementById("hackathons").innerHTML = "";
        res.forEach((e)=>{

            counts++;

            if(pos == 28){
                site  = (a.split("/v1/")[1])
               site = e.site
            }
            console.log(e)
            let name = ""
            if(e.name.length > 44){
                name = e.name.slice(0,44)
                name = name + "..."
            }
            else{
                name =e.name
            }
        
        if(date > e.start_time.split("T")[0]){
            console.log(e.name)
        }
        let s = toString(e.url)
        document.getElementById("count").innerHTML = counts;
            document.getElementById
            ("hackathons").innerHTML += `
        <div class="cont">
        <div class="card">
        <div class="left">
        <img class = "whatsappLogo"  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1022px-WhatsApp.svg.png" >
        <h2>${name}</h2>
        <p>Start Date : ${e.start_time.split("T")[0]}</p>
        <p>Duration : <small ID="DE">${e.end_time.split("T")[0]}</small></p>
        <p>Organized by : ${site}</p>
        <br>
        <button class="button" onclick="goto(${e.url})" >Know more</button>

        </div>
        </div>
        </div>
        `       
    })
})

}

let All = ()=>{
    defaultFunc("https://kontests.net/api/v1/all");
}



let codeforces = ()=>{
    defaultFunc("https://kontests.net/api/v1/codeforces","Code Forces");
}
let topcoder = ()=>{
    defaultFunc("https://kontests.net/api/v1/top_coder","Top Coder");
}
let atcoder = ()=>{
    defaultFunc("https://kontests.net/api/v1/at_coder" , "AtCoder");
}
let csacademy = ()=>{
    defaultFunc("https://kontests.net/api/v1/cs_academy", "CS Academy");
}
let codechef = ()=>{
    defaultFunc("https://kontests.net/api/v1/code_chef", "Coder Chef");
}
let hackerRank = ()=>{
    defaultFunc("https://kontests.net/api/v1/hacker_rank", "Hacker Rank");
}
let hackerEarth = ()=>{
    defaultFunc("https://kontests.net/api/v1/hacker_earth", "Hacker Earth");
}
let kickStart = ()=>{
    defaultFunc("https://kontests.net/api/v1/kick_start", "Kick Start");
}
let leetcode = ()=>{
    defaultFunc("https://kontests.net/api/v1/leet_code" , "Leet Code");
}
let toph = ()=>{
    defaultFunc("https://kontests.net/api/v1/toph", "Toph");
}

let changed = ()=>{
 date = (document.getElementById("calender").value)

 defaultFunc("https://kontests.net/api/v1/all");
}


setTimeout(() => {
    All();
}, 200)


let goto = (e)=>{
    window.open(e)
}