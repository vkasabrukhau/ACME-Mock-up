function setFirstChild(){
    if($('#tool_pref1').attr('checked')){
        $('#startprojectby').css("display", "block");
        $('#openprojectby').css("display", "none");
    } else if($('#tool_pref2').attr('checked')){
        $('#startprojectby').css("display", "none");
        $('#openprojectby').css("display", "block");
    }

    if($('#tool_pref1').attr('checked')){
        if($('#custom1').attr('checked')){
            $('#main_arrangement').insertBefore($('#customerel'), $('#main_arrangement:first-child'));
        }else if($('#custom2').attr('checked')){
            $('#main_arrangement').insertBefore($('#job_numel'), $('#main_arrangement:first-child'));
        }else if($('#custom3').attr('checked')){
            $('#main_arrangement').insertBefore($('#part_numel'), $('#main_arrangement:first-child'));
        }   
    } else if($('#tool_pref2').attr('checked')){
        if($('#proj1').attr('checked')){
            $('#main_arrangement').insertBefore($('#boxel'), $('#main_arrangement:first-child'));
        }else if($('#proj2').attr("checked")){
            $('#main_arrangement').insertBefore($('#customerel'), $('#main_arrangement:first-child'));
        }else if($('#proj3').attr("checked")){
            $('#main_arrangement').insertBefore($('#job_numel'), $('#main_arrangement:first-child'));
        }else if($('#proj4').attr("checked")){
            $('#main_arrangement').insertBefore($('#part_numel'), $('#main_arrangement:first-child'));
        }
    }
}

$(window).on('change', function(){
    setFirstChild();
})