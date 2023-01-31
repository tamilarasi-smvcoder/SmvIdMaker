/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


const preview = document.getElementById("preview");
preview.addEventListener("click",prev);


function prev(){
    const regno = document.getElementById("regno").value;
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const vname = document.getElementById("vname").value;
    const dist = document.getElementById("dist").value;
    
    const regnos = document.getElementById("regnos");
    const names = document.getElementById("names");
    const dob = document.getElementById("dob");
    const village = document.getElementById("village");
    const district = document.getElementById("district");
    
    regnos.innerHTML = regno;
    names.innerHTML = name;
    dob.innerHTML = date;
    village.innerHTML = vname;
    district.innerHTML = dist;
    
    var canvas = document.getElementById("result");
    canvas.height = canvas.width/0.7;
    var ctx = canvas.getContext("2d");
    
    //text Gradient Color
    var my_gradient=ctx.createLinearGradient(0, 0, 256, 0);
    my_gradient.addColorStop(0, "green");
    my_gradient.addColorStop(0.3, "#DE3163");
    my_gradient.addColorStop(0.6, "#FF8300");
    my_gradient.addColorStop(0.8, "blue");
    my_gradient.addColorStop(1, "#DC143C");
    //Heading Line
    ctx.fillStyle = my_gradient;
    //ctx.fillStyle="green";
    ctx.rect(0,55,300,5);
    ctx.fill();
    // Heading
    ctx.font="15px arial black";
    ctx.fillStyle= my_gradient;
    ctx.fillText("கற்போம் கற்பிப்போம்",60,20);
    ctx.fillText("கல்வி இயக்கம்",90,40);
    //tree image
    const tree = document.getElementById("tree");
    ctx.drawImage(tree,0,0,50,50);
    //book image
    const book = document.getElementById("books");
    ctx.drawImage(book,250,0,50,50);
    //student photo
    const image = document.getElementById("imgDisplayed");
    ctx.drawImage(image,95,70,110,135);
    //student data
    ctx.font="19px arial black";
    ctx.textAlign="center";
    ctx.fillStyle = my_gradient;
    ctx.fillText(names.innerHTML,150,250);
    ctx.fillStyle = "black";
    ctx.font="17px arial black";
    ctx.fillText(regnos.innerHTML,150,280);
    ctx.fillText(dob.innerHTML,150,310);
    ctx.fillText(village.innerHTML,150,340);
    ctx.fillText(district.innerHTML,150,370);
   
    //var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    //gradient.addColorStop("0","megenta");
    //gradient.addColorStop("0.5","blue");
    //gradient.addColorStop("1.0","red");
    //ctx.fillStyle = gradient;
    //ctx.fillText("Hello",20,50);
    
    
    const down = document.getElementById("down");
    down.addEventListener("click",function()
    {
        const canvas = document.getElementById("result");
        
        const canvasContent=canvas.toDataURL();
        //console.log(canvasContent);//check in console
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.href = canvas.toDataURL();
        a.download="Card.png";
        a.click();
        //document.body.removeChild(a);
    });
}
    

const previewImage =(event)=>{
    const imageFiles = event.target.files;
    const imageFilesLength = imageFiles.length;
    const imgDisplayed = document.getElementById("imgDisplayed");
    if(imageFilesLength>0){
        const imageSrc = URL.createObjectURL(imageFiles[0]);
        const imagePreviewElement = document.querySelector("#preview-selected-image");
        imagePreviewElement.src = imageSrc;
        imagePreviewElement.style.display="block";
    }
    const image = document.getElementById("imgDisplayed");
    image.src = URL.createObjectURL(event.target.files[0]);
};
