$(document).ready(function () {


    function expand_collapse() {
        if ($("#accordionFromWrap .collapse").hasClass("show")) {
            $("#accordionFromWrap .collapse-icon.left a").attr("aria-expanded", "false");
            $("#accordionFromWrap .collapse").removeClass('show');
            $(".toggle-accordion").css({
                transform: 'rotate(0deg)',
                'transition': 'all 0.5s'
            });
            // $("#edit_form").removeClass("btn-success").addClass("btn-primary").css({
            //     transform: 'rotate(360deg)',
            //     'transition': 'all 0.5s'
            // });
            // $("#edit_form i").removeClass("ft-check").addClass("ft-edit-2").css({
            //     'transition': 'linear 0.5s'
            // });

        } else {
            $("#accordionFromWrap .collapse-icon.left a").attr("aria-expanded", "true");
            $("#accordionFromWrap .collapse").addClass('show');
            $(".toggle-accordion").css({
                transform: 'rotate(180deg)',
                'transition': 'all 0.5s'
            });

        }
    }

    $(".toggle-accordion").on("click", function () {
        expand_collapse();
    });

    // set date for planned and actual date
    $('.plannedDateInput').attr("value", "2021-11-28");
    $('.actualDateInput').attr("value", "2021-11-28");
    $('#actual_date_sourcing').attr("value", "2021-12-15");
    $('#actual_date_loi').attr("value", "2021-10-09");

    setTimeout(function () {
        $("#accordionFromWrap .fixed_fields input[type='text']").prop("disabled", true);
        $(".card-header-inputs-div .fixed_fields input[type='text']").prop("disabled", true);
        $("input.projectInfo").prop("disabled",true);

    }, 500);

    $("#edit_form").click(function () {
        // expand_collapse();

        if (!$("#accordionFromWrap .collapse").hasClass("show")) {
            $("#accordionFromWrap .collapse-icon.left a").attr("aria-expanded", "true");
            $("#accordionFromWrap .collapse").addClass('show');
            $(".toggle-accordion").css({
                transform: 'rotate(180deg)',
                'transition': 'all 0.5s'
            });
        }
        
        $("#accordionFromWrap .fixed_fields input[type='text']").prop({
            "type": "date",
            "disabled": false
        });
        $(".card-header-inputs-div .fixed_fields input[type='text']").prop("disabled", false);
        $(".card-header-inputs-div .fixed_fields select").prop("disabled", false);
        $(".projectInfo").prop("disabled",false);
        
        $(this).hide();
        $("#submit_form").css("display","flex");
        $(".edit_form_btn").css("display","flex");

    });

    $("#cancel_edit_form").click(function(){
        $("#accordionFromWrap .fixed_fields input[type='date']").prop({
            "type": "text",
            "disabled": true
        });
        $(".card-header-inputs-div .fixed_fields input[type='text']").prop("disabled", true);
        $(".card-header-inputs-div .fixed_fields select").prop("disabled", true);
        $(".projectInfo").prop("disabled",true);

        $("#submit_form").css("display","none");
        $(".edit_form_btn").css("display","none");
        // $("#edit_form i").removeClass("ft-edit-2").addClass("ft-edit-2").css({
        //     'transition': 'linear 0.5s',
        //     'display':'block'
        // });
        $("#edit_form").show();
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('.floating-head').addClass('position-fixed-top');
        } else {
            $('.floating-head').removeClass('position-fixed-top');
        }
    });


    $("#submit_form").on('click', function () {
        toastr.success('Your information has been submitted successfully.');
        setTimeout(function(){
            location.reload(true)
        },1500)
    });
    $("#save_draft_form").on('click', function () {
        toastr.success('Your information has been saved successfully.');
    });

});