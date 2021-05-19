let paginaCurenta="";
let GUIType="";
let removedAdminBttn=false;
let awaitingConfirmation=false;
let chosenid="";
let openGUI=false;
var GPUId;
var CPUId;
let costPC=0;
let powerPC=0;
const storage=window.localStorage;
let GUIPart="";
var GPU;
var CPU;

function clearListeners()
{
    if (paginaCurenta=="Admin") 
    {  
        if(!removedAdminBttn)
        {
       const buttons=document.getElementsByClassName("container_admin")[0].getElementsByTagName("a");
       buttons[0].removeEventListener("click",openAddGUI);
       buttons[1].removeEventListener("click",openShowGUI);
        }
        /*else
        {
            var gpu="";
            if (awaitingConfirmation==true)
            {
                console.log("removedEdit");
                gpu=document.getElementById(chosenid).lastChild;
                gpu.firstChild.removeEventListener("click",restoreGPU);
                gpu.lastChild.removeEventListener("click",removeGPU);
            }
            gpu=document.getElementsByClassName("div_edit");
            for (let x of gpu)
            {
                if (x.parentNode.id!=chosenid)
                {
                    console.log("removed events");
                    x.firstChild.removeEventListener("click",editGPU);
                    x.lastChild.removeEventListener("click",deleteGPU);
                } 
            }
        }*/
    }
    document.getElementsByClassName("nav_button")[0].removeEventListener("click",clickMain);
    document.getElementsByClassName("nav_button")[1].removeEventListener("click",clickBuild);
    document.getElementsByClassName("nav_button")[2].removeEventListener("click",clickAdmin);
    document.getElementsByClassName("nav_button")[3].removeEventListener("click",clickAbout);
}

function loadMainPage()
{
    paginaCurenta="Main";
    document.body.innerText="";
    let titlu=document.createElement("p");
    let main=document.createElement("main");
    let nav=document.createElement("nav");
    let section=document.createElement("section");
    let footer=document.createElement("footer");
    let wellcomemsg=document.createElement("p");
    let instructiuni=document.createElement("h");
    
    main.className="container";
    nav.className="navigare";
    section.className="section_home";
    footer.className="jos";
    titlu.className="titlu";
    wellcomemsg.className="home_title";
    instructiuni.className="home_instr";
    
    main.appendChild(wellcomemsg);
    main.appendChild(instructiuni);
    main.appendChild(section);
    main.appendChild(footer);
    wellcomemsg.innerText="Bine ati venit!";
    footer.innerText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quas odit pariatur! Animi ipsum reprehenderit maxime mollitia esse natus modi repudiandae, fugit temporibus laboriosam.";
    section.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore corporis voluptatibus labore repellat eaque ut, laborum vero numquam voluptatum, dolor vel. Placeat assumenda ab inventore? Nam asperiores aperiam sunt consequatur! Iusto voluptatem nemo quos, tempora iste accusamus sequi reprehenderit accusantium voluptate, eos laborum saepe sed eligendi nostrum pariatur distinctio voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore corporis voluptatibus labore repellat eaque ut, laborum vero numquam voluptatum, dolor vel. Placeat assumenda ab inventore? Nam asperiores aperiam sunt consequatur! Iusto voluptatem nemo quos, tempora iste accusamus sequi reprehenderit accusantium voluptate, eos laborum saepe sed eligendi nostrum pariatur distinctio voluptatibus.";
    instructiuni.innerText="Instructiuni de folosire:";

    let home=document.createElement("a");
    let buildPC=document.createElement("a");
    let admin=document.createElement("a");
    let about=document.createElement("a");
    home.className="nav_button button selected";
    buildPC.className="nav_button button";
    admin.className="nav_button button";
    about.className="nav_button button";
    home.innerText="Home"
    buildPC.innerText="Construieste PC";
    admin.innerText="Panou admin";
    about.innerText="Despre";
    titlu.innerText="Construieste un PC";
    
    nav.appendChild(home);
    nav.appendChild(buildPC);
    nav.appendChild(admin);
    nav.appendChild(about);
    
    document.body.appendChild(titlu);
    document.body.appendChild(nav);
    document.body.appendChild(main);
    home.addEventListener("click",clickMain);
    admin.addEventListener("click",clickAdmin);
    about.addEventListener("click",clickAbout);
    buildPC.addEventListener("click",clickBuild);
}

function clickMain()
{
    clearListeners();
    loadMainPage();
}

function clickBuild()
{
    clearListeners();
    loadBuild();
}

function loadBuild()
{
    paginaCurenta="Build";
    document.body.innerText="";
    costPC=powerPC=0;

    let titlu=document.createElement("p");
    let main=document.createElement("main");
    let nav=document.createElement("nav");
    let footer=document.createElement("footer");
    let divBuild=document.createElement("div");
    let divInfo=document.createElement("div");
    let divGPU=document.createElement("div");
    let divCPU=document.createElement("div");

    let infoTitle=document.createElement("p");
    let infoCost=document.createElement("p");
    let infoConsum=document.createElement("p");
    infoTitle.innerText="Informatii PC";
    infoConsum.innerText="Consum: " + powerPC + " W";
    infoCost.innerText="Cost: " + costPC + " lei";
    divInfo.appendChild(infoTitle);
    divInfo.appendChild(infoConsum);
    divInfo.appendChild(infoCost);
    infoTitle.className="info_title";
    infoCost.className="txt_info";
    infoConsum.className="txt_info";

    let GPUtxt=document.createElement("p");
    let CPUtxt=document.createElement("p");
    let GPUPart=document.createElement("div");
    let CPUPart=document.createElement("div");
    GPUPart.className="container_part build_part";
    CPUPart.className="container_part build_part";
    divGPU.className="build build_GPU";
    divCPU.className="build build_CPU";
    divGPU.appendChild(GPUtxt);
    divGPU.appendChild(GPUPart);
    divCPU.appendChild(CPUtxt);
    divCPU.appendChild(CPUPart);
    GPUtxt.innerText="GPU: ";
    CPUtxt.innerText="CPU: ";
    
    main.className="container";
    nav.className="navigare";
    footer.className="jos";
    titlu.className="titlu";
    
    divBuild.appendChild(divInfo);
    divBuild.appendChild(divGPU);
    divBuild.appendChild(divCPU);
    divBuild.className="div_build";
    divInfo.className="build_info";

    main.appendChild(divBuild);
    main.appendChild(footer);
    footer.innerText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quas odit pariatur! Animi ipsum reprehenderit maxime mollitia esse natus modi repudiandae, fugit temporibus laboriosam.";

    let home=document.createElement("a");
    let buildPC=document.createElement("a");
    let admin=document.createElement("a");
    let about=document.createElement("a");
    home.className="nav_button button";
    buildPC.className="nav_button button selected";
    admin.className="nav_button button";
    about.className="nav_button button";
    home.innerText="Home"
    buildPC.innerText="Construieste PC";
    admin.innerText="Panou admin";
    about.innerText="Despre";
    titlu.innerText="Construieste un PC";
    costPC=powerPC=0;
    
    nav.appendChild(home);
    nav.appendChild(buildPC);
    nav.appendChild(admin);
    nav.appendChild(about);
    
    document.body.appendChild(titlu);
    document.body.appendChild(nav);
    document.body.appendChild(main);
    home.addEventListener("click",clickMain);
    admin.addEventListener("click",clickAdmin);
    about.addEventListener("click",clickAbout);
    buildPC.addEventListener("click",clickBuild);

    loadBuildGPU();
    loadBuildCPU();
}

function loadBuildGPU()
{
    let GPU=JSON.parse(storage.getItem("GPU"));
    if (GPU)
    {
        //inseram GPU;
        console.log(GPU);
        costPC+=parseInt(GPU.pret);
        powerPC+=parseInt(GPU.consum);
        document.getElementsByClassName("txt_info")[0].innerText="Cost: "+costPC+" lei";
        document.getElementsByClassName("txt_info")[1].innerText="Consum: "+powerPC+" W";

        let containerGPU=document.getElementsByClassName("build_GPU")[0].children[1];

        let VRAM=document.createElement("p");
            let nume=document.createElement("p");
            let pret=document.createElement("p");
            let consum=document.createElement("p");
            let imgGPU=document.createElement("img");

            VRAM.innerText="VRAM: "+GPU.VRAM;
            nume.innerText="nume: "+GPU.nume;
            pret.innerText="pret: "+GPU.pret;
            consum.innerText="consum: "+GPU.consum;
            imgGPU.src=GPU.img;
            imgGPU.className="build_img";

            containerGPU.appendChild(imgGPU);
            containerGPU.appendChild(VRAM);
            containerGPU.appendChild(nume);
            containerGPU.appendChild(pret);
            containerGPU.appendChild(consum);

            let deleteGPU=document.createElement("a");
            deleteGPU.className="button button_admin button_select";
            deleteGPU.innerText="Sterge GPU";
        document.getElementsByClassName("build_GPU")[0].appendChild(deleteGPU);
        deleteGPU.addEventListener("click",deleteBuildGPU);
    }
    else
    {
        console.log("Nu gpu");
        document.getElementsByClassName("build_part")[0].className+=" hidden";
    }

    let buttonGPU=document.createElement("a");
        buttonGPU.className="button button_admin button_select";
        buttonGPU.innerText="Selecteaza GPU";
        document.getElementsByClassName("build_GPU")[0].appendChild(buttonGPU);
        buttonGPU.addEventListener("click",showBuildGPU);
}

function deleteBuildGPU()
{
    storage.removeItem("GPU");
    clickBuild();
}

async function showBuildGPU()
{
    openGUI=true;
    GUIPart="GPU";
    GPUNr=0;
    let addGUI=document.createElement("div");
    let guiInfo=document.createElement("div");
    let txt=document.createElement("p");
    let divbutton=document.createElement("div");
    let closeContainer=document.createElement("div");
    let buttonsContainer=document.createElement("div");
    let close=document.createElement("img");
    let back=document.createElement("a");
    let next=document.createElement("a");

    buttonsContainer.appendChild(back);
    buttonsContainer.appendChild(next);
    buttonsContainer.className="build_buttons";

    back.className="button button_admin";
    next.className="button button_admin";
    back.innerText="Back";
    next.innerText="Next";

    txt.innerText="Loading...";

    close.src="http://www.pngall.com/wp-content/uploads/5/Delete-Red-X-Button-PNG-Images.png";
    closeContainer.id="close_container";

    txt.className="add_gui_txt";
    addGUI.className="gui_background";
    guiInfo.className="choose_container";
    divbutton.className="container_choose_part";
    close.className="close_button";

    guiInfo.appendChild(closeContainer); 
    addGUI.appendChild(guiInfo);
    guiInfo.appendChild(txt);
    guiInfo.appendChild(divbutton);
    guiInfo.appendChild(buttonsContainer);

    closeContainer.appendChild(close);

    document.body.appendChild(addGUI);

    await fetch('http://localhost:3000/GPUs')
       .then(function(response)
       {
         if (!response.ok)
           throw new Error ("A aparut o problema.Status code: "+response.status);
         return response.json()
       }
       )
       .catch (error=>{console.log("Eroare la fetch:",error.message)})
       .then(function(data)
       { 
        GPU=data;
        console.log(GPU);
       }
       )
       .catch (error=>{console.log("Eroare la fetch:",error.message)});

       for (let i=0;i<4 && i<GPU.length;++i)
        {
            let divPart=document.createElement("div");
            divPart.className="container_part";
            let container=document.getElementsByClassName("container_choose_part")[0];
            container.appendChild(divPart);

            let VRAM=document.createElement("p");
            let nume=document.createElement("p");
            let pret=document.createElement("p");
            let consum=document.createElement("p");
            let imgGPU=document.createElement("img");
            let selectBttn=document.createElement("a");
            selectBttn.innerText="selecteaza";
            selectBttn.className="button button_admin mijloc";
            VRAM.innerText="VRAM: "+GPU[i].VRAM;
            nume.innerText="nume: "+GPU[i].nume;
            pret.innerText="pret: "+GPU[i].pret;
            consum.innerText="consum: "+GPU[i].consum;
            imgGPU.src=GPU[i].img;
            imgGPU.className="build_img";
            divPart.id=GPU[i].id;

            divPart.appendChild(imgGPU);
            divPart.appendChild(VRAM);
            divPart.appendChild(nume);
            divPart.appendChild(pret);
            divPart.appendChild(consum);
            divPart.appendChild(pret);
            divPart.appendChild(selectBttn);
            selectBttn.addEventListener("click",selectGPU);

        }

    close.addEventListener("click",closeBuildGUI);
    txt.innerText="Selectati GPU";
    if (GPUNr!=0)
    back.addEventListener("click",backGPU);
    else
    {
        back.className+=" grey";
    }
    if (GPUNr+4<GPU.length)
    next.addEventListener("click",nextGPU);
    else
    {
        next.className+=" grey";
    }
    GPUNr+=Math.min(4,GPU.length);
}

function backGPU()
{
    const nrGPU=document.getElementsByClassName("container_part").length-2;
    GPUNr-=(nrGPU+4);
    console.log(GPUNr);
    document.getElementsByClassName("container_choose_part")[0].innerText="";
    for (let i=GPUNr;i<GPUNr+4 && i<=GPU.length;++i)
    {
        let divPart=document.createElement("div");
        divPart.className="container_part";
        let container=document.getElementsByClassName("container_choose_part")[0];
        container.appendChild(divPart);

        let VRAM=document.createElement("p");
            let nume=document.createElement("p");
            let pret=document.createElement("p");
            let consum=document.createElement("p");
            let imgGPU=document.createElement("img");
        let selectBttn=document.createElement("a");
        selectBttn.innerText="selecteaza";
        selectBttn.className="button button_admin mijloc";
        VRAM.innerText="VRAM: "+GPU[i].VRAM;
            nume.innerText="nume: "+GPU[i].nume;
            pret.innerText="pret: "+GPU[i].pret;
            consum.innerText="consum: "+GPU[i].consum;
            imgGPU.src=GPU[i].img;
            imgGPU.className="build_img";
            divPart.id=GPU[i].id;

            divPart.appendChild(imgGPU);
            divPart.appendChild(VRAM);
            divPart.appendChild(nume);
            divPart.appendChild(pret);
            divPart.appendChild(consum);
            divPart.appendChild(pret);
            divPart.appendChild(selectBttn);
        selectBttn.addEventListener("click",selectGPU);

    }
    let back=document.getElementsByClassName("button_admin")[document.getElementsByClassName("button_admin").length-2];
    let next=document.getElementsByClassName("button_admin")[document.getElementsByClassName("button_admin").length-1];
    if (GPUNr==0)
    {
       back.removeEventListener("click",backGPU); 
       back.className+=" grey"; 
    }
    if (GPUNr<GPU.length)
    {
        next.className="button button_admin";
       next.addEventListener("click",nextGPU);
    }
    GPUNr=Math.min(GPUNr+4,GPU.length);
}

function nextGPU()
{
    document.getElementsByClassName("container_choose_part")[0].innerText="";
    for (let i=GPUNr;i<GPUNr+4 && i<GPU.length;++i)
    {
        let divPart=document.createElement("div");
        divPart.className="container_part";
        let container=document.getElementsByClassName("container_choose_part")[0];
        container.appendChild(divPart);

        let VRAM=document.createElement("p");
            let nume=document.createElement("p");
            let pret=document.createElement("p");
            let consum=document.createElement("p");
            let imgGPU=document.createElement("img");
        let selectBttn=document.createElement("a");
        selectBttn.innerText="selecteaza";
        selectBttn.className="button button_admin mijloc";
        VRAM.innerText="VRAM: "+GPU[i].VRAM;
            nume.innerText="nume: "+GPU[i].nume;
            pret.innerText="pret: "+GPU[i].pret;
            consum.innerText="consum: "+GPU[i].consum;
            imgGPU.src=GPU[i].img;
            imgGPU.className="build_img";
            divPart.id=GPU[i].id;

            divPart.appendChild(imgGPU);
            divPart.appendChild(VRAM);
            divPart.appendChild(nume);
            divPart.appendChild(pret);
            divPart.appendChild(consum);
            divPart.appendChild(pret);
            divPart.appendChild(selectBttn);
        selectBttn.addEventListener("click",selectGPU);
    }
    GPUNr=Math.min(GPUNr+4,GPU.length);
    let back=document.getElementsByClassName("button_admin")[document.getElementsByClassName("button_admin").length-2];
    let next=document.getElementsByClassName("button_admin")[document.getElementsByClassName("button_admin").length-1];
    console.log(GPUNr);
    if (GPUNr!=0)
    {
       back.addEventListener("click",backGPU); 
       back.className="button button_admin";
    }
    if (GPUNr>=GPU.length)
    {
        next.className+=" grey";
       next.removeEventListener("click",nextGPU);
    }
}

async function selectGPU()
{
    closeBuildGUI();
    storage.removeItem("GPU");
    await fetch('http://localhost:3000/GPUs/'+this.parentNode.id)
    .then(function(response)
    {
      if (!response.ok)
        throw new Error ("A aparut o problema.Status code: "+response.status);
      return response.json()
    }
    )
    .catch (error=>{console.log("Eroare la fetch:",error.message)})
    .then(function(data)
    { 
        let GPU={ 
            VRAM: data.VRAM,
            nume: data.nume,
            pret: data.pret,
            consum: data.consum,
            img: data.img
        }
        localStorage.setItem('GPU', JSON.stringify(GPU));
    }
    )
    .catch (error=>{console.log("Eroare la fetch:",error.message)});
    clickBuild();
}

function loadBuildCPU()
{
    let CPU=JSON.parse(storage.getItem("CPU"));
    if (CPU)
    {
        //inseram CPU;
        costPC+=parseInt(CPU.pret);
        powerPC+=parseInt(CPU.consum);
        document.getElementsByClassName("txt_info")[0].innerText="Cost: "+costPC+" lei";
        document.getElementsByClassName("txt_info")[1].innerText="Consum: "+powerPC+" W";
        let containerCPU=document.getElementsByClassName("build_CPU")[0].children[1];

        let GHz=document.createElement("p");
            let socket=document.createElement("p");
            let nume=document.createElement("p");
            let pret=document.createElement("p");
            let consum=document.createElement("p");
            let imgCPU=document.createElement("img");

            GHz.innerText="GHz: "+CPU.GHz;
            socket.innerText="socket: "+CPU.socket;
            nume.innerText="nume: "+CPU.nume;
            pret.innerText="pret: "+CPU.pret;
            consum.innerText="consum: "+CPU.consum;
            imgCPU.src=CPU.img;
            imgCPU.className="build_img";

            containerCPU.appendChild(imgCPU);
            containerCPU.appendChild(GHz);
            containerCPU.appendChild(socket);
            containerCPU.appendChild(nume);
            containerCPU.appendChild(pret);
            containerCPU.appendChild(consum);

            let deleteCPU=document.createElement("a");
            deleteCPU.className="button button_admin button_select";
            deleteCPU.innerText="Sterge CPU";
        document.getElementsByClassName("build_CPU")[0].appendChild(deleteCPU);
        deleteCPU.addEventListener("click",deleteBuildCPU);
    }
    else
    {
        console.log("Nu cpu");
        document.getElementsByClassName("build_part")[1].className+=" hidden";
    }

    let buttonCPU=document.createElement("a");
        buttonCPU.className="button button_admin button_select";
        buttonCPU.innerText="Selecteaza CPU";
        document.getElementsByClassName("build_CPU")[0].appendChild(buttonCPU);
        buttonCPU.addEventListener("click",showBuildCPU);
}

function deleteBuildCPU()
{
    storage.removeItem("CPU");
    clickBuild();
}

async function showBuildCPU()
{
    openGUI=true;
    GUIPart="CPU";
    CPUNr=0;
    let addGUI=document.createElement("div");
    let guiInfo=document.createElement("div");
    let txt=document.createElement("p");
    let divbutton=document.createElement("div");
    let closeContainer=document.createElement("div");
    let buttonsContainer=document.createElement("div");
    let close=document.createElement("img");
    let back=document.createElement("a");
    let next=document.createElement("a");

    buttonsContainer.appendChild(back);
    buttonsContainer.appendChild(next);
    buttonsContainer.className="build_buttons";

    back.className="button button_admin";
    next.className="button button_admin";
    back.innerText="Back";
    next.innerText="Next";

    txt.innerText="Loading...";

    close.src="http://www.pngall.com/wp-content/uploads/5/Delete-Red-X-Button-PNG-Images.png";
    closeContainer.id="close_container";

    txt.className="add_gui_txt";
    addGUI.className="gui_background";
    guiInfo.className="choose_container";
    divbutton.className="container_choose_part";
    close.className="close_button";

    guiInfo.appendChild(closeContainer); 
    addGUI.appendChild(guiInfo);
    guiInfo.appendChild(txt);
    guiInfo.appendChild(divbutton);
    guiInfo.appendChild(buttonsContainer);

    closeContainer.appendChild(close);

    document.body.appendChild(addGUI);

    await fetch('http://localhost:3000/CPUs')
       .then(function(response)
       {
         if (!response.ok)
           throw new Error ("A aparut o problema.Status code: "+response.status);
         return response.json()
       }
       )
       .catch (error=>{console.log("Eroare la fetch:",error.message)})
       .then(function(data)
       { 
        CPU=data;
        console.log(CPU);
       }
       )
       .catch (error=>{console.log("Eroare la fetch:",error.message)});

       for (let i=0;i<4 && i<CPU.length;++i)
        {
            let divPart=document.createElement("div");
            divPart.className="container_part";
            let container=document.getElementsByClassName("container_choose_part")[0];
            container.appendChild(divPart);

            let GHz=document.createElement("p");
            let socket=document.createElement("p");
            let nume=document.createElement("p");
            let pret=document.createElement("p");
            let consum=document.createElement("p");
            let imgCPU=document.createElement("img");
            let selectBttn=document.createElement("a");
            selectBttn.innerText="selecteaza";
            selectBttn.className="button button_admin mijloc";
            GHz.innerText="GHz: "+CPU[i].GHz;
            socket.innerText="socket: "+CPU[i].socket;
            nume.innerText="nume: "+CPU[i].nume;
            pret.innerText="pret: "+CPU[i].pret;
            consum.innerText="consum: "+CPU[i].consum;
            imgCPU.src=CPU[i].img;
            imgCPU.className="build_img";
            divPart.id=CPU[i].id;

            divPart.appendChild(imgCPU);
            divPart.appendChild(GHz);
            divPart.appendChild(socket);
            divPart.appendChild(nume);
            divPart.appendChild(pret);
            divPart.appendChild(consum);
            divPart.appendChild(selectBttn);
            selectBttn.addEventListener("click",selectCPU);

        }

    close.addEventListener("click",closeBuildGUI);
    txt.innerText="Selectati CPU";
    if (CPUNr!=0)
    back.addEventListener("click",backCPU);
    else
    {
        back.className+=" grey";
    }
    if (CPUNr+4<CPU.length)
    next.addEventListener("click",nextCPU);
    else
    {
        next.className+=" grey";
    }
    CPUNr+=Math.min(4,CPU.length);
}

function closeBuildGUI()
{
    openGUI=false;
    document.getElementById("close_container").getElementsByTagName("img")[0].removeEventListener("click",closeBuildGUI);
    if (GUIPart=="CPU")
    {
    if (CPUNr!=0)
    document.getElementsByClassName("button_admin")[2].removeEventListener("click",backCPU);
    if (CPUNr+4<CPU.length)
    document.getElementsByClassName("button_admin")[3].removeEventListener("click",nextCPU);
    }
    document.body.lastChild.innerText="";
    document.body.removeChild(document.body.lastChild);
}

function backCPU()
{
    const nrCPU=document.getElementsByClassName("container_part").length-2;
    CPUNr-=(nrCPU+4);
    console.log(CPUNr);
    document.getElementsByClassName("container_choose_part")[0].innerText="";
    for (let i=CPUNr;i<CPUNr+4 && i<=CPU.length;++i)
    {
        let divPart=document.createElement("div");
        divPart.className="container_part";
        let container=document.getElementsByClassName("container_choose_part")[0];
        container.appendChild(divPart);

        let GHz=document.createElement("p");
        let socket=document.createElement("p");
        let nume=document.createElement("p");
        let pret=document.createElement("p");
        let consum=document.createElement("p");
        let imgCPU=document.createElement("img");
        let selectBttn=document.createElement("a");
        selectBttn.innerText="selecteaza";
        selectBttn.className="button button_admin mijloc";
        GHz.innerText="GHz: "+CPU[i].GHz;
        socket.innerText="socket: "+CPU[i].socket;
        nume.innerText="nume: "+CPU[i].nume;
        pret.innerText="pret: "+CPU[i].pret;
        consum.innerText="consum: "+CPU[i].consum;
        imgCPU.src=CPU[i].img;
        imgCPU.className="build_img";
        divPart.id=CPU[i].id;

        divPart.appendChild(imgCPU);
        divPart.appendChild(GHz);
        divPart.appendChild(socket);
        divPart.appendChild(nume);
        divPart.appendChild(pret);
        divPart.appendChild(consum);
        divPart.appendChild(selectBttn);
        selectBttn.addEventListener("click",selectCPU);

    }
    let back=document.getElementsByClassName("button_admin")[document.getElementsByClassName("button_admin").length-2];
    let next=document.getElementsByClassName("button_admin")[document.getElementsByClassName("button_admin").length-1];
    if (CPUNr==0)
    {
       back.removeEventListener("click",backCPU); 
       back.className+=" grey"; 
    }
    if (CPUNr<CPU.length)
    {
        next.className="button button_admin";
       next.addEventListener("click",nextCPU);
    }
    CPUNr=Math.min(CPUNr+4,CPU.length);
}

function nextCPU()
{
    document.getElementsByClassName("container_choose_part")[0].innerText="";
    for (let i=CPUNr;i<CPUNr+4 && i<CPU.length;++i)
    {
        let divPart=document.createElement("div");
        divPart.className="container_part";
        let container=document.getElementsByClassName("container_choose_part")[0];
        container.appendChild(divPart);

        let GHz=document.createElement("p");
        let socket=document.createElement("p");
        let nume=document.createElement("p");
        let pret=document.createElement("p");
        let consum=document.createElement("p");
        let imgCPU=document.createElement("img");
        let selectBttn=document.createElement("a");
        selectBttn.innerText="selecteaza";
        selectBttn.className="button button_admin mijloc";
        GHz.innerText="GHz: "+CPU[i].GHz;
        socket.innerText="socket: "+CPU[i].socket;
        nume.innerText="nume: "+CPU[i].nume;
        pret.innerText="pret: "+CPU[i].pret;
        consum.innerText="consum: "+CPU[i].consum;
        imgCPU.src=CPU[i].img;
        imgCPU.className="build_img";
        divPart.id=CPU[i].id;

        divPart.appendChild(imgCPU);
        divPart.appendChild(GHz);
        divPart.appendChild(socket);
        divPart.appendChild(nume);
        divPart.appendChild(pret);
        divPart.appendChild(consum);
        divPart.appendChild(selectBttn);
        selectBttn.addEventListener("click",selectCPU);

    }
    CPUNr=Math.min(CPUNr+4,CPU.length);
    let back=document.getElementsByClassName("button_admin")[document.getElementsByClassName("button_admin").length-2];
    let next=document.getElementsByClassName("button_admin")[document.getElementsByClassName("button_admin").length-1];
    console.log(CPUNr);
    if (CPUNr!=0)
    {
       back.addEventListener("click",backCPU); 
       back.className="button button_admin";
    }
    if (CPUNr>=CPU.length)
    {
        next.className+=" grey";
       next.removeEventListener("click",nextCPU);
    }
}

async function selectCPU()
{
    closeBuildGUI();
    storage.removeItem("CPU");
    await fetch('http://localhost:3000/CPUs/'+this.parentNode.id)
    .then(function(response)
    {
      if (!response.ok)
        throw new Error ("A aparut o problema.Status code: "+response.status);
      return response.json()
    }
    )
    .catch (error=>{console.log("Eroare la fetch:",error.message)})
    .then(function(data)
    { 
        let CPU={ 
            GHz: data.GHz,
            socket: data.socket,
            nume: data.nume,
            pret: data.pret,
            consum: data.consum,
            img: data.img
        }
        localStorage.setItem('CPU', JSON.stringify(CPU));
    }
    )
    .catch (error=>{console.log("Eroare la fetch:",error.message)});
    clickBuild();
}

function loadAdmin()
{
    removedAdminBttn=false;
    paginaCurenta="Admin";
    document.body.innerText="";
    let titlu=document.createElement("p");
    let main=document.createElement("main");
    let nav=document.createElement("nav");
    let footer=document.createElement("footer");
    let add=document.createElement("a");
    let show=document.createElement("a");
    let container_btn=document.createElement("div");
    
    main.className="container";
    nav.className="navigare";
    footer.className="jos";
    titlu.className="titlu";
    add.className="button_admin button";
    show.className="button_admin button";
    container_btn.className="container_admin";

    container_btn.appendChild(add);
    container_btn.appendChild(show);
    
    main.appendChild(container_btn);
    main.appendChild(footer);
    footer.innerText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quas odit pariatur! Animi ipsum reprehenderit maxime mollitia esse natus modi repudiandae, fugit temporibus laboriosam.";
    add.innerText="Adauga componenta";
    show.innerText="Editeaza componenta";


    let home=document.createElement("a");
    let buildPC=document.createElement("a");
    let admin=document.createElement("a");
    let about=document.createElement("a");
    home.className="nav_button button";
    buildPC.className="nav_button button";
    admin.className="nav_button button selected";
    about.className="nav_button button";
    home.innerText="Home"
    buildPC.innerText="Construieste PC";
    admin.innerText="Panou admin";
    about.innerText="Despre";
    titlu.innerText="Construieste un PC";
    
    nav.appendChild(home);
    nav.appendChild(buildPC);
    nav.appendChild(admin);
    nav.appendChild(about);
    
    document.body.appendChild(titlu);
    document.body.appendChild(nav);
    document.body.appendChild(main);

    add.addEventListener("click",openAddGUI);
    show.addEventListener("click",openShowGUI);

    home.addEventListener("click",clickMain);
    admin.addEventListener("click",clickAdmin);
    about.addEventListener("click",clickAbout);
    buildPC.addEventListener("click",clickBuild);
}

function clickAdmin()
{
    clearListeners();
    loadAdmin();
}

function loadAbout()
{
    paginaCurenta="About";
    document.body.innerText="";
    let titlu=document.createElement("p");
    let main=document.createElement("main");
    let nav=document.createElement("nav");
    let section=document.createElement("section");
    let footer=document.createElement("footer");
    let abouttitle=document.createElement("h");
    let divaboutxt=document.createElement("div");
    let divabout=document.createElement("div");
    let contact=document.createElement("aside");
    
    main.className="container";
    nav.className="navigare";
    section.className="section_about";
    footer.className="jos";
    titlu.className="titlu";
    abouttitle.className="home_instr";
    divabout.className="div_about";
    contact.className="aside_about";
    
    divabout.appendChild(divaboutxt);
    divabout.appendChild(contact);

    divaboutxt.appendChild(abouttitle);
    divaboutxt.appendChild(section);

    main.appendChild(divabout);
    main.appendChild(footer);

    abouttitle.innerText="Despre site:"
    footer.innerText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quas odit pariatur! Animi ipsum reprehenderit maxime mollitia esse natus modi repudiandae, fugit temporibus laboriosam.";
    section.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore corporis voluptatibus labore repellat eaque ut, laborum vero numquam voluptatum, dolor vel. Placeat assumenda ab inventore? Nam asperiores aperiam sunt consequatur! Iusto voluptatem nemo quos, tempora iste accusamus sequi reprehenderit accusantium voluptate, eos laborum saepe sed eligendi nostrum pariatur distinctio voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore corporis voluptatibus labore repellat eaque ut, laborum vero numquam voluptatum, dolor vel. Placeat assumenda ab inventore? Nam asperiores aperiam sunt consequatur! Iusto voluptatem nemo quos, tempora iste accusamus sequi reprehenderit accusantium voluptate, eos laborum saepe sed eligendi nostrum pariatur distinctio voluptatibus.";
    
    let contactxt=document.createElement("p");
    contactxt.innerText="Contact";
    contactxt.className="contact_txt";

    let facebook=document.createElement("div");
    let instagram=document.createElement("div");
    let twitter=document.createElement("div");
    let youtube=document.createElement("div");

    contact.appendChild(contactxt);
    contact.appendChild(facebook);
    contact.appendChild(instagram);
    contact.appendChild(twitter);
    contact.appendChild(youtube);

    facebook.className="div_social";
    instagram.className="div_social";
    twitter.className="div_social";
    youtube.className="div_social";
    
    let instagram_img=document.createElement("i");
    let instagramtxt=document.createElement("a");
    instagram_img.className="fab fa-instagram";
    instagramtxt.innerText="Instagram"
    instagramtxt.href="https://www.instagram.com/";
    instagramtxt.target="_blank";
    instagram.appendChild(instagram_img);
    instagram.appendChild(instagramtxt);

    let twitter_img=document.createElement("i");
    let twittertxt=document.createElement("a");
    twitter_img.className="fab fa-twitter";
    twittertxt.innerText="Twitter"
    twittertxt.href="https://twitter.com/";
    twittertxt.target="_blank";
    twitter.appendChild(twitter_img);
    twitter.appendChild(twittertxt);

    let youtube_img=document.createElement("i");
    let youtubetxt=document.createElement("a");
    youtube_img.className="fab fa-youtube";
    youtubetxt.innerText="Youtube"
    youtubetxt.href="https://www.youtube.com/";
    youtubetxt.target="_blank";
    youtube.appendChild(youtube_img);
    youtube.appendChild(youtubetxt);

    let facebook_img=document.createElement("i");
    let facebooktxt=document.createElement("a");
    facebook_img.className="fab fa-facebook";
    facebooktxt.innerText="Facebook"
    facebooktxt.href="https://www.facebook.com";
    facebooktxt.target="_blank";
    facebook.appendChild(facebook_img);
    facebook.appendChild(facebooktxt);

    
    let home=document.createElement("a");
    let buildPC=document.createElement("a");
    let admin=document.createElement("a");
    let about=document.createElement("a");
    home.className="nav_button button";
    buildPC.className="nav_button button";
    admin.className="nav_button button";
    about.className="nav_button button selected";
    home.innerText="Home"
    buildPC.innerText="Construieste PC";
    admin.innerText="Panou admin";
    about.innerText="Despre";
    titlu.innerText="Construieste un PC";
    
    nav.appendChild(home);
    nav.appendChild(buildPC);
    nav.appendChild(admin);
    nav.appendChild(about);
    
    document.body.appendChild(titlu);
    document.body.appendChild(nav);
    document.body.appendChild(main);
    home.addEventListener("click",clickMain);
    admin.addEventListener("click",clickAdmin);
    about.addEventListener("click",clickAbout);
    buildPC.addEventListener("click",clickBuild);
}

function clickAbout()
{
    clearListeners();
    loadAbout();
}

function openShowGUI()
{
    openGUI=true;
    GUIType="show";
    let addGUI=document.createElement("div");
    let guiInfo=document.createElement("div");
    let txt=document.createElement("p");
    let divbutton=document.createElement("div");
    let closeContainer=document.createElement("div");
    let close=document.createElement("img");

    txt.innerText="Tip componenta";

    close.src="http://www.pngall.com/wp-content/uploads/5/Delete-Red-X-Button-PNG-Images.png";
    closeContainer.id="close_container";

    txt.className="add_gui_txt";
    addGUI.className="gui_background";
    guiInfo.className="choose_container";
    divbutton.className="container_choose_part";

    let gpu=document.createElement("a");
    let cpu=document.createElement("a");
    let motherboard=document.createElement("a");
    let PSU=document.createElement("a");
    let carcasa=document.createElement("a");
    let RAM=document.createElement("a");
    let storage=document.createElement("a");

    gpu.className="button_admin button";
    cpu.className="button_admin button";
    motherboard.className="button_admin button";
    PSU.className="button_admin button";
    carcasa.className="button_admin button";
    RAM.className="button_admin button";
    storage.className="button_admin button";
    close.className="close_button";

    gpu.innerText="GPU";
    cpu.innerText="CPU";
    motherboard.innerText="Motherboard";
    PSU.innerText="PSU";
    carcasa.innerText="Carcasa";
    RAM.innerText="RAM";
    storage.innerText="HDD";

    divbutton.appendChild(gpu);
    divbutton.appendChild(cpu);
    divbutton.appendChild(motherboard);
    divbutton.appendChild(PSU);
    divbutton.appendChild(carcasa);
    divbutton.appendChild(RAM);
    divbutton.appendChild(storage);
   
   guiInfo.appendChild(closeContainer); 
    addGUI.appendChild(guiInfo);
    guiInfo.appendChild(txt);
    guiInfo.appendChild(divbutton);

    closeContainer.appendChild(close);

    document.body.appendChild(addGUI);

    close.addEventListener("click",closeGUI);
    gpu.addEventListener("click",showGPU);
    cpu.addEventListener("click",showCPU);
    motherboard.addEventListener("click",showMotherboard);
    PSU.addEventListener("click",showPSU);
    carcasa.addEventListener("click",showCarcasa);
    RAM.addEventListener("click",showRAM);
    storage.addEventListener("click",showHDD);
}

function openAddGUI()
{
    openGUI=true;
    GUIType="add";
    let addGUI=document.createElement("div");
    let guiInfo=document.createElement("div");
    let txt=document.createElement("p");
    let divbutton=document.createElement("div");
    let closeContainer=document.createElement("div");
    let close=document.createElement("img");

    txt.innerText="Tip componenta";

    close.src="http://www.pngall.com/wp-content/uploads/5/Delete-Red-X-Button-PNG-Images.png";
    closeContainer.id="close_container";

    txt.className="add_gui_txt";
    addGUI.className="gui_background";
    guiInfo.className="choose_container";
    divbutton.className="container_choose_part";

    let gpu=document.createElement("a");
    let cpu=document.createElement("a");
    let motherboard=document.createElement("a");
    let PSU=document.createElement("a");
    let carcasa=document.createElement("a");
    let RAM=document.createElement("a");
    let storage=document.createElement("a");

    gpu.className="button_admin button";
    cpu.className="button_admin button";
    motherboard.className="button_admin button";
    PSU.className="button_admin button";
    carcasa.className="button_admin button";
    RAM.className="button_admin button";
    storage.className="button_admin button";
    close.className="close_button";

    gpu.innerText="GPU";
    cpu.innerText="CPU";
    motherboard.innerText="Motherboard";
    PSU.innerText="PSU";
    carcasa.innerText="Carcasa";
    RAM.innerText="RAM";
    storage.innerText="HDD";

    divbutton.appendChild(gpu);
    divbutton.appendChild(cpu);
    divbutton.appendChild(motherboard);
    divbutton.appendChild(PSU);
    divbutton.appendChild(carcasa);
    divbutton.appendChild(RAM);
    divbutton.appendChild(storage);
   
   guiInfo.appendChild(closeContainer); 
    addGUI.appendChild(guiInfo);
    guiInfo.appendChild(txt);
    guiInfo.appendChild(divbutton);

    closeContainer.appendChild(close);

    document.body.appendChild(addGUI);

    close.addEventListener("click",closeGUI);
    gpu.addEventListener("click",addGPU);
    cpu.addEventListener("click",addCPU);
    motherboard.addEventListener("click",addMotherboard);
    PSU.addEventListener("click",addPSU);
    carcasa.addEventListener("click",addCarcasa);
    RAM.addEventListener("click",addRAM);
    storage.addEventListener("click",addHDD);
}

function closeGUI()
{
    openGUI=false;
    document.getElementById("close_container").getElementsByTagName("img")[0].removeEventListener("click",closeGUI);
    if (document.getElementsByClassName("container_choose_part").length!=0)
    {
        console.log("sterg btn");
        let buttons=document.getElementsByClassName("container_choose_part")[0].getElementsByTagName("a");
        if (GUIType="add")
        {
        buttons[0].removeEventListener("click",addGPU);
        buttons[1].removeEventListener("click",addCPU);
        buttons[2].removeEventListener("click",addMotherboard);
        buttons[3].removeEventListener("click",addPSU);
        buttons[4].removeEventListener("click",addCarcasa);
        buttons[5].removeEventListener("click",addRAM);
        buttons[6].removeEventListener("click",addHDD);
        }
        else
        {
            buttons[0].removeEventListener("click",showGPU);
            buttons[1].removeEventListener("click",showCPU);
            buttons[2].removeEventListener("click",showMotherboard);
            buttons[3].removeEventListener("click",showPSU);
            buttons[4].removeEventListener("click",showCarcasa);
            buttons[5].removeEventListener("click",showRAM);
            buttons[6].removeEventListener("click",showHDD);
        }
    }
    if (document.getElementById("add_GPU"))
    {
        console.log("sterg add bttn gpu");
        document.getElementById("add_GPU").removeEventListener("click",addGPU);
        
    }
   else  if (document.getElementById("edit_GPU"))
    {
        console.log("sterg edit bttn gpu");
        document.getElementById("edit_GPU").removeEventListener("click",updateGPU);
    }
   else if (document.getElementById("add_CPU"))
   {
       console.log("sterg add bttn cpu");
       document.getElementById("add_CPU").removeEventListener("click",addCPU);
       
   }
   else  if (document.getElementById("edit_CPU"))
    {
        console.log("sterg edit bttn cpu");
        document.getElementById("edit_CPU").removeEventListener("click",updateCPU);
    }
    document.body.removeChild(document.body.lastChild);
}

function removeChooseBttns()
{
    let buttons=document.getElementsByClassName("container_choose_part")[0].getElementsByTagName("a");
    buttons[0].removeEventListener("click",addGPU);
    buttons[1].removeEventListener("click",addCPU);
    buttons[2].removeEventListener("click",addMotherboard);
    buttons[3].removeEventListener("click",addPSU);
    buttons[4].removeEventListener("click",addCarcasa);
    buttons[5].removeEventListener("click",addRAM);
    buttons[6].removeEventListener("click",addHDD);
    document.getElementsByClassName("choose_container")[0].removeChild(document.getElementsByClassName("choose_container")[0].lastChild);
}

function addGPU()
{
    removeChooseBttns();
    document.getElementsByClassName("add_gui_txt")[0].innerText="Adaugati GPU";
    let VRAM=document.createElement("input");
    let labelVRAM=document.createElement("label");
    let nume=document.createElement("input");
    let labelNume=document.createElement("label");
    let pret=document.createElement("input");
    let labelPret=document.createElement("label");
    let consum=document.createElement("input");
    let labelConsum=document.createElement("label");
    let imagine=document.createElement("input");
    let labelImagine=document.createElement("label");
    let containerInput=document.createElement("div");


    VRAM.type="text";
    VRAM.id="VRAM";
    VRAM.placeholder="VRAM";
    nume.type="text";
    nume.id="nume";
    nume.placeholder="denumire";
    pret.type="text";
    pret.id="pret";
    pret.placeholder="pret (RON)";
    consum.type="text";
    consum.id="consum";
    consum.placeholder="consum (W)";
    imagine.type="text";
    imagine.id="imagine";
    imagine.placeholder="link imagine";

    labelVRAM.for="VRAM";
    labelVRAM.innerText="VRAM";
    labelConsum.for="consum";
    labelConsum.innerText="Consum in W";
    labelNume.for="nume";
    labelNume.innerText="Nume";
    labelPret.for="pret";
    labelPret.innerText="Pret (RON)";
    labelImagine.for="imagine";
    labelImagine.innerHTML="link imagine";

    containerInput.className="input_fields";

    containerInput.appendChild(labelVRAM);
    labelVRAM.appendChild(VRAM);
    containerInput.appendChild(labelNume);
    labelNume.appendChild(nume);
    containerInput.appendChild(labelPret);
    labelPret.appendChild(pret);
    containerInput.appendChild(labelConsum);
    labelConsum.appendChild(consum);
    containerInput.appendChild(labelImagine);
    labelImagine.appendChild(imagine);

    let choose_container=document.getElementsByClassName("choose_container")[0];
    choose_container.appendChild(containerInput);

    let addButton=document.createElement("a");
    addButton.innerText="Adaugati GPU";
    addButton.className="button_admin add_button button";
    addButton.id="add_GPU";
    document.getElementsByClassName("choose_container")[0].appendChild(addButton);
    addButton.addEventListener("click",writeGPU);

}

function addCPU()
{
    removeChooseBttns();
    document.getElementsByClassName("add_gui_txt")[0].innerText="Adaugati CPU";
    let GHz=document.createElement("input");
    let labelGHz=document.createElement("label");
    let socket=document.createElement("input");
    let labelSocket=document.createElement("label");
    let nume=document.createElement("input");
    let labelNume=document.createElement("label");
    let pret=document.createElement("input");
    let labelPret=document.createElement("label");
    let consum=document.createElement("input");
    let labelConsum=document.createElement("label");
    let imagine=document.createElement("input");
    let labelImagine=document.createElement("label");
    let containerInput=document.createElement("div");


    GHz.type="text";
    GHz.id="GHz";
    GHz.placeholder="GHz";
    socket.type="text";
    socket.id="socket";
    socket.placeholder="Socket";
    nume.type="text";
    nume.id="nume";
    nume.placeholder="denumire";
    pret.type="text";
    pret.id="pret";
    pret.placeholder="pret (RON)";
    consum.type="text";
    consum.id="consum";
    consum.placeholder="consum (W)";
    imagine.type="text";
    imagine.id="imagine";
    imagine.placeholder="link imagine";

    labelGHz.for="GHz";
    labelGHz.innerText="GHz";
    labelSocket.for="socket";
    labelSocket.innerText="Socket";
    labelConsum.for="consum";
    labelConsum.innerText="Consum in W";
    labelNume.for="nume";
    labelNume.innerText="Nume";
    labelPret.for="pret";
    labelPret.innerText="Pret (RON)";
    labelImagine.for="imagine";
    labelImagine.innerHTML="link imagine";

    containerInput.className="input_fields";

    containerInput.appendChild(labelGHz);
    labelGHz.appendChild(GHz);
    containerInput.appendChild(labelSocket);
    labelSocket.appendChild(socket);
    containerInput.appendChild(labelNume);
    labelNume.appendChild(nume);
    containerInput.appendChild(labelPret);
    labelPret.appendChild(pret);
    containerInput.appendChild(labelConsum);
    labelConsum.appendChild(consum);
    containerInput.appendChild(labelImagine);
    labelImagine.appendChild(imagine);

    let choose_container=document.getElementsByClassName("choose_container")[0];
    choose_container.appendChild(containerInput);

    let addButton=document.createElement("a");
    addButton.innerText="Adaugati CPU";
    addButton.className="button_admin add_button button";
    addButton.id="add_CPU";
    document.getElementsByClassName("choose_container")[0].appendChild(addButton);
    addButton.addEventListener("click",writeCPU);
}

function addMotherboard()
{
    removeChooseBttns();
}

function addPSU()
{
    removeChooseBttns();
}

function addCarcasa()
{
    removeChooseBttns();
}

function addRAM()
{
    removeChooseBttns();
}

function addHDD()
{
    removeChooseBttns();
}

async function writeGPU()
{
    document.getElementById("add_GPU").removeEventListener("click",writeGPU);
    const container=document.getElementsByClassName("choose_container")[0];
    
    let InputVRAM=document.getElementById("VRAM");
    let InputNume=document.getElementById("nume");
    let InputPret=document.getElementById("pret");
    let InputConsum=document.getElementById("consum");
    let InputImagine=document.getElementById("imagine");

    container.children[1].innerText="Loading...";

    container.removeChild(container.lastChild);
    container.removeChild(container.lastChild);

    if (InputVRAM.value!="" && InputNume.value!="" && InputPret.value!="" && InputConsum.value!="" && InputImagine!="")
    {
        let GPU = {
            VRAM: InputVRAM.value,
            nume: InputNume.value,
            pret: InputPret.value,
            consum: InputConsum.value,
            img: InputImagine.value
          };
          let response = await fetch('http://localhost:3000/GPUs', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(GPU)
          });
          let result = await response.json();
          console.log(result);
    container.children[1].innerText="GPU inserat";
    }
    else
    {
    container.children[1].innerText="Valori invalide";
    }

    
}

async function writeCPU()
{
    document.getElementById("add_CPU").removeEventListener("click",writeCPU);
    const container=document.getElementsByClassName("choose_container")[0];
    
    let InputGHz=document.getElementById("GHz");
    let InputSocket=document.getElementById("socket");
    let InputNume=document.getElementById("nume");
    let InputPret=document.getElementById("pret");
    let InputConsum=document.getElementById("consum");
    let InputImagine=document.getElementById("imagine");

    container.children[1].innerText="Loading...";

    container.removeChild(container.lastChild);
    container.removeChild(container.lastChild);

    if (InputGHz.value!="" && InputSocket.value!="" && InputNume.value!="" && InputPret.value!="" && InputConsum.value!="" && InputImagine!="")
    {
        let CPU = {
            GHz: InputGHz.value,
            socket: InputSocket.value,
            nume: InputNume.value,
            pret: InputPret.value,
            consum: InputConsum.value,
            img: InputImagine.value
          };
          let response = await fetch('http://localhost:3000/CPUs', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(CPU)
          });
          let result = await response.json();
          console.log(result);
    container.children[1].innerText="CPU inserat";
    }
    else
    {
    container.children[1].innerText="Valori invalide";
    }

    
}

async function showGPU()
{
    if (openGUI==true)
        closeGUI();
    console.log("arat gpu");
    const buttons=document.getElementsByClassName("container_admin")[0].getElementsByTagName("a");
       buttons[0].removeEventListener("click",openAddGUI);
       buttons[1].removeEventListener("click",openShowGUI);

       const container=document.getElementsByClassName("container")[0]
       container.removeChild(container.firstChild);
       const loading=document.createElement("p");
        loading.innerText="Loading...";
        loading.className="loading";
        container.insertBefore(loading,container.firstChild);

       removedAdminBttn=true;
       fetch('http://localhost:3000/GPUs')
       .then(function(response)
       {
         if (!response.ok)
           throw new Error ("A aparut o problema.Status code: "+response.status);
         return response.json()
       }
       )
       .catch (error=>{console.log("Eroare la fetch:",error.message)})
       .then(function(data)
       { 
        let containerEdit=document.createElement("div");
        document.getElementsByClassName("container")[0].insertBefore(containerEdit,document.getElementsByClassName("container")[0].lastChild);
        containerEdit.className="edit_container";
         for (let x of data)
         {
             let containerPart=document.createElement("div");
             containerPart.className="container_part";
             let VRAM=document.createElement("p");
             let nume=document.createElement("p");
             let pret=document.createElement("p");
             let consum=document.createElement("p");
             let imgGPU=document.createElement("img");
             let divEdit=document.createElement("div");

             divEdit.className="div_edit";

             let editBttn=document.createElement("a");
             let deleteBttn=document.createElement("a");
             editBttn.innerText="Edit";
             deleteBttn.innerText="Delete";
             editBttn.className="button button_admin";
             deleteBttn.className="button button_admin delete";
             editBttn.addEventListener("click",editGPU);
             deleteBttn.addEventListener("click",deleteGPU);

             divEdit.appendChild(editBttn);
             divEdit.appendChild(deleteBttn);

             imgGPU.src=x.img;
             VRAM.innerText="VRAM: "+x.VRAM;
             nume.innerText="Nume: "+x.nume;
             pret.innerText="Pret: "+x.pret+ " lei";
             consum.innerText="Consum: "+x.consum + " W";
            
             containerPart.id=x.id;
             containerPart.appendChild(imgGPU);
             containerPart.appendChild(nume);
             containerPart.appendChild(pret);
             containerPart.appendChild(VRAM);
             containerPart.appendChild(consum);
             containerPart.appendChild(divEdit);
             containerEdit.appendChild(containerPart);
         }
         container.removeChild(container.firstChild);
         let inapoi=document.createElement("a");
         let containerInapoi=document.createElement("div");
         containerInapoi.appendChild(inapoi);
         containerInapoi.className="container_inapoi";
         container.insertBefore(containerInapoi,container.firstChild);
         inapoi.className="button button_admin";
         inapoi.innerText="Inapoi";
         inapoi.addEventListener("click",clickAdmin);
       }
       )
       .catch (error=>{console.log("Eroare la fetch:",error.message)});
}

async function showCPU()
{
    if (openGUI==true)
        closeGUI();
    console.log("arat cpu");
    const buttons=document.getElementsByClassName("container_admin")[0].getElementsByTagName("a");
       buttons[0].removeEventListener("click",openAddGUI);
       buttons[1].removeEventListener("click",openShowGUI);

       const container=document.getElementsByClassName("container")[0]
       container.removeChild(container.firstChild);
       const loading=document.createElement("p");
        loading.innerText="Loading...";
        loading.className="loading";
        container.insertBefore(loading,container.firstChild);

       removedAdminBttn=true;
       fetch('http://localhost:3000/CPUs')
       .then(function(response)
       {
         if (!response.ok)
           throw new Error ("A aparut o problema.Status code: "+response.status);
         return response.json()
       }
       )
       .catch (error=>{console.log("Eroare la fetch:",error.message)})
       .then(function(data)
       { 
        let containerEdit=document.createElement("div");
        document.getElementsByClassName("container")[0].insertBefore(containerEdit,document.getElementsByClassName("container")[0].lastChild);
        containerEdit.className="edit_container";
         for (let x of data)
         {
             let containerPart=document.createElement("div");
             containerPart.className="container_part";
             let GHz=document.createElement("p");
             let socket=document.createElement("p");
             let nume=document.createElement("p");
             let pret=document.createElement("p");
             let consum=document.createElement("p");
             let imgCPU=document.createElement("img");
             let divEdit=document.createElement("div");

             divEdit.className="div_edit";

             let editBttn=document.createElement("a");
             let deleteBttn=document.createElement("a");
             editBttn.innerText="Edit";
             deleteBttn.innerText="Delete";
             editBttn.className="button button_admin";
             deleteBttn.className="button button_admin delete";
             editBttn.addEventListener("click",editCPU);
             deleteBttn.addEventListener("click",deleteCPU);

             divEdit.appendChild(editBttn);
             divEdit.appendChild(deleteBttn);

             imgCPU.src=x.img;
             GHz.innerText="GHz: "+x.GHz;
             socket.innerText="Socket: "+x.socket;
             nume.innerText="Nume: "+x.nume;
             pret.innerText="Pret: "+x.pret+ " lei";
             consum.innerText="Consum: "+x.consum + " W";
            
             containerPart.id=x.id;
             containerPart.appendChild(imgCPU);
             containerPart.appendChild(nume);
             containerPart.appendChild(pret);
             containerPart.appendChild(GHz);
             containerPart.appendChild(socket);
             containerPart.appendChild(consum);
             containerPart.appendChild(divEdit);
             containerEdit.appendChild(containerPart);
         }
         container.removeChild(container.firstChild);
         let inapoi=document.createElement("a");
         let containerInapoi=document.createElement("div");
         containerInapoi.appendChild(inapoi);
         containerInapoi.className="container_inapoi";
         container.insertBefore(containerInapoi,container.firstChild);
         inapoi.className="button button_admin";
         inapoi.innerText="Inapoi";
         inapoi.addEventListener("click",clickAdmin);
       }
       )
       .catch (error=>{console.log("Eroare la fetch:",error.message)});
    
}

function showMotherboard()
{
    closeGUI();
    
}

function showPSU()
{
    closeGUI();
    
}

function showCarcasa()
{
    closeGUI();
    
}

function showRAM()
{
    closeGUI();
    
}

function showHDD()
{
    closeGUI();
    
}

function deleteGPU()
{
 let gpu=document.getElementById(this.parentNode.parentNode.id).lastChild;
 gpu.firstChild.removeEventListener("click",editGPU);
 gpu.lastChild.removeEventListener("click",deleteGPU);
 gpu.firstChild.innerText="Nu";
 gpu.lastChild.innerText="Da";
 gpu.firstChild.addEventListener("click",restoreGPU);
 gpu.lastChild.addEventListener("click",removeGPU);

awaitingConfirmation=true;
chosenid=this.parentNode.parentNode.id;

 let alege=document.createElement("p");
 alege.innerText="Confirmati?";
 gpu.parentNode.insertBefore(alege,gpu);
 alege.className="choose";
 gpu.className="temp";
}

async function editGPU()
{
    GPUId=this.parentNode.parentNode.id;
    openAddGUI();
    addGPU();

    let VRAM=document.getElementById("VRAM");
    let nume=document.getElementById("nume");
    let pret=document.getElementById("pret");
    let consum=document.getElementById("consum");
    let imagine=document.getElementById("imagine");

    document.getElementsByClassName("add_gui_txt")[0].innerText="Editare gpu";

    let button=document.getElementById("add_GPU");
    button.removeEventListener("click",writeGPU);
    button.addEventListener("click",updateGPU);
    button.innerText="Editati GPU";
    button.id="edit_GPU";

    fetch('http://localhost:3000/GPUs/'+GPUId)
    .then(function(response)
    {
      if (!response.ok)
        throw new Error ("A aparut o problema.Status code: "+response.status);
      return response.json()
    }
    )
    .catch (error=>{console.log("Eroare la fetch:",error.message)})
    .then(function(data)
    { 
        VRAM.value=data.VRAM;
        pret.value=data.pret;
        consum.value=data.consum;
        imagine.value=data.img;
        nume.value=data.nume;
        console.log("fetched GPUs");
    }
    )
    .catch (error=>{console.log("Eroare la fetch:",error.message)});

    
}

function restoreGPU()
{
    awaitingConfirmation=false;
    chosenid="";
    let gpu=document.getElementById(this.parentNode.parentNode.id).lastChild;
    gpu.firstChild.removeEventListener("click",restoreGPU);
    gpu.lastChild.removeEventListener("click",removeGPU);
    gpu.firstChild.innerText="Edit";
    gpu.lastChild.innerText="Delete";
    gpu.firstChild.addEventListener("click",editGPU);
    gpu.lastChild.addEventListener("click",deleteGPU);
    gpu.parentNode.removeChild(document.getElementsByClassName("choose")[0]);
    gpu.className="div_edit";
}

async function removeGPU()
{
    awaitingConfirmation=false;
    chosenid="";
    let deletedGPU=this.parentNode.parentNode.id;
    console.log(deletedGPU);
    let gpu=document.getElementById(this.parentNode.parentNode.id).lastChild;
    gpu.firstChild.removeEventListener("click",restoreGPU);
    gpu.lastChild.removeEventListener("click",removeGPU);
    gpu=document.getElementsByClassName("div_edit");
    for (let x of gpu)
    {
        if (x.parentNode.id!=deletedGPU)
            x.firstChild.removeEventListener("click",editGPU);
            x.lastChild.removeEventListener("click",deleteGPU);
    }
    let response=await fetch ('http://localhost:3000/GPUs/'+deletedGPU,
  {
    method: 'DELETE',
    headers:
    {
      'Content-Type': 'application/json;charset=utf-8'
    }
  }
  );
  let result=await response.status;
  console.log(result);
    clickAdmin();
    showGPU();
}

async function updateGPU()
{
    console.log(GPUId);

    document.getElementById("edit_GPU").removeEventListener("click",updateGPU);

    const container=document.getElementsByClassName("choose_container")[0];
    container.children[1].innerText="Loading...";

    let InputVRAM=document.getElementById("VRAM");
    let Inputnume=document.getElementById("nume");
    let Inputpret=document.getElementById("pret");
    let Inputconsum=document.getElementById("consum");
    let Inputimg=document.getElementById("imagine");

    container.removeChild(container.lastChild);
    container.removeChild(container.lastChild);

    const GPU=
    {
        VRAM:InputVRAM.value,
        nume:Inputnume.value,
        pret:Inputpret.value,
        consum:Inputconsum.value,
        img:Inputimg.value
    }
    let response = await fetch('http://localhost:3000/GPUs/'+GPUId, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(GPU)
});

let result = await response.json();
console.log(result);

openGUI=false;
    
clickAdmin();
showGPU();
}

function deleteCPU()
{
    let cpu=document.getElementById(this.parentNode.parentNode.id).lastChild;
    cpu.firstChild.removeEventListener("click",editCPU);
    cpu.lastChild.removeEventListener("click",deleteCPU);
    cpu.firstChild.innerText="Nu";
    cpu.lastChild.innerText="Da";
    cpu.firstChild.addEventListener("click",restoreCPU);
    cpu.lastChild.addEventListener("click",removeCPU);
   
   awaitingConfirmation=true;
   chosenid=this.parentNode.parentNode.id;
   
    let alege=document.createElement("p");
    alege.innerText="Confirmati?";
    cpu.parentNode.insertBefore(alege,cpu);
    alege.className="choose";
    cpu.className="temp";
}

async function editCPU()
{
    CPUId=this.parentNode.parentNode.id;
    openAddGUI();
    addCPU();

    let GHz=document.getElementById("GHz");
    let socket=document.getElementById("socket");
    let nume=document.getElementById("nume");
    let pret=document.getElementById("pret");
    let consum=document.getElementById("consum");
    let imagine=document.getElementById("imagine");

    document.getElementsByClassName("add_gui_txt")[0].innerText="Editare cpu";

    let button=document.getElementById("add_CPU");
    button.removeEventListener("click",writeCPU);
    button.addEventListener("click",updateCPU);
    button.innerText="Editati CPU";
    button.id="edit_CPU";

    fetch('http://localhost:3000/CPUs/'+CPUId)
    .then(function(response)
    {
      if (!response.ok)
        throw new Error ("A aparut o problema.Status code: "+response.status);
      return response.json()
    }
    )
    .catch (error=>{console.log("Eroare la fetch:",error.message)})
    .then(function(data)
    { 
        GHz.value=data.GHz;
        socket.value=data.socket;
        pret.value=data.pret;
        consum.value=data.consum;
        imagine.value=data.img;
        nume.value=data.nume;
        console.log("fetched CPUs");
    }
    )
    .catch (error=>{console.log("Eroare la fetch:",error.message)});

    
}

function restoreCPU()
{
    awaitingConfirmation=false;
    chosenid="";
    let cpu=document.getElementById(this.parentNode.parentNode.id).lastChild;
    cpu.firstChild.removeEventListener("click",restoreCPU);
    cpu.lastChild.removeEventListener("click",removeCPU);
    cpu.firstChild.innerText="Edit";
    cpu.lastChild.innerText="Delete";
    cpu.firstChild.addEventListener("click",editCPU);
    cpu.lastChild.addEventListener("click",deleteCPU);
    cpu.parentNode.removeChild(document.getElementsByClassName("choose")[0]);
    cpu.className="div_edit";
}

async function removeCPU()
{
    awaitingConfirmation=false;
    chosenid="";
    let deletedCPU=this.parentNode.parentNode.id;
    console.log(deletedCPU);
    let cpu=document.getElementById(this.parentNode.parentNode.id).lastChild;
    cpu.firstChild.removeEventListener("click",restoreCPU);
    cpu.lastChild.removeEventListener("click",removeCPU);
    cpu=document.getElementsByClassName("div_edit");
    for (let x of cpu)
    {
        if (x.parentNode.id!=deletedCPU)
            x.firstChild.removeEventListener("click",editCPU);
            x.lastChild.removeEventListener("click",deleteCPU);
    }
    let response=await fetch ('http://localhost:3000/CPUs/'+deletedCPU,
  {
    method: 'DELETE',
    headers:
    {
      'Content-Type': 'application/json;charset=utf-8'
    }
  }
  );
  let result=await response.status;
  console.log(result);
    clickAdmin();
    showCPU();
}

async function updateCPU()
{
    console.log(CPUId);

    document.getElementById("edit_CPU").removeEventListener("click",updateCPU);

    const container=document.getElementsByClassName("choose_container")[0];
    container.children[1].innerText="Loading...";

    let InputGHz=document.getElementById("GHz");
    let InputSocket=document.getElementById("socket");
    let Inputnume=document.getElementById("nume");
    let Inputpret=document.getElementById("pret");
    let Inputconsum=document.getElementById("consum");
    let Inputimg=document.getElementById("imagine");

    container.removeChild(container.lastChild);
    container.removeChild(container.lastChild);

    const CPU=
    {
        GHz:InputGHz.value,
        socket:InputSocket.value,
        nume:Inputnume.value,
        pret:Inputpret.value,
        consum:Inputconsum.value,
        img:Inputimg.value
    }
    let response = await fetch('http://localhost:3000/CPUs/'+CPUId, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(CPU)
});

let result = await response.json();
console.log(result);

openGUI=false;
    
clickAdmin();
showCPU();
}

loadMainPage();