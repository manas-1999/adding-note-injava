// console.log("welcome to nodes app");
shownotes();

let add_Btn = document.getElementById('addbtn');
add_Btn.addEventListener("click", function(e){
 let addtxt=document.getElementById('addtxt');
 let notes=localStorage.getItem("notes");
 if(notes==null){
     notesobj=[];
 }
 else{
     notesobj=JSON.parse(notes);
 }

 notesobj.push(addtxt.value);
 localStorage.setItem("notes",JSON.stringify(notesobj));
 addtxt.value="";
//  console.log(notesobj);
 shownotes();
})

function shownotes(){
    let notes=localStorage.getItem("notes");

    if(notes==null){
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
    }

    let html="";
    notesobj.forEach(function(element,index) {
        html +=`
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1} </h5>
            <p class="card-text"> ${element}</p>
            <button id=${index} onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`;
    });

    let notesElm=document.getElementById('notes');
    if(notesobj.length!=0){
        notesElm.innerHTML=html;
    }
    else{
        notesElm.innerHTML=`Nothing to show use "Add Note" section to add notes.`
    }
}

// function to delete note
function deleteNote(index){
    // console.log("i am deleting",index);
    let notes=localStorage.getItem("notes");

    if(notes==null){
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
    }
    notesobj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    shownotes();
}

let search=document.getElementById('search_txt');
search.addEventListener("input", function(){

    let input_val=search.value.toLowerCase();
    // console.log("search function runs",input_val)
    let notecard = document.getElementsByClassName('noteCard');
    // console.log(notecard);
    Array.from(notecard).forEach(function(element){

    let card_txt= element.getElementsByTagName("p")[0].innerText;
    if(card_txt.includes(input_val)){
        element.style.display="block";

    }
    else{
        element.style.display="none";
    }
    // console.log(card_txt);
    })
    })