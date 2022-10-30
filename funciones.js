function Variables(){
    var a=5;
    let x=10;
    var a=10;
    const a1=20;

    document.getElementById("Var1").innerHTML=a;
    document.getElementById("Let1").innerHTML=x;
    document.getElementById("Const1").innerHTML=a1;
    //a1=200;
    x=200;
}

function Variables2(){
    var a=5;
    let x=10;
    var a=1000;
    const a1=20;
    //a1=200;
    x=200;
    document.getElementById("Var1").innerHTML=a;
    document.getElementById("Let1").innerHTML=x;
    document.getElementById("Const1").innerHTML=a1;
}

function ValoresB(){
    var a,b,c;
    a=10;
    b=200;
    c=a>b;
    document.getElementById("Var1").innerHTML=c;
    c=a+b;
    document.getElementById("Let1").innerHTML=c;
}

function ValoresL(){
    var a,b,c;
    a=10;
    b=200;
    c=a>b;
    document.getElementById("Var1").innerHTML=c;
    c=a+b;{
        let c=200;
    } 
    document.getElementById("Let1").innerHTML=c;
}

function Arreglos(){
    const SitE=["especial", "Regular", "Excelente"];
    SitE[0]="EspecialX";
    SitE.push("No especificado")
    document.getElementById("Var1").innerHTML=SitE[0];
    document.getElementById("Let1").innerHTML=SitE[1];
    document.getElementById("Const1").innerHTML=SitE[3];
}