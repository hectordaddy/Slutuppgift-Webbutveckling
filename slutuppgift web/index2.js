
document.getElementById('knapp').addEventListener('click', Hector);
let color1=0;



function Hector()
{

    if(color1==0)
    {
        document.body.style.backgroundColor="white";
        color1=1;
    }
    else if (color1==1)
    {
document.body.style.backgroundColor="black";
color1=0;

    }
}