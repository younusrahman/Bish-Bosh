var antal_slider = document.getElementById("antal_slider");
var antal_value = document.getElementById("antal_value");

var bish_slider = document.getElementById("bish_slider");
var bish_value = document.getElementById("bish_value");

var bosh_slider = document.getElementById("bosh_slider");
var bosh_value = document.getElementById("bosh_value");




// for (let i = 0; i < antal_slider.value; i++) {
//     cell.innerHTML = antal_value;
//     container.appendChild(cell);
// }

var antal, bish, bosh;

var bishColor = "#d0ff14";
var boshColor = "#ff00cc";
var bish_boshColor = "#ff3503";
var noncolor = "white";


function updateSlider(){
    antal = parseInt(antal_slider.value); 
    bish = parseInt(bish_slider.value);
    bosh = parseInt(bosh_slider.value);
}

function updateGride(){
    updateSlider();
    
     for (let i = 1; i <= antal; i++){

        var uppdateDiv = document.getElementById(i);

        if( (i % bish) == 0 && i % bosh != 0){
            
            uppdateDiv.innerHTML = "Bish";
            uppdateDiv.style.color= bishColor;

        }
        else if( (i % bosh) == 0 && i % bish != 0){
            
            uppdateDiv.innerHTML = "Bosh";
            uppdateDiv.style.color= boshColor;


        }
        else if( (i % bosh) == 0 && i % bish == 0){
            
            uppdateDiv.innerHTML = "Bish & Bosh";
            uppdateDiv.style.color= bish_boshColor;
        }

        else{
            uppdateDiv.innerHTML = i;
            uppdateDiv.style.color= noncolor;
        }



     }


}


function updateTextInput(){
    antal_value.innerHTML = antal_slider.value; 
    updateSlider();


    for (let i = 1; i <= antal; i++) {

            if(!document.getElementById(i)){

                var div = document.createElement("div");
                div.id=i;
                div.className = "newGride";


              
                if( (i % bish) == 0 && i % bosh != 0){
                    
                    div.style.color = bishColor;
                    div.innerHTML = "Bish";

                }
                else if( (i % bosh) == 0 && i % bish != 0){
                    div.style.color = boshColor;
                    div.innerHTML = "Bosh";

                }
                else if( (i % bosh) == 0 && i % bish == 0){
                    div.style.color = bish_boshColor;
                    div.innerHTML = "Bish & Bosh";
                }

                else{
                    div.style.color = noncolor;
                    div.innerHTML = i;
                }
                
                document.getElementById("grid").appendChild(div);
            }


        
        
    }








        for (let i = antal+1; i <= 100; i++)
            {
                var myobj = document.getElementById(i);
                myobj.remove();
            }
}

















































// function updateTextInput(val){
//     antal_value.innerHTML = antal_slider.value; 

//     for (let i = 1; i <= val; i++) {

//             if(!document.getElementById(i)){

//                 var div = document.createElement("div");
//                 div.id=i;
//                 div.className = "newGride";

//                 let bish = parseInt(bish_slider.value);
//                 let bosh = parseInt(bosh_slider.value);

              
//                 if( (i % bish) == 0 && i % bosh != 0){
                    
//                     div.innerHTML = "Bish";

//                 }
//                 else if( (i % bosh) == 0 && i % bish != 0){
                    
//                     div.innerHTML = "Bosh";

//                 }
//                 else if( (i % bosh) == 0 && i % bish == 0){
//                     div.innerHTML = "Bish & Bosh";
//                 }

//                 else{
//                     div.innerHTML = i;
//                 }


                
//                 document.getElementById("grid").appendChild(div);
//             }}


     
//         for (let i = parseInt(val)+1; i <= 100; i++)
//             {
//                 var myobj = document.getElementById(i);
//                 myobj.remove();
//             }
// }




// antal_slider.oninput = function(){
//     antal_value.innerHTML = antal_slider.value; 
//     // antal_slider.value > document.getElementsByClassName("newGride").length
//     // if(!document.getElementById(antal_slider.value)){
//     // var div = document.createElement("div");
//     // div.id=antal_slider.value;
//     // div.className = "newGride";
//     // div.innerHTML = antal_slider.value;
//     // document.getElementById("grid").appendChild(div);}
//     // else{

//     // }
    






    
// };

bish_slider.oninput = function(){
    bish_value.innerHTML = bish_slider.value;
};

bosh_slider.oninput = function(){
    bosh_value.innerHTML = bosh_slider.value;
};




// document.querySelectorAll('.slider').forEach(item => {
//   item.addEventListener('oninput', event => {
//     antal_value.innerHTML = this.value;
//   })
// })


