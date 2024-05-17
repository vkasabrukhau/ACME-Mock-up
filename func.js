function setFirstChild(){
    //Hardcore element retrieval
    const boxel = document.querySelector("#boxel");
    const customel = document.querySelector("#customerel");
    const custom_numel = document.querySelector("#custom_numel");
    const job_numel = document.querySelector("#job_numel");
    const part_numel = document.querySelector("#part_numel");
    const machineel = document.querySelector("#machineel");
    const materialsizeel = document.querySelector("#materialsizeel");
    const toolmakerel = document.querySelector("#toolmakerel");
    const descriptionel = document.querySelector("#descriptionel");
    const openprojectby = document.querySelector("#openprojectby");
    const startprojectby = document.querySelector("#startprojectby");
    const parentelement = document.querySelector("#main_arrangement");
    const elements = [boxel, customel, custom_numel, job_numel, part_numel, machineel, materialsizeel, toolmakerel, descriptionel]

    //Decision retrieval
    const toolpref = document.querySelector("#tool_pref1");
    const toolpref2 = document.querySelector("#tool_pref2");

    const custom1 = document.querySelector("#custom1");
    const custom2 = document.querySelector("#custom2");
    const custom3 = document.querySelector("#custom3");

    const tool1 = document.querySelector("#proj1");
    const tool2 = document.querySelector("#proj2");
    const tool3 = document.querySelector("#proj3");
    const tool4 = document.querySelector("#proj4");

    const decisions = [custom1, custom2, custom3, tool1, tool2, tool3, tool4]

    if(toolpref.checked){
        startprojectby.style.display = "block";
        openprojectby.style.display = "none";
    } else if(toolpref2.checked){
        openprojectby.style.display  = "block";
        startprojectby.style.display = "none";
    }

    if(toolpref.checked){
        if(custom1.checked){
            console.log("custom 1 got checked");
            parentelement.insertBefore(customel, parentelement.firstChild);
        }else if(custom2.checked){
            parentelement.insertBefore(job_numel, parentelement.firstChild);
        }else if(custom3.checked){
            parentelement.insertBefore(part_numel, parentelement.firstChild);
        }   
    } else if(toolpref2.checked){
        if(tool1.checked){
            parentelement.insertBefore(boxel, parentelement.firstChild);
        }else if(tool2.checked){
            parentelement.insertBefore(customel, parentelement.firstChild);
        }else if(tool3.checked){
            parentelement.insertBefore(job_numel, parentelement.firstChild);
        }else if(tool4.checked){
            parentelement.insertBefore(part_numel, parentelement.firstChild);
        }
    }
}

window.onchange = setFirstChild;