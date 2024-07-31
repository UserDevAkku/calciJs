const B1 = document.querySelector("#b1");
const B2 = document.querySelector("#b2");
const B3 = document.querySelector("#b3");
const B4 = document.querySelector("#b4");
const B5 = document.querySelector("#b5");
const B6 = document.querySelector("#b6");
const B7 = document.querySelector("#b7");
const B8 = document.querySelector("#b8");
const B9 = document.querySelector("#b9");
const B0 = document.querySelector("#b0");
const Badd = document.querySelector("#add");
const Bsub = document.querySelector("#minus");
const Bdivide = document.querySelector("#mul");
const Bmultiply = document.querySelector("#div");
const Bper = document.querySelector("#per");
const equal = document.querySelector(".display");
 const userinput = document.querySelector(".result");
const Bdel = document.querySelector("#del");
const Bdecimal=document.querySelector("#decimal");
const Bbackspace=document.querySelector("#backSpace");


let string = "";
const buttondel = () => {
    string="";
    userinput.value=string;
}



const calculate = () => {
    userinput.value=eval(string)

}
equal.addEventListener("click", () => {
    calculate();
})

const backspace=()=>{
    var str1=userinput.value;
    str1=str1.substr(0,str1.length-1);
userinput.value=str1;
}

const button1 = (box1) => {
    console.log(box1)
    string = string + box1;
    userinput.value = string;

}
const button2 = (box2) => {
    console.log(box2);
    string = string + box2;
     userinput.value = string;
}
const button3 = (box3) => {
    console.log(box3)
    string = string + box3;
    userinput.value = string;

}
const button4 = (box4) => {
    console.log(box4)
    string = string + box4;
    userinput.value = string;

}
const button5 = (box5) => {
    console.log(box5)
    string = string + box5;
 userinput.value = string;
}
const button6 = (box6) => {
    console.log(box6)
    
    string = string + box6;
    userinput.value = string;
}
const button7 = (box7) => {
    console.log(box7)
    string = string + box7;
    userinput.value = string;
}
const button8 = (box8) => {
    console.log(box8)
    string = string + box8;
    userinput.value = string;
}
const button9 = (box9) => {
    console.log(box9)
    string = string + box9;
    userinput.value = string;
}
const button0 = (box0) => {
    console.log(box0)
    string = string + box0;
    userinput.value = string;
}
const buttonadd = (boxadd) => {
    console.log(boxadd)
    string = string + boxadd;
    userinput.value = string;
}
const buttonminus = (boxminus) => {
    console.log(boxminus)
    string = string + boxminus;
    userinput.value = string;
}
const buttonmultiply = (boxmultiply) => {
    console.log(boxmultiply)
    string = string + boxmultiply;
    userinput.value = string;
}
const buttondivide = (boxdivide) => {
    console.log(boxdivide)
    string = string + boxdivide;
    userinput.value = string;
}
const buttonper = (boxper) => {
    console.log(boxper)
    string = string + boxper;
    userinput.value = string;
}
const buttondecimal = (boxdecimal) => {
    string = string +boxdecimal ;
userinput.value = string;
}


B1.addEventListener("click", () => {
    const box1 = B1.getAttribute("value")
    button1(box1);
})
B2.addEventListener("click", () => {
    const box2 = B2.getAttribute("value")
    button2(box2);
})
B3.addEventListener("click", () => {
    const box3 = B3.getAttribute("value")
    button3(box3);
})
B4.addEventListener("click", () => {
    const box4 = B4.getAttribute("value")
    button4(box4);
})
B5.addEventListener("click", () => {
    const box5 = B5.getAttribute("value")
    button5(box5);
})
B6.addEventListener("click", () => {
    const box6 = B6.getAttribute("value")
    button6(box6);
})
B7.addEventListener("click", () => {
    const box7 = B7.getAttribute("value")
    button7(box7);
})
B8.addEventListener("click", () => {
    const box8 = B8.getAttribute("value")
    button8(box8);
})
B9.addEventListener("click", () => {
    const box9 = B9.getAttribute("value")
    button9(box9);
})
B0.addEventListener("click", () => {
    const box0 = B0.getAttribute("value")
    button0(box0);
})
Badd.addEventListener("click", () => {
    const boxadd = Badd.getAttribute("value")
    buttonadd(boxadd);
})
Bsub.addEventListener("click", () => {
    const boxminus = Bsub.getAttribute("value")
    buttonminus(boxminus);
})
Bmultiply.addEventListener("click", () => {
    const boxmultiply = Bmultiply.getAttribute("value")
    buttonmultiply(boxmultiply);
})
Bdivide.addEventListener("click", () => {
    const boxdivide = Bdivide.getAttribute("value")
    buttondivide(boxdivide);
})
Bper.addEventListener("click", () => {
    const boxper = Bper.getAttribute("value")
    buttonper(boxper);
})
Bdecimal.addEventListener("click", () => {
    const boxdecimal= Bdecimal.getAttribute("value")
    buttondecimal(boxdecimal);
})
Bdel.addEventListener("click",()=>{
    buttondel();
})
Bbackspace.addEventListener("click",() => {
    backspace();
})











