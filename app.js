function AddElement (){
    var str =document.getElementById("text").value;
    const H2Element = document.createElement('h2');
    const div2 = document.querySelector('.div3');
    H2Element.innerHTML=str;
    div2.append(H2Element)

}