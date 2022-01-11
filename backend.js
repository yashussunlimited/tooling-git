
//Tooling Master API Functions - 
//1. Get All Tooling Master List
function getToolingFormData() {

    console.log("Fetching All Tooling Master List!");
    $("#tooling_list_view").hide();
    showLoader();
    $('#tooling_list_view').DataTable().clear().destroy();
  
    $.ajax({
        url: "/server/Tooling/master",
        type: "get",
        success: function (data) {
            console.log(data);

            var table = ""; var cnt = 1;
            for (tooling of data.toolingData) {

                table += "<tr>";
                table += "<td>" + cnt + "</td>";
                table += "<td> <a href='audit_log.html' class='mr-1 d-none'><i class='ft-clock table_action_icon' data-toggle='tooltip' title='Audit Log'></i></a>";
                table += "<a href='#' onclick='editToolingFormRow(" + tooling.ROWID + ")'><i class='ft-edit-2 table_action_icon' data-toggle='tooltip' title='Edit'></i></a></td>";
                table += "<td>" + tooling.projectId + "</a></td>";
                table += "<td>" + tooling.taskId + "</td>";
                table += "<td><a href='#' onclick='editToolingFormRow(" + tooling.ROWID + ")'>" + tooling.partName + "</a></td>";
                table += "<td>" + tooling.partNumber + "</td>";
                table += "<td>" + tooling.partSupplier + "</td>";
                table += "<td>" + tooling.partMakeBuy + "</td>";
                table += "<td>" + tooling.partType + "</td>";
                table += "<td>" + tooling.partCavities + "</td>";
                
                table += "<td>" + "<pre>Planned:"+ ((tooling.SourcingSupplier_1_PlannedDate == null)?"":tooling.SourcingSupplier_1_PlannedDate)+" </pre>"
                                +"<pre>Actual:" + ((tooling.SourcingSupplier_1_ActualDate == null)?"":tooling.SourcingSupplier_1_ActualDate)+ "</pre></td>";
               // table += "<td>" + (tooling.SourcingSupplier_1_PlannedDate != null)?(calDayOfDifference(tooling.SourcingSupplier_1_PlannedDate,((tooling.SourcingSupplier_1_ActualDate == null)?todayDate:tooling.SourcingSupplier_1_ActualDate))):"- </td>";
                table += "<td>"+getDayDiffForGridView(tooling.SourcingSupplier_1_PlannedDate , tooling.SourcingSupplier_1_ActualDate)+"</td>";
                table += "<td>"+getStatusForGridView(tooling.SourcingSupplier_1_PlannedDate , tooling.SourcingSupplier_1_ActualDate)+ "</td>";
                table += "<td>" + "<pre>Planned:"+ ((tooling.SourcingSupplier_2_PlannedDate == null)?"":tooling.SourcingSupplier_2_PlannedDate)+" </pre>"
                +"<pre>Actual:" + ((tooling.SourcingSupplier_2_ActualDate == null)?"":tooling.SourcingSupplier_2_ActualDate)+ "</pre></td>";
                table += "<td>"+getDayDiffForGridView(tooling.SourcingSupplier_2_PlannedDate , tooling.SourcingSupplier_2_ActualDate)+"</td>";
                table += "<td>"+getStatusForGridView(tooling.SourcingSupplier_2_PlannedDate , tooling.SourcingSupplier_2_ActualDate)+ "</td>";
                table += "<td>" + "<pre>Planned:"+ ((tooling.SourcingSupplier_3_PlannedDate == null)?"":tooling.SourcingSupplier_3_PlannedDate)+" </pre>"
                +"<pre>Actual:" + ((tooling.SourcingSupplier_3_ActualDate == null)?"":tooling.SourcingSupplier_3_ActualDate)+ "</pre></td>";
                table += "<td>"+getDayDiffForGridView(tooling.SourcingSupplier_3_PlannedDate , tooling.SourcingSupplier_3_ActualDate)+"</td>";
                table += "<td>"+getStatusForGridView(tooling.SourcingSupplier_3_PlannedDate , tooling.SourcingSupplier_3_ActualDate)+ "</td>";
                table += "<td>" + "<pre>Planned:"+ ((tooling.SourcingSupplier_4_PlannedDate == null)?"":tooling.SourcingSupplier_4_PlannedDate)+" </pre>"
                +"<pre>Actual:" + ((tooling.SourcingSupplier_4_ActualDate == null)?"":tooling.SourcingSupplier_4_ActualDate)+ "</pre></td>";
                table += "<td>"+getDayDiffForGridView(tooling.SourcingSupplier_4_PlannedDate , tooling.SourcingSupplier_4_ActualDate)+"</td>";
                table += "<td>"+getStatusForGridView(tooling.SourcingSupplier_4_PlannedDate , tooling.SourcingSupplier_4_ActualDate)+ "</td>";
                table += "<td>" + "<pre>Planned:"+ ((tooling.SourcingSupplier_5_PlannedDate == null)?"":tooling.SourcingSupplier_5_PlannedDate)+" </pre>"
                +"<pre>Actual:" + ((tooling.SourcingSupplier_5_ActualDate == null)?"":tooling.SourcingSupplier_5_ActualDate)+ "</pre></td>";
                table += "<td>"+getDayDiffForGridView(tooling.SourcingSupplier_5_PlannedDate , tooling.SourcingSupplier_5_ActualDate)+"</td>";
                table += "<td>"+getStatusForGridView(tooling.SourcingSupplier_5_PlannedDate , tooling.SourcingSupplier_5_ActualDate)+ "</td>";
                
                table += "<td>" + "<pre>Planned:"+ ((tooling.ToolingDesign_1_PlannedDate == null)?"":tooling.ToolingDesign_1_PlannedDate)+" </pre>"
                +"<pre>Actual:" + ((tooling.ToolingDesign_1_ActualDate == null)?"":tooling.ToolingDesign_1_ActualDate)+ "</pre></td>";
                table += "<td>"+getDayDiffForGridView(tooling.ToolingDesign_1_PlannedDate , tooling.ToolingDesign_1_ActualDate)+"</td>";
                table += "<td>"+getStatusForGridView(tooling.ToolingDesign_1_PlannedDate , tooling.ToolingDesign_1_ActualDate)+ "</td>";
                table += "<td>" + "<pre>Planned:"+ ((tooling.ToolingDesign_2_PlannedDate == null)?"":tooling.ToolingDesign_2_PlannedDate)+" </pre>"
                +"<pre>Actual:" + ((tooling.ToolingDesign_2_ActualDate == null)?"":tooling.ToolingDesign_2_ActualDate)+ "</pre></td>";
                table += "<td>"+getDayDiffForGridView(tooling.ToolingDesign_2_PlannedDate , tooling.ToolingDesign_2_ActualDate)+"</td>";
                table += "<td>"+getStatusForGridView(tooling.ToolingDesign_2_PlannedDate , tooling.ToolingDesign_2_ActualDate)+ "</td>";
                table += "<td>" + "<pre>Planned:"+ ((tooling.ToolingDesign_3_PlannedDate == null)?"":tooling.ToolingDesign_3_PlannedDate)+" </pre>"
                +"<pre>Actual:" + ((tooling.ToolingDesign_3_ActualDate == null)?"":tooling.ToolingDesign_3_ActualDate)+ "</pre></td>";
                table += "<td>"+getDayDiffForGridView(tooling.ToolingDesign_3_PlannedDate , tooling.ToolingDesign_3_ActualDate)+"</td>";
                table += "<td>"+getStatusForGridView(tooling.ToolingDesign_3_PlannedDate , tooling.ToolingDesign_3_ActualDate)+ "</td>";
                table += "<td>" + "<pre>Planned:"+ ((tooling.ToolingDesign_4_PlannedDate == null)?"":tooling.ToolingDesign_4_PlannedDate)+" </pre>"
                +"<pre>Actual:" + ((tooling.ToolingDesign_4_ActualDate == null)?"":tooling.ToolingDesign_4_ActualDate)+ "</pre></td>";
                table += "<td>"+getDayDiffForGridView(tooling.ToolingDesign_4_PlannedDate , tooling.ToolingDesign_4_ActualDate)+"</td>";
                table += "<td>"+getStatusForGridView(tooling.ToolingDesign_4_PlannedDate , tooling.ToolingDesign_4_ActualDate)+ "</td>";
                table += "<td>" + "<pre>Planned:"+ ((tooling.ToolingDesign_5_PlannedDate == null)?"":tooling.ToolingDesign_5_PlannedDate)+" </pre>"
                +"<pre>Actual:" + ((tooling.ToolingDesign_5_ActualDate == null)?"":tooling.ToolingDesign_5_ActualDate)+ "</pre></td>";
                table += "<td>"+getDayDiffForGridView(tooling.ToolingDesign_5_PlannedDate , tooling.ToolingDesign_5_ActualDate)+"</td>";
                table += "<td>"+getStatusForGridView(tooling.ToolingDesign_5_PlannedDate , tooling.ToolingDesign_5_ActualDate)+ "</td>";
                
                table += "<td>" + "<pre>Planned:"+ ((tooling.Manufacturing_1_PlannedDate == null)?"":tooling.Manufacturing_1_PlannedDate)+" </pre>"
                +"<pre>Actual:" + ((tooling.Manufacturing_1_ActualDate == null)?"":tooling.Manufacturing_1_ActualDate)+ "</pre></td>";
                table += "<td>"+getDayDiffForGridView(tooling.Manufacturing_1_PlannedDate , tooling.Manufacturing_1_ActualDate)+"</td>";
                table += "<td>"+getStatusForGridView(tooling.Manufacturing_1_PlannedDate , tooling.Manufacturing_1_ActualDate)+ "</td>";
                table += "<td>" + "<pre>Planned:"+ ((tooling.Manufacturing_2_PlannedDate == null)?"":tooling.Manufacturing_2_PlannedDate)+" </pre>"
                +"<pre>Actual:" + ((tooling.Manufacturing_2_ActualDate == null)?"":tooling.Manufacturing_2_ActualDate)+ "</pre></td>";
                table += "<td>"+getDayDiffForGridView(tooling.Manufacturing_2_PlannedDate , tooling.Manufacturing_2_ActualDate)+"</td>";
                table += "<td>"+getStatusForGridView(tooling.Manufacturing_2_PlannedDate , tooling.Manufacturing_2_ActualDate)+ "</td>";
                table += "<td>" + "<pre>Planned:"+ ((tooling.Manufacturing_3_PlannedDate == null)?"":tooling.Manufacturing_3_PlannedDate)+" </pre>"
                +"<pre>Actual:" + ((tooling.Manufacturing_3_ActualDate == null)?"":tooling.Manufacturing_3_ActualDate)+ "</pre></td>";
                table += "<td>"+getDayDiffForGridView(tooling.Manufacturing_3_PlannedDate , tooling.Manufacturing_3_ActualDate)+"</td>";
                table += "<td>"+getStatusForGridView(tooling.Manufacturing_3_PlannedDate , tooling.Manufacturing_3_ActualDate)+ "</td>";
                table += "<td>" + "<pre>Planned:"+ ((tooling.Manufacturing_4_PlannedDate == null)?"":tooling.Manufacturing_4_PlannedDate)+" </pre>"
                +"<pre>Actual:" + ((tooling.Manufacturing_4_ActualDate == null)?"":tooling.Manufacturing_4_ActualDate)+ "</pre></td>";
                table += "<td>"+getDayDiffForGridView(tooling.Manufacturing_4_PlannedDate , tooling.Manufacturing_4_ActualDate)+"</td>";
                table += "<td>"+getStatusForGridView(tooling.Manufacturing_4_PlannedDate , tooling.Manufacturing_4_ActualDate)+ "</td>";
                table += "<td>" + "<pre>Planned:"+ ((tooling.Manufacturing_5_PlannedDate == null)?"":tooling.Manufacturing_5_PlannedDate)+" </pre>"
                +"<pre>Actual:" + ((tooling.Manufacturing_5_ActualDate == null)?"":tooling.Manufacturing_5_ActualDate)+ "</pre></td>";
                table += "<td>"+getDayDiffForGridView(tooling.Manufacturing_5_PlannedDate , tooling.Manufacturing_5_ActualDate)+"</td>";
                table += "<td>"+getStatusForGridView(tooling.Manufacturing_5_PlannedDate , tooling.Manufacturing_5_ActualDate)+ "</td>";
                table += "<td>" + "<pre>Planned:"+ ((tooling.Manufacturing_6_PlannedDate == null)?"":tooling.Manufacturing_6_PlannedDate)+" </pre>"
                +"<pre>Actual:" + ((tooling.Manufacturing_6_ActualDate == null)?"":tooling.Manufacturing_6_ActualDate)+ "</pre></td>";
                table += "<td>"+getDayDiffForGridView(tooling.Manufacturing_6_PlannedDate , tooling.Manufacturing_6_ActualDate)+"</td>";
                table += "<td>"+getStatusForGridView(tooling.Manufacturing_6_PlannedDate , tooling.Manufacturing_6_ActualDate)+ "</td>";
                table += "<td>" + "<pre>Planned:"+ ((tooling.Manufacturing_7_PlannedDate == null)?"":tooling.Manufacturing_7_PlannedDate)+" </pre>"
                +"<pre>Actual:" + ((tooling.Manufacturing_7_ActualDate == null)?"":tooling.Manufacturing_7_ActualDate)+ "</pre></td>";
                table += "<td>"+getDayDiffForGridView(tooling.Manufacturing_7_PlannedDate , tooling.Manufacturing_7_ActualDate)+"</td>";
                table += "<td>"+getStatusForGridView(tooling.Manufacturing_7_PlannedDate , tooling.Manufacturing_7_ActualDate)+ "</td>";
                table += "<td>" + "<pre>Planned:"+ ((tooling.Manufacturing_8_PlannedDate == null)?"":tooling.Manufacturing_8_PlannedDate)+" </pre>"
                +"<pre>Actual:" + ((tooling.Manufacturing_8_ActualDate == null)?"":tooling.Manufacturing_8_ActualDate)+ "</pre></td>";
                table += "<td>"+getDayDiffForGridView(tooling.Manufacturing_8_PlannedDate , tooling.Manufacturing_8_ActualDate)+"</td>";
                table += "<td>"+getStatusForGridView(tooling.Manufacturing_8_PlannedDate , tooling.Manufacturing_8_ActualDate)+ "</td>";
                table += "<td>" + "<pre>Planned:"+ ((tooling.Manufacturing_9_PlannedDate == null)?"":tooling.Manufacturing_9_PlannedDate)+" </pre>"
                +"<pre>Actual:" + ((tooling.Manufacturing_9_ActualDate == null)?"":tooling.Manufacturing_9_ActualDate)+ "</pre></td>";
                table += "<td>"+getDayDiffForGridView(tooling.Manufacturing_9_PlannedDate , tooling.Manufacturing_9_ActualDate)+"</td>";
                table += "<td>"+getStatusForGridView(tooling.Manufacturing_9_PlannedDate , tooling.Manufacturing_9_ActualDate)+ "</td>";
                table += "<td>" + "<pre>Planned:"+ ((tooling.Manufacturing_10_PlannedDate == null)?"":tooling.Manufacturing_10_PlannedDate)+" </pre>"
                +"<pre>Actual:" + ((tooling.Manufacturing_10_ActualDate == null)?"":tooling.Manufacturing_10_ActualDate)+ "</pre></td>";
                table += "<td>"+getDayDiffForGridView(tooling.Manufacturing_10_PlannedDate , tooling.Manufacturing_10_ActualDate)+"</td>";
                table += "<td>"+getStatusForGridView(tooling.Manufacturing_10_PlannedDate , tooling.Manufacturing_10_ActualDate)+ "</td>";
                table += "<td>" + "<pre>Planned:"+ ((tooling.Manufacturing_11_PlannedDate == null)?"":tooling.Manufacturing_11_PlannedDate)+" </pre>"
                +"<pre>Actual:" + ((tooling.Manufacturing_11_ActualDate == null)?"":tooling.Manufacturing_11_ActualDate)+ "</pre></td>";
                table += "<td>"+getDayDiffForGridView(tooling.Manufacturing_11_PlannedDate , tooling.Manufacturing_11_ActualDate)+"</td>";
                table += "<td>"+getStatusForGridView(tooling.Manufacturing_11_PlannedDate , tooling.Manufacturing_11_ActualDate)+ "</td>";
                table += "<td>" + "<pre>Planned:"+ ((tooling.Manufacturing_12_PlannedDate == null)?"":tooling.Manufacturing_12_PlannedDate)+" </pre>"
                +"<pre>Actual:" + ((tooling.Manufacturing_12_ActualDate == null)?"":tooling.Manufacturing_12_ActualDate)+ "</pre></td>";
                table += "<td>"+getDayDiffForGridView(tooling.Manufacturing_12_PlannedDate , tooling.Manufacturing_12_ActualDate)+"</td>";
                table += "<td>"+getStatusForGridView(tooling.Manufacturing_12_PlannedDate , tooling.Manufacturing_12_ActualDate)+ "</td>";
                table += "<td>" + "<pre>Planned:"+ ((tooling.Manufacturing_13_PlannedDate == null)?"":tooling.Manufacturing_13_PlannedDate)+" </pre>"
                +"<pre>Actual:" + ((tooling.Manufacturing_13_ActualDate == null)?"":tooling.Manufacturing_13_ActualDate)+ "</pre></td>";
                table += "<td>"+getDayDiffForGridView(tooling.Manufacturing_13_PlannedDate , tooling.Manufacturing_13_ActualDate)+"</td>";
                table += "<td>"+getStatusForGridView(tooling.Manufacturing_13_PlannedDate , tooling.Manufacturing_13_ActualDate)+ "</td>";
                
                table += "<td>" + "<pre>Planned:"+ ((tooling.SeriesProduction_1_PlannedDate == null)?"":tooling.SeriesProduction_1_PlannedDate)+" </pre>"
                +"<pre>Actual:" + ((tooling.SeriesProduction_1_ActualDate == null)?"":tooling.SeriesProduction_1_ActualDate)+ "</pre></td>";
                table += "<td>"+getDayDiffForGridView(tooling.SeriesProduction_1_PlannedDate , tooling.SeriesProduction_1_ActualDate)+"</td>";
                table += "<td>"+getStatusForGridView(tooling.SeriesProduction_1_PlannedDate , tooling.SeriesProduction_1_ActualDate)+ "</td>";
                table += "<td>" + "<pre>Planned:"+ ((tooling.SeriesProduction_2_PlannedDate == null)?"":tooling.SeriesProduction_2_PlannedDate)+" </pre>"
                +"<pre>Actual:" + ((tooling.SeriesProduction_2_ActualDate == null)?"":tooling.SeriesProduction_2_ActualDate)+ "</pre></td>";
                table += "<td>"+getDayDiffForGridView(tooling.SeriesProduction_2_PlannedDate , tooling.SeriesProduction_2_ActualDate)+"</td>";
                table += "<td>"+getStatusForGridView(tooling.SeriesProduction_2_PlannedDate , tooling.SeriesProduction_2_ActualDate)+ "</td>";
                table += "<td>" + "<pre>Planned:"+ ((tooling.SeriesProduction_3_PlannedDate == null)?"":tooling.SeriesProduction_3_PlannedDate)+" </pre>"
                +"<pre>Actual:" + ((tooling.SeriesProduction_3_ActualDate == null)?"":tooling.SeriesProduction_3_ActualDate)+ "</pre></td>";
                table += "<td>"+getDayDiffForGridView(tooling.SeriesProduction_3_PlannedDate , tooling.SeriesProduction_3_ActualDate)+"</td>";
                table += "<td>"+getStatusForGridView(tooling.SeriesProduction_3_PlannedDate , tooling.SeriesProduction_3_ActualDate)+ "</td>";
                table += "<td>" + "<pre>Planned:"+ ((tooling.SeriesProduction_4_PlannedDate == null)?"":tooling.SeriesProduction_4_PlannedDate)+" </pre>"
                +"<pre>Actual:" + ((tooling.SeriesProduction_4_ActualDate == null)?"":tooling.SeriesProduction_4_ActualDate)+ "</pre></td>";
                table += "<td>"+getDayDiffForGridView(tooling.SeriesProduction_4_PlannedDate , tooling.SeriesProduction_4_ActualDate)+"</td>";
                table += "<td>"+getStatusForGridView(tooling.SeriesProduction_4_PlannedDate , tooling.SeriesProduction_4_ActualDate)+ "</td>";
                
                table += "<td>" + "<pre>Planned:"+ ((tooling.PPAP_1_PlannedDate == null)?"":tooling.PPAP_1_PlannedDate)+" </pre>"
                +"<pre>Actual:" + ((tooling.PPAP_1_ActualDate == null)?"":tooling.PPAP_1_ActualDate)+ "</pre></td>";
                table += "<td>"+getDayDiffForGridView(tooling.PPAP_1_PlannedDate , tooling.PPAP_1_ActualDate)+"</td>";
                table += "<td>"+getStatusForGridView(tooling.PPAP_1_PlannedDate , tooling.PPAP_1_ActualDate)+ "</td>";
                table += "<td>" + "<pre>Planned:"+ ((tooling.PPAP_2_PlannedDate == null)?"":tooling.PPAP_2_PlannedDate)+" </pre>"
                +"<pre>Actual:" + ((tooling.PPAP_2_ActualDate == null)?"":tooling.PPAP_2_ActualDate)+ "</pre></td>";
                table += "<td>"+getDayDiffForGridView(tooling.PPAP_2_PlannedDate , tooling.PPAP_2_ActualDate)+"</td>";
                table += "<td>"+getStatusForGridView(tooling.PPAP_2_PlannedDate , tooling.PPAP_2_ActualDate)+ "</td>";
                table += "<td>" + "<pre>Planned:"+ ((tooling.PPAP_3_PlannedDate == null)?"":tooling.PPAP_3_PlannedDate)+" </pre>"
                +"<pre>Actual:" + ((tooling.PPAP_3_ActualDate == null)?"":tooling.PPAP_3_ActualDate)+ "</pre></td>";
                table += "<td>"+getDayDiffForGridView(tooling.PPAP_3_PlannedDate , tooling.PPAP_3_ActualDate)+"</td>";
                table += "<td>"+getStatusForGridView(tooling.PPAP_3_PlannedDate , tooling.PPAP_3_ActualDate)+ "</td>";

               
               
               
                cnt++;
            }
            $("#result").html(table);

            //Loading Data Table JS to table - tooling_list_view...
            $('#tooling_list_view').DataTable({
                dom: 'Bfr<"table-responsive"t>ip',
                buttons: [
                    {
                        extend: 'colvis',
                        text: '<i class="ft-eye-off" data-toggle="tooltip" title="Hide/Unhide Columns"></i>',
                        titleAttr: 'Hide/Unhide Columns',
                        className: 'excel_button btn-float'
                    },
                    {
                        extend: 'pageLength',
                        text: '<i class="ft-list" data-toggle="tooltip" title="Toggle Page Length"></i>',
                        className: 'excel_button btn-float',
                        titleAttr: 'Toggle Page Length'
                    },
                    {
                        // className: 'filter_export_button',
                        // text: '<i class="la la-download"></i>',
                        // titleAttr: 'Filter and Export',
                        extend: 'collection',
                        text: '<i class="ft-download" data-toggle="tooltip" title="Export"></i>',
                        buttons: ['csv', 'excel', 'pdf'],
                        className: 'btn-float',
                    },
                ],
                // "scrollY": 200,
            });
        
            hideLoader();
            $("#tooling_list_view").show();
        },
        error: function (error) {
            alert(error.message);
        }
    });
}

function postToolingForm() {

    console.log("Submitting Tooling Master Form");
  
    let projectId = $("#projectId").val();
    let taskId = $("#taskId").val();
    let partName = $("#partName").val();
    let partSupplier = $("#partSupplier").val();
    let partType = $("#partType").val();
    let partNumber = $("#partNumber").val();
    let partMakeBuy = $("#partMakeBuy").val();
    let partCavities = $("#partCavities").val();

    let submitForm = true;

    if (projectId == "" || taskId == "" || partName == "" || partSupplier == "" || partType == "" || partNumber == ""
        || partMakeBuy == "" || partCavities == "") {

        submitForm = false;
    }

    if (submitForm) {

        $.ajax({
            url: "/server/Tooling/master",
            type: "post",
            contentType: "application/json",
            data: JSON.stringify({
                "projectId": projectId,
                "taskId": taskId,
                "partName": partName,
                "partSupplier": partSupplier,
                "partType": partType,
                "partNumber": partNumber,
                "partMakeBuy": partMakeBuy,
                "partCavities": partCavities,
                "SourcingSupplier_1_PlannedDate": $("#SourcingSupplier_1_PlannedDate").val(),
                "SourcingSupplier_2_PlannedDate": $("#SourcingSupplier_2_PlannedDate").val(),
                "SourcingSupplier_3_PlannedDate": $("#SourcingSupplier_3_PlannedDate").val(),
                "SourcingSupplier_4_PlannedDate": $("#SourcingSupplier_4_PlannedDate").val(),
                "SourcingSupplier_5_PlannedDate": $("#SourcingSupplier_5_PlannedDate").val(),
                "ToolingDesign_1_PlannedDate": $("#ToolingDesign_1_PlannedDate").val(),
                "ToolingDesign_2_PlannedDate": $("#ToolingDesign_2_PlannedDate").val(),
                "ToolingDesign_3_PlannedDate": $("#ToolingDesign_3_PlannedDate").val(),
                "ToolingDesign_4_PlannedDate": $("#ToolingDesign_4_PlannedDate").val(),
                "ToolingDesign_5_PlannedDate": $("#ToolingDesign_5_PlannedDate").val(),
                "Manufacturing_1_PlannedDate": $("#Manufacturing_1_PlannedDate").val(),
                "Manufacturing_2_PlannedDate": $("#Manufacturing_2_PlannedDate").val(),
                "Manufacturing_3_PlannedDate": $("#Manufacturing_3_PlannedDate").val(),
                "Manufacturing_4_PlannedDate": $("#Manufacturing_4_PlannedDate").val(),
                "Manufacturing_5_PlannedDate": $("#Manufacturing_5_PlannedDate").val(),
                "Manufacturing_6_PlannedDate": $("#Manufacturing_6_PlannedDate").val(),
                "Manufacturing_7_PlannedDate": $("#Manufacturing_7_PlannedDate").val(),
                "Manufacturing_8_PlannedDate": $("#Manufacturing_8_PlannedDate").val(),
                "Manufacturing_9_PlannedDate": $("#Manufacturing_9_PlannedDate").val(),
                "Manufacturing_10_PlannedDate": $("#Manufacturing_10_PlannedDate").val(),
                "Manufacturing_11_PlannedDate": $("#Manufacturing_11_PlannedDate").val(),
                "Manufacturing_12_PlannedDate": $("#Manufacturing_12_PlannedDate").val(),
                "Manufacturing_13_PlannedDate": $("#Manufacturing_13_PlannedDate").val(),
                "SeriesProduction_1_PlannedDate": $("#SeriesProduction_1_PlannedDate").val(),
                "SeriesProduction_2_PlannedDate": $("#SeriesProduction_2_PlannedDate").val(),
                "SeriesProduction_3_PlannedDate": $("#SeriesProduction_3_PlannedDate").val(),
                "SeriesProduction_4_PlannedDate": $("#SeriesProduction_4_PlannedDate").val(),                
                "PPAP_1_PlannedDate": $("#PPAP_1_PlannedDate").val(),
                "PPAP_2_PlannedDate": $("#PPAP_2_PlannedDate").val(),
                "PPAP_3_PlannedDate": $("#PPAP_3_PlannedDate").val(),
            }),
            success: function (data) {
                console.log(data);
                $("#result").html(data.message);
                hideLoader();
                getToolingFormData();
                $("#add_modal").modal("hide");
            },
            error: function (error) {
                console.log(error.message);
            }
        });
    }
    else {

        console.log("Validation Failed : Please enter all required fields!");
        alert("Validation Failed : Please enter all required fields!");
    }

    return false;
}

function editToolingFormRow(rowid) {

    console.log("Editing row : " + rowid);
    
    $.ajax({
        url: "/server/Tooling/masterrow?rowid=" + rowid,
        type: "get",
        success: function (data) {
            console.log(data);

            data = data.toolingData;

            $("#addForm").trigger('reset');
            
            $("#addForm").trigger('reset');
            $("#projectId").val(data.projectId);
            $("#taskId").val(data.taskId);
            $("#partName").val(data.partName);
            $("#partSupplier").val(data.partSupplier);
            $("#partType").val(data.partType);
            $("#partNumber").val(data.partNumber);
            $("#partMakeBuy").val(data.partMakeBuy);
            $("#partCavities").val(data.partCavities);
            $("#rowId").val(data.ROWID);
        
            $("#SourcingSupplier_1_PlannedDate").val(data.SourcingSupplier_1_PlannedDate);
            $("#SourcingSupplier_2_PlannedDate").val(data.SourcingSupplier_2_PlannedDate);
            $("#SourcingSupplier_3_PlannedDate").val(data.SourcingSupplier_3_PlannedDate);
            $("#SourcingSupplier_4_PlannedDate").val(data.SourcingSupplier_4_PlannedDate);
            $("#SourcingSupplier_5_PlannedDate").val(data.SourcingSupplier_5_PlannedDate);
            $("#SourcingSupplier_1_ActualDate").val(data.SourcingSupplier_1_ActualDate);
            $("#SourcingSupplier_2_ActualDate").val(data.SourcingSupplier_2_ActualDate);
            $("#SourcingSupplier_3_ActualDate").val(data.SourcingSupplier_3_ActualDate);
            $("#SourcingSupplier_4_ActualDate").val(data.SourcingSupplier_4_ActualDate);
            $("#SourcingSupplier_5_ActualDate").val(data.SourcingSupplier_5_ActualDate);

            $("#ToolingDesign_1_PlannedDate").val(data.ToolingDesign_1_PlannedDate);
            $("#ToolingDesign_2_PlannedDate").val(data.ToolingDesign_2_PlannedDate);
            $("#ToolingDesign_3_PlannedDate").val(data.ToolingDesign_3_PlannedDate);
            $("#ToolingDesign_4_PlannedDate").val(data.ToolingDesign_4_PlannedDate);
            $("#ToolingDesign_5_PlannedDate").val(data.ToolingDesign_5_PlannedDate);
            $("#ToolingDesign_1_ActualDate").val(data.ToolingDesign_1_ActualDate);
            $("#ToolingDesign_2_ActualDate").val(data.ToolingDesign_2_ActualDate);
            $("#ToolingDesign_3_ActualDate").val(data.ToolingDesign_3_ActualDate);
            $("#ToolingDesign_4_ActualDate").val(data.ToolingDesign_4_ActualDate);
            $("#ToolingDesign_5_ActualDate").val(data.ToolingDesign_5_ActualDate);
            
            $("#Manufacturing_1_PlannedDate").val(data.Manufacturing_1_PlannedDate);
            $("#Manufacturing_2_PlannedDate").val(data.Manufacturing_2_PlannedDate);
            $("#Manufacturing_3_PlannedDate").val(data.Manufacturing_3_PlannedDate);
            $("#Manufacturing_4_PlannedDate").val(data.Manufacturing_4_PlannedDate);
            $("#Manufacturing_5_PlannedDate").val(data.Manufacturing_5_PlannedDate);
            $("#Manufacturing_6_PlannedDate").val(data.Manufacturing_6_PlannedDate);
            $("#Manufacturing_7_PlannedDate").val(data.Manufacturing_7_PlannedDate);
            $("#Manufacturing_8_PlannedDate").val(data.Manufacturing_8_PlannedDate);
            $("#Manufacturing_9_PlannedDate").val(data.Manufacturing_9_PlannedDate);
            $("#Manufacturing_10_PlannedDate").val(data.Manufacturing_10_PlannedDate);
            $("#Manufacturing_11_PlannedDate").val(data.Manufacturing_11_PlannedDate);
            $("#Manufacturing_12_PlannedDate").val(data.Manufacturing_12_PlannedDate);
            $("#Manufacturing_13_PlannedDate").val(data.Manufacturing_13_PlannedDate);
            $("#Manufacturing_1_ActualDate").val(data.Manufacturing_1_ActualDate);
            $("#Manufacturing_2_ActualDate").val(data.Manufacturing_2_ActualDate);
            $("#Manufacturing_3_ActualDate").val(data.Manufacturing_3_ActualDate);
            $("#Manufacturing_4_ActualDate").val(data.Manufacturing_4_ActualDate);
            $("#Manufacturing_5_ActualDate").val(data.Manufacturing_5_ActualDate);
            $("#Manufacturing_6_ActualDate").val(data.Manufacturing_6_ActualDate);
            $("#Manufacturing_7_ActualDate").val(data.Manufacturing_7_ActualDate);
            $("#Manufacturing_8_ActualDate").val(data.Manufacturing_8_ActualDate);
            $("#Manufacturing_9_ActualDate").val(data.Manufacturing_9_ActualDate);
            $("#Manufacturing_10_ActualDate").val(data.Manufacturing_10_ActualDate);
            $("#Manufacturing_11_ActualDate").val(data.Manufacturing_11_ActualDate);
            $("#Manufacturing_12_ActualDate").val(data.Manufacturing_12_ActualDate);
            $("#Manufacturing_13_ActualDate").val(data.Manufacturing_13_ActualDate);

            $("#SeriesProduction_1_PlannedDate").val(data.SeriesProduction_1_PlannedDate);
            $("#SeriesProduction_2_PlannedDate").val(data.SeriesProduction_2_PlannedDate);
            $("#SeriesProduction_3_PlannedDate").val(data.SeriesProduction_3_PlannedDate);
            $("#SeriesProduction_4_PlannedDate").val(data.SeriesProduction_4_PlannedDate);
            $("#SeriesProduction_1_ActualDate").val(data.SeriesProduction_1_ActualDate);
            $("#SeriesProduction_2_ActualDate").val(data.SeriesProduction_2_ActualDate);
            $("#SeriesProduction_3_ActualDate").val(data.SeriesProduction_3_ActualDate);
            $("#SeriesProduction_4_ActualDate").val(data.SeriesProduction_4_ActualDate);
           
            $("#PPAP_1_PlannedDate").val(data.PPAP_1_PlannedDate);
            $("#PPAP_2_PlannedDate").val(data.PPAP_2_PlannedDate);
            $("#PPAP_3_PlannedDate").val(data.PPAP_3_PlannedDate);
            $("#PPAP_1_ActualDate").val(data.PPAP_1_ActualDate);
            $("#PPAP_2_ActualDate").val(data.PPAP_2_ActualDate);
            $("#PPAP_3_ActualDate").val(data.PPAP_3_ActualDate);

            showEditModal();
        },
        errror: function (error) {
            alert(error.message);
        }
    });
}

function updateToolingForm(){

    console.log("Updating Tooling Master Form");

    let projectId = $("#projectId").val();
    let taskId = $("#taskId").val();
    let partName = $("#partName").val();
    let partSupplier = $("#partSupplier").val();
    let partType = $("#partType").val();
    let partNumber = $("#partNumber").val();
    let partMakeBuy = $("#partMakeBuy").val();
    let partCavities = $("#partCavities").val();
    let rowId = $("#rowId").val();

    let updateForm = true;

    if (projectId == "" || taskId == "" || partName == "" || partSupplier == "" || partType == "" || partNumber == ""
        || partMakeBuy == "" || partCavities == "") {

        updateForm = false;
    }

    console.log(rowId);
    if (updateForm) {

        $.ajax({
            url: "/server/Tooling/master",
            type: "put",
            contentType: "application/json",
            data: JSON.stringify({
                "rowId": rowId,
                "projectId": projectId,
                "taskId": taskId,
                "partName": partName,
                "partSupplier": partSupplier,
                "partType": partType,
                "partNumber": partNumber,
                "partMakeBuy": partMakeBuy,
                "partCavities": partCavities,
                "SourcingSupplier_1_PlannedDate": $("#SourcingSupplier_1_PlannedDate").val(),
                "SourcingSupplier_2_PlannedDate": $("#SourcingSupplier_2_PlannedDate").val(),
                "SourcingSupplier_3_PlannedDate": $("#SourcingSupplier_3_PlannedDate").val(),
                "SourcingSupplier_4_PlannedDate": $("#SourcingSupplier_4_PlannedDate").val(),
                "SourcingSupplier_5_PlannedDate": $("#SourcingSupplier_5_PlannedDate").val(),
                "ToolingDesign_1_PlannedDate": $("#ToolingDesign_1_PlannedDate").val(),
                "ToolingDesign_2_PlannedDate": $("#ToolingDesign_2_PlannedDate").val(),
                "ToolingDesign_3_PlannedDate": $("#ToolingDesign_3_PlannedDate").val(),
                "ToolingDesign_4_PlannedDate": $("#ToolingDesign_4_PlannedDate").val(),
                "ToolingDesign_5_PlannedDate": $("#ToolingDesign_5_PlannedDate").val(),
                "Manufacturing_1_PlannedDate": $("#Manufacturing_1_PlannedDate").val(),
                "Manufacturing_2_PlannedDate": $("#Manufacturing_2_PlannedDate").val(),
                "Manufacturing_3_PlannedDate": $("#Manufacturing_3_PlannedDate").val(),
                "Manufacturing_4_PlannedDate": $("#Manufacturing_4_PlannedDate").val(),
                "Manufacturing_5_PlannedDate": $("#Manufacturing_5_PlannedDate").val(),
                "Manufacturing_6_PlannedDate": $("#Manufacturing_6_PlannedDate").val(),
                "Manufacturing_7_PlannedDate": $("#Manufacturing_7_PlannedDate").val(),
                "Manufacturing_8_PlannedDate": $("#Manufacturing_8_PlannedDate").val(),
                "Manufacturing_9_PlannedDate": $("#Manufacturing_9_PlannedDate").val(),
                "Manufacturing_10_PlannedDate": $("#Manufacturing_10_PlannedDate").val(),
                "Manufacturing_11_PlannedDate": $("#Manufacturing_11_PlannedDate").val(),
                "Manufacturing_12_PlannedDate": $("#Manufacturing_12_PlannedDate").val(),
                "Manufacturing_13_PlannedDate": $("#Manufacturing_13_PlannedDate").val(),
                "SeriesProduction_1_PlannedDate": $("#SeriesProduction_1_PlannedDate").val(),
                "SeriesProduction_2_PlannedDate": $("#SeriesProduction_2_PlannedDate").val(),
                "SeriesProduction_3_PlannedDate": $("#SeriesProduction_3_PlannedDate").val(),
                "SeriesProduction_4_PlannedDate": $("#SeriesProduction_4_PlannedDate").val(),                
                "PPAP_1_PlannedDate": $("#PPAP_1_PlannedDate").val(),
                "PPAP_2_PlannedDate": $("#PPAP_2_PlannedDate").val(),
                "PPAP_3_PlannedDate": $("#PPAP_3_PlannedDate").val(),
                "SourcingSupplier_1_ActualDate": $("#SourcingSupplier_1_ActualDate").val(),
                "SourcingSupplier_2_ActualDate": $("#SourcingSupplier_2_ActualDate").val(),
                "SourcingSupplier_3_ActualDate": $("#SourcingSupplier_3_ActualDate").val(),
                "SourcingSupplier_4_ActualDate": $("#SourcingSupplier_4_ActualDate").val(),
                "SourcingSupplier_5_ActualDate": $("#SourcingSupplier_5_ActualDate").val(),
                "ToolingDesign_1_ActualDate": $("#ToolingDesign_1_ActualDate").val(),
                "ToolingDesign_2_ActualDate": $("#ToolingDesign_2_ActualDate").val(),
                "ToolingDesign_3_ActualDate": $("#ToolingDesign_3_ActualDate").val(),
                "ToolingDesign_4_ActualDate": $("#ToolingDesign_4_ActualDate").val(),
                "ToolingDesign_5_ActualDate": $("#ToolingDesign_5_ActualDate").val(),
                "Manufacturing_1_ActualDate": $("#Manufacturing_1_ActualDate").val(),
                "Manufacturing_2_ActualDate": $("#Manufacturing_2_ActualDate").val(),
                "Manufacturing_3_ActualDate": $("#Manufacturing_3_ActualDate").val(),
                "Manufacturing_4_ActualDate": $("#Manufacturing_4_ActualDate").val(),
                "Manufacturing_5_ActualDate": $("#Manufacturing_5_ActualDate").val(),
                "Manufacturing_6_ActualDate": $("#Manufacturing_6_ActualDate").val(),
                "Manufacturing_7_ActualDate": $("#Manufacturing_7_ActualDate").val(),
                "Manufacturing_8_ActualDate": $("#Manufacturing_8_ActualDate").val(),
                "Manufacturing_9_ActualDate": $("#Manufacturing_9_ActualDate").val(),
                "Manufacturing_10_ActualDate": $("#Manufacturing_10_ActualDate").val(),
                "Manufacturing_11_ActualDate": $("#Manufacturing_11_ActualDate").val(),
                "Manufacturing_12_ActualDate": $("#Manufacturing_12_ActualDate").val(),
                "Manufacturing_13_ActualDate": $("#Manufacturing_13_ActualDate").val(),
                "SeriesProduction_1_ActualDate": $("#SeriesProduction_1_ActualDate").val(),
                "SeriesProduction_2_ActualDate": $("#SeriesProduction_2_ActualDate").val(),
                "SeriesProduction_3_ActualDate": $("#SeriesProduction_4_ActualDate").val(),
                "SeriesProduction_4_ActualDate": $("#SeriesProduction_4_ActualDate").val(),                
                "PPAP_1_ActualDate": $("#PPAP_1_ActualDate").val(),
                "PPAP_2_ActualDate": $("#PPAP_2_ActualDate").val(),
                "PPAP_3_ActualDate": $("#PPAP_3_ActualDate").val()
            }),
            success: function (data) {
                console.log(data);
                $("#result").html(data.message);
                hideLoader();
                getToolingFormData();
                $("#add_modal").modal("hide");
            },
            error: function (error) {
                console.log(error.message);
            }
        });
    }
    else {

        console.log("Validation Failed : Please enter all required fields!");
        alert("Validation Failed : Please enter all required fields!");
    }

    return false;
}

function showLoader() {
    $("#result").hide();
    $("#loader").show();
}

function hideLoader() {
    $("#loader").hide();
    $("#result").show();
}

function showAddModal(){
    resetAllClasses();
    $("#addForm").trigger('reset');
    $("#btnSave").show();
    $("#btnUpdate").hide();
    $("#add_modal").modal("show");
}

function showEditModal(){
    showDayDiffAndStatus();
    $("#btnSave").hide();
    $("#btnUpdate").show();
    $("#add_modal").modal("show");
}

$( "input[type='date']" ).change(function() {    
    showDayDiffAndStatus();
});

function resetAllClasses(){
    $(".input-status").removeClass("rounded-input-status-red rounded-input-status-green");
    $(".input-status").addClass("rounded-input-status-blue");    
    $(".input-diff").removeClass("rounded-input-error rounded-input-success");
    $(".input-diff").addClass("rounded-input-grey");
}
function showDayDiffAndStatus(){
   
    if($("#SourcingSupplier_1_PlannedDate").val() != ""){

        var plannedDate = new Date($("#SourcingSupplier_1_PlannedDate").val());

        if($("#SourcingSupplier_1_ActualDate").val() != ""){
            var actualDate = new Date($("#SourcingSupplier_1_ActualDate").val());
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithActualDate(Difference_In_Days);
        }else{
            var actualDate = new Date();
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithoutActualDate(Difference_In_Days);
        }
        var getClassForDiff = getClassByStatusForDiff(status);
        var getClassForStatus = getClassByStatusForStatus(status);

        if((status == "Open" && Difference_In_Days == "0")){
            getClassForDiff = "form-control rounded-input-grey";
            getClassForStatus1 = "form-control rounded-input-status-blue"
        }

        $("#SourcingSupplier_1_status").val(status);
        $("#SourcingSupplier_1_status").removeClass();
        $("#SourcingSupplier_1_status").addClass(getClassForStatus);
        
        $("#SourcingSupplier_1_Difference").val(Difference_In_Days);
        $("#SourcingSupplier_1_Difference").removeClass();
        $("#SourcingSupplier_1_Difference").addClass(getClassForDiff);
    
    }

    if($("#SourcingSupplier_2_PlannedDate").val() != ""){

        var plannedDate = new Date($("#SourcingSupplier_2_PlannedDate").val());

        if($("#SourcingSupplier_2_ActualDate").val() != ""){
            var actualDate = new Date($("#SourcingSupplier_2_ActualDate").val());
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithActualDate(Difference_In_Days);
        }else{
            var actualDate = new Date();
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithoutActualDate(Difference_In_Days);
        }
        var getClassForDiff = getClassByStatusForDiff(status);
        var getClassForStatus = getClassByStatusForStatus(status);

        if(status == "Open" && Difference_In_Days == "0"){
            getClassForDiff = "form-control rounded-input-grey";
            getClassForStatus1 = "form-control rounded-input-status-blue"
        }

        $("#SourcingSupplier_2_Status").val(status);
        $("#SourcingSupplier_2_Status").removeClass();
        $("#SourcingSupplier_2_Status").addClass(getClassForStatus);
        
        $("#SourcingSupplier_2_Difference").val(Difference_In_Days);
        $("#SourcingSupplier_2_Difference").removeClass();
        $("#SourcingSupplier_2_Difference").addClass(getClassForDiff);
    
    }

    if($("#SourcingSupplier_3_PlannedDate").val() != ""){

        var plannedDate = new Date($("#SourcingSupplier_3_PlannedDate").val());

        if($("#SourcingSupplier_3_ActualDate").val() != ""){
            var actualDate = new Date($("#SourcingSupplier_3_ActualDate").val());
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithActualDate(Difference_In_Days);
        }else{
            var actualDate = new Date();
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithoutActualDate(Difference_In_Days);
        }
        var getClassForDiff = getClassByStatusForDiff(status);
        var getClassForStatus = getClassByStatusForStatus(status);

        if(status == "Open" && Difference_In_Days == "0"){
            getClassForDiff = "form-control rounded-input-grey";
            getClassForStatus1 = "form-control rounded-input-status-blue"
        }

        $("#SourcingSupplier_3_Status").val(status);
        $("#SourcingSupplier_3_Status").removeClass();
        $("#SourcingSupplier_3_Status").addClass(getClassForStatus);
        
        $("#SourcingSupplier_3_Difference").val(Difference_In_Days);
        $("#SourcingSupplier_3_Difference").removeClass();
        $("#SourcingSupplier_3_Difference").addClass(getClassForDiff);
    
    }

    if($("#SourcingSupplier_4_PlannedDate").val() != ""){

        var plannedDate = new Date($("#SourcingSupplier_4_PlannedDate").val());

        if($("#SourcingSupplier_4_ActualDate").val() != ""){
            var actualDate = new Date($("#SourcingSupplier_4_ActualDate").val());
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithActualDate(Difference_In_Days);
        }else{
            var actualDate = new Date();
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithoutActualDate(Difference_In_Days);
        }

        var getClassForDiff = getClassByStatusForDiff(status);
        var getClassForStatus1 = getClassByStatusForStatus(status);

        if(status == "Open" && Difference_In_Days == "0"){
            getClassForDiff = "form-control rounded-input-grey";
            getClassForStatus1 = "form-control rounded-input-status-blue"
        }

        $("#SourcingSupplier_4_Status").val(status);
        $("#SourcingSupplier_4_Status").removeClass();
        $("#SourcingSupplier_4_Status").addClass(getClassForStatus1);
        
        $("#SourcingSupplier_4_Difference").val(Difference_In_Days);
        $("#SourcingSupplier_4_Difference").removeClass();
        $("#SourcingSupplier_4_Difference").addClass(getClassForDiff);
    
    }

    if($("#SourcingSupplier_5_PlannedDate").val() != ""){

        var plannedDate = new Date($("#SourcingSupplier_5_PlannedDate").val());

        if($("#SourcingSupplier_5_ActualDate").val() != ""){
            var actualDate = new Date($("#SourcingSupplier_5_ActualDate").val());
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithActualDate(Difference_In_Days);
        }else{
            var actualDate = new Date();
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithoutActualDate(Difference_In_Days);
        }
        var getClassForDiff = getClassByStatusForDiff(status);
        var getClassForStatus = getClassByStatusForStatus(status);

        if(status == "Open" && Difference_In_Days == "0"){
            getClassForDiff = "form-control rounded-input-grey";
            getClassForStatus1 = "form-control rounded-input-status-blue"
        }

        $("#SourcingSupplier_5_Status").val(status);
        $("#SourcingSupplier_5_Status").removeClass();
        $("#SourcingSupplier_5_Status").addClass(getClassForStatus);
        
        $("#SourcingSupplier_5_Difference").val(Difference_In_Days);
        $("#SourcingSupplier_5_Difference").removeClass();
        $("#SourcingSupplier_5_Difference").addClass(getClassForDiff);
    
    }

    if($("#ToolingDesign_1_PlannedDate").val() != ""){

        var plannedDate = new Date($("#ToolingDesign_1_PlannedDate").val());

        if($("#ToolingDesign_1_ActualDate").val() != ""){
            var actualDate = new Date($("#ToolingDesign_1_ActualDate").val());
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithActualDate(Difference_In_Days);
        }else{
            var actualDate = new Date();
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithoutActualDate(Difference_In_Days);
        }

        var getClassForDiff = getClassByStatusForDiff(status);
        var getClassForStatus = getClassByStatusForStatus(status);

        if(status == "Open" && Difference_In_Days == "0"){
            getClassForDiff = "form-control rounded-input-grey";
            getClassForStatus1 = "form-control rounded-input-status-blue"
        }

        $("#ToolingDesign_1_Status").val(status);
        $("#ToolingDesign_1_Status").removeClass();
        $("#ToolingDesign_1_Status").addClass(getClassForStatus);
        
        $("#ToolingDesign_1_Difference").val(Difference_In_Days);
        $("#ToolingDesign_1_Difference").removeClass();
        $("#ToolingDesign_1_Difference").addClass(getClassForDiff);
    
    }


    if($("#ToolingDesign_2_PlannedDate").val() != ""){

        var plannedDate = new Date($("#ToolingDesign_2_PlannedDate").val());

        if($("#ToolingDesign_2_ActualDate").val() != ""){
            var actualDate = new Date($("#ToolingDesign_2_ActualDate").val());
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithActualDate(Difference_In_Days);
        }else{
            var actualDate = new Date();
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithoutActualDate(Difference_In_Days);
        }
        var getClassForDiff = getClassByStatusForDiff(status);
        var getClassForStatus = getClassByStatusForStatus(status);

        if(status == "Open" && Difference_In_Days == "0"){
            getClassForDiff = "form-control rounded-input-grey";
            getClassForStatus1 = "form-control rounded-input-status-blue"
        }

        $("#ToolingDesign_2_Status").val(status);
        $("#ToolingDesign_2_Status").removeClass();
        $("#ToolingDesign_2_Status").addClass(getClassForStatus);
        
        $("#ToolingDesign_2_Difference").val(Difference_In_Days);
        $("#ToolingDesign_2_Difference").removeClass();
        $("#ToolingDesign_2_Difference").addClass(getClassForDiff);
    
    }

    if($("#ToolingDesign_3_PlannedDate").val() != ""){

        var plannedDate = new Date($("#ToolingDesign_3_PlannedDate").val());

        if($("#ToolingDesign_3_ActualDate").val() != ""){
            var actualDate = new Date($("#ToolingDesign_3_ActualDate").val());
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithActualDate(Difference_In_Days);
        }else{
            var actualDate = new Date();
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithoutActualDate(Difference_In_Days);
        }
        var getClassForDiff = getClassByStatusForDiff(status);
        var getClassForStatus = getClassByStatusForStatus(status);

        if(status == "Open" && Difference_In_Days == "0"){
            getClassForDiff = "form-control rounded-input-grey";
            getClassForStatus1 = "form-control rounded-input-status-blue"
        }

        $("#ToolingDesign_3_Status").val(status);
        $("#ToolingDesign_3_Status").removeClass();
        $("#ToolingDesign_3_Status").addClass(getClassForStatus);
        
        $("#ToolingDesign_3_Difference").val(Difference_In_Days);
        $("#ToolingDesign_3_Difference").removeClass();
        $("#ToolingDesign_3_Difference").addClass(getClassForDiff);
    
    }


    if($("#ToolingDesign_4_PlannedDate").val() != ""){

        var plannedDate = new Date($("#ToolingDesign_4_PlannedDate").val());

        if($("#ToolingDesign_4_ActualDate").val() != ""){
            var actualDate = new Date($("#ToolingDesign_4_ActualDate").val());
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithActualDate(Difference_In_Days);
        }else{
            var actualDate = new Date();
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithoutActualDate(Difference_In_Days);
        }
        var getClassForDiff = getClassByStatusForDiff(status);
        var getClassForStatus = getClassByStatusForStatus(status);

        if(status == "Open" && Difference_In_Days == "0"){
            getClassForDiff = "form-control rounded-input-grey";
            getClassForStatus1 = "form-control rounded-input-status-blue"
        }

        $("#ToolingDesign_4_Status").val(status);
        $("#ToolingDesign_4_Status").removeClass();
        $("#ToolingDesign_4_Status").addClass(getClassForStatus);
        
        $("#ToolingDesign_4_Difference").val(Difference_In_Days);
        $("#ToolingDesign_4_Difference").removeClass();
        $("#ToolingDesign_4_Difference").addClass(getClassForDiff);
    
    }

    if($("#ToolingDesign_5_PlannedDate").val() != ""){

        var plannedDate = new Date($("#ToolingDesign_5_PlannedDate").val());

        if($("#ToolingDesign_5_ActualDate").val() != ""){
            var actualDate = new Date($("#ToolingDesign_5_ActualDate").val());
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithActualDate(Difference_In_Days);
        }else{
            var actualDate = new Date();
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithoutActualDate(Difference_In_Days);
        }

        var getClassForDiff = getClassByStatusForDiff(status);
        var getClassForStatus = getClassByStatusForStatus(status);

        if(status == "Open" && Difference_In_Days == "0"){
            getClassForDiff = "form-control rounded-input-grey";
            getClassForStatus1 = "form-control rounded-input-status-blue"
        }

        $("#ToolingDesign_5_Status").val(status);
        $("#ToolingDesign_5_Status").removeClass();
        $("#ToolingDesign_5_Status").addClass(getClassForStatus);
        
        $("#ToolingDesign_5_Difference").val(Difference_In_Days);
        $("#ToolingDesign_5_Difference").removeClass();
        $("#ToolingDesign_5_Difference").addClass(getClassForDiff);
    
    }

    if($("#Manufacturing_1_PlannedDate").val() != ""){

        var plannedDate = new Date($("#Manufacturing_1_PlannedDate").val());

        if($("#Manufacturing_1_ActualDate").val() != ""){
            var actualDate = new Date($("#Manufacturing_1_ActualDate").val());
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithActualDate(Difference_In_Days);
        }else{
            var actualDate = new Date();
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithoutActualDate(Difference_In_Days);
        }

        var getClassForDiff = getClassByStatusForDiff(status);
        var getClassForStatus = getClassByStatusForStatus(status);

        if(status == "Open" && Difference_In_Days == "0"){
            getClassForDiff = "form-control rounded-input-grey";
            getClassForStatus1 = "form-control rounded-input-status-blue"
        }

        $("#Manufacturing_1_Status").val(status);
        $("#Manufacturing_1_Status").removeClass();
        $("#Manufacturing_1_Status").addClass(getClassForStatus);
        
        $("#Manufacturing_1_Difference").val(Difference_In_Days);
        $("#Manufacturing_1_Difference").removeClass();
        $("#Manufacturing_1_Difference").addClass(getClassForDiff);
    
    }
    if($("#Manufacturing_2_PlannedDate").val() != ""){

        var plannedDate = new Date($("#Manufacturing_2_PlannedDate").val());

        if($("#Manufacturing_2_ActualDate").val() != ""){
            var actualDate = new Date($("#Manufacturing_2_ActualDate").val());
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithActualDate(Difference_In_Days);
        }else{
            var actualDate = new Date();
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithoutActualDate(Difference_In_Days);
        }

        var getClassForDiff = getClassByStatusForDiff(status);
        var getClassForStatus = getClassByStatusForStatus(status);

        if(status == "Open" && Difference_In_Days == "0"){
            getClassForDiff = "form-control rounded-input-grey";
            getClassForStatus1 = "form-control rounded-input-status-blue"
        }

        $("#Manufacturing_2_Status").val(status);
        $("#Manufacturing_2_Status").removeClass();
        $("#Manufacturing_2_Status").addClass(getClassForStatus);
        
        $("#Manufacturing_2_Difference").val(Difference_In_Days);
        $("#Manufacturing_2_Difference").removeClass();
        $("#Manufacturing_2_Difference").addClass(getClassForDiff);
    
    }
    if($("#Manufacturing_3_PlannedDate").val() != ""){

        var plannedDate = new Date($("#Manufacturing_3_PlannedDate").val());

        if($("#Manufacturing_3_ActualDate").val() != ""){
            var actualDate = new Date($("#Manufacturing_3_ActualDate").val());
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithActualDate(Difference_In_Days);
        }else{
            var actualDate = new Date();
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithoutActualDate(Difference_In_Days);
        }

        var getClassForDiff = getClassByStatusForDiff(status);
        var getClassForStatus = getClassByStatusForStatus(status);

        if(status == "Open" && Difference_In_Days == "0"){
            getClassForDiff = "form-control rounded-input-grey";
            getClassForStatus1 = "form-control rounded-input-status-blue"
        }

        $("#Manufacturing_3_Status").val(status);
        $("#Manufacturing_3_Status").removeClass();
        $("#Manufacturing_3_Status").addClass(getClassForStatus);
        
        $("#Manufacturing_3_Difference").val(Difference_In_Days);
        $("#Manufacturing_3_Difference").removeClass();
        $("#Manufacturing_3_Difference").addClass(getClassForDiff);
    
    }


    if($("#Manufacturing_4_PlannedDate").val() != ""){

        var plannedDate = new Date($("#Manufacturing_4_PlannedDate").val());

        if($("#Manufacturing_4_ActualDate").val() != ""){
            var actualDate = new Date($("#Manufacturing_4_ActualDate").val());
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithActualDate(Difference_In_Days);
        }else{
            var actualDate = new Date();
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithoutActualDate(Difference_In_Days);
        }

        var getClassForDiff = getClassByStatusForDiff(status);
        var getClassForStatus = getClassByStatusForStatus(status);

        if(status == "Open" && Difference_In_Days == "0"){
            getClassForDiff = "form-control rounded-input-grey";
            getClassForStatus1 = "form-control rounded-input-status-blue"
        }

        $("#Manufacturing_4_Status").val(status);
        $("#Manufacturing_4_Status").removeClass();
        $("#Manufacturing_4_Status").addClass(getClassForStatus);
        
        $("#Manufacturing_4_Difference").val(Difference_In_Days);
        $("#Manufacturing_4_Difference").removeClass();
        $("#Manufacturing_4_Difference").addClass(getClassForDiff);
    
    }
    if($("#Manufacturing_5_PlannedDate").val() != ""){

        var plannedDate = new Date($("#Manufacturing_5_PlannedDate").val());

        if($("#Manufacturing_5_ActualDate").val() != ""){
            var actualDate = new Date($("#Manufacturing_5_ActualDate").val());
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithActualDate(Difference_In_Days);
        }else{
            var actualDate = new Date();
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithoutActualDate(Difference_In_Days);
        }

        var getClassForDiff = getClassByStatusForDiff(status);
        var getClassForStatus = getClassByStatusForStatus(status);

        if(status == "Open" && Difference_In_Days == "0"){
            getClassForDiff = "form-control rounded-input-grey";
            getClassForStatus1 = "form-control rounded-input-status-blue"
        }

        $("#Manufacturing_5_Status").val(status);
        $("#Manufacturing_5_Status").removeClass();
        $("#Manufacturing_5_Status").addClass(getClassForStatus);
        
        $("#Manufacturing_5_Difference").val(Difference_In_Days);
        $("#Manufacturing_5_Difference").removeClass();
        $("#Manufacturing_5_Difference").addClass(getClassForDiff);
    
    }
    if($("#Manufacturing_6_PlannedDate").val() != ""){

        var plannedDate = new Date($("#Manufacturing_6_PlannedDate").val());

        if($("#Manufacturing_6_ActualDate").val() != ""){
            var actualDate = new Date($("#Manufacturing_6_ActualDate").val());
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithActualDate(Difference_In_Days);
        }else{
            var actualDate = new Date();
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithoutActualDate(Difference_In_Days);
        }

        var getClassForDiff = getClassByStatusForDiff(status);
        var getClassForStatus = getClassByStatusForStatus(status);

        if(status == "Open" && Difference_In_Days == "0"){
            getClassForDiff = "form-control rounded-input-grey";
            getClassForStatus1 = "form-control rounded-input-status-blue"
        }

        $("#Manufacturing_6_Status").val(status);
        $("#Manufacturing_6_Status").removeClass();
        $("#Manufacturing_6_Status").addClass(getClassForStatus);
        
        $("#Manufacturing_6_Difference").val(Difference_In_Days);
        $("#Manufacturing_6_Difference").removeClass();
        $("#Manufacturing_6_Difference").addClass(getClassForDiff);
    
    }
    if($("#Manufacturing_7_PlannedDate").val() != ""){

        var plannedDate = new Date($("#Manufacturing_7_PlannedDate").val());

        if($("#Manufacturing_7_ActualDate").val() != ""){
            var actualDate = new Date($("#Manufacturing_7_ActualDate").val());
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithActualDate(Difference_In_Days);
        }else{
            var actualDate = new Date();
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithoutActualDate(Difference_In_Days);
        }

        var getClassForDiff = getClassByStatusForDiff(status);
        var getClassForStatus = getClassByStatusForStatus(status);

        if(status == "Open" && Difference_In_Days == "0"){
            getClassForDiff = "form-control rounded-input-grey";
            getClassForStatus1 = "form-control rounded-input-status-blue"
        }

        $("#Manufacturing_7_Status").val(status);
        $("#Manufacturing_7_Status").removeClass();
        $("#Manufacturing_7_Status").addClass(getClassForStatus);
        
        $("#Manufacturing_7_Difference").val(Difference_In_Days);
        $("#Manufacturing_7_Difference").removeClass();
        $("#Manufacturing_7_Difference").addClass(getClassForDiff);
    
    }

    if($("#Manufacturing_8_PlannedDate").val() != ""){

        var plannedDate = new Date($("#Manufacturing_8_PlannedDate").val());

        if($("#Manufacturing_8_ActualDate").val() != ""){
            var actualDate = new Date($("#Manufacturing_8_ActualDate").val());
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithActualDate(Difference_In_Days);
        }else{
            var actualDate = new Date();
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithoutActualDate(Difference_In_Days);
        }
        var getClassForDiff = getClassByStatusForDiff(status);
        var getClassForStatus = getClassByStatusForStatus(status);

        if(status == "Open" && Difference_In_Days == "0"){
            getClassForDiff = "form-control rounded-input-grey";
            getClassForStatus1 = "form-control rounded-input-status-blue"
        }

        $("#Manufacturing_8_Status").val(status);
        $("#Manufacturing_8_Status").removeClass();
        $("#Manufacturing_8_Status").addClass(getClassForStatus);
        
        $("#Manufacturing_8_Difference").val(Difference_In_Days);
        $("#Manufacturing_8_Difference").removeClass();
        $("#Manufacturing_8_Difference").addClass(getClassForDiff);
    
    }
    if($("#Manufacturing_9_PlannedDate").val() != ""){

        var plannedDate = new Date($("#Manufacturing_9_PlannedDate").val());

        if($("#Manufacturing_9_ActualDate").val() != ""){
            var actualDate = new Date($("#Manufacturing_9_ActualDate").val());
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithActualDate(Difference_In_Days);
        }else{
            var actualDate = new Date();
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithoutActualDate(Difference_In_Days);
        }

        var getClassForDiff = getClassByStatusForDiff(status);
        var getClassForStatus = getClassByStatusForStatus(status);

        if(status == "Open" && Difference_In_Days == "0"){
            getClassForDiff = "form-control rounded-input-grey";
            getClassForStatus1 = "form-control rounded-input-status-blue"
        }

        $("#Manufacturing_9_Status").val(status);
        $("#Manufacturing_9_Status").removeClass();
        $("#Manufacturing_9_Status").addClass(getClassForStatus);
        
        $("#Manufacturing_9_Difference").val(Difference_In_Days);
        $("#Manufacturing_9_Difference").removeClass();
        $("#Manufacturing_9_Difference").addClass(getClassForDiff);
    
    }

    if($("#Manufacturing_10_PlannedDate").val() != ""){

        var plannedDate = new Date($("#Manufacturing_10_PlannedDate").val());

        if($("#Manufacturing_10_ActualDate").val() != ""){
            var actualDate = new Date($("#Manufacturing_10_ActualDate").val());
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithActualDate(Difference_In_Days);
        }else{
            var actualDate = new Date();
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithoutActualDate(Difference_In_Days);
        }

        if(status == "Open" && Difference_In_Days == "0"){
            getClassForDiff = "form-control rounded-input-grey";
            getClassForStatus1 = "form-control rounded-input-status-blue"
        }

        var getClassForDiff = getClassByStatusForDiff(status);
        var getClassForStatus = getClassByStatusForStatus(status);

        $("#Manufacturing_10_Status").val(status);
        $("#Manufacturing_10_Status").removeClass();
        $("#Manufacturing_10_Status").addClass(getClassForStatus);
        
        $("#Manufacturing_10_Difference").val(Difference_In_Days);
        $("#Manufacturing_10_Difference").removeClass();
        $("#Manufacturing_10_Difference").addClass(getClassForDiff);
    
    }
    if($("#Manufacturing_11_PlannedDate").val() != ""){

        var plannedDate = new Date($("#Manufacturing_11_PlannedDate").val());

        if($("#Manufacturing_11_ActualDate").val() != ""){
            var actualDate = new Date($("#Manufacturing_11_ActualDate").val());
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithActualDate(Difference_In_Days);
        }else{
            var actualDate = new Date();
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithoutActualDate(Difference_In_Days);
        }

        var getClassForDiff = getClassByStatusForDiff(status);
        var getClassForStatus = getClassByStatusForStatus(status);

        if(status == "Open" && Difference_In_Days == "0"){
            getClassForDiff = "form-control rounded-input-grey";
            getClassForStatus1 = "form-control rounded-input-status-blue"
        }

        $("#Manufacturing_11_Status").val(status);
        $("#Manufacturing_11_Status").removeClass();
        $("#Manufacturing_11_Status").addClass(getClassForStatus);
        
        $("#Manufacturing_11_Difference").val(Difference_In_Days);
        $("#Manufacturing_11_Difference").removeClass();
        $("#Manufacturing_11_Difference").addClass(getClassForDiff);
    
    }
    if($("#Manufacturing_12_PlannedDate").val() != ""){

        var plannedDate = new Date($("#Manufacturing_12_PlannedDate").val());

        if($("#Manufacturing_12_ActualDate").val() != ""){
            var actualDate = new Date($("#Manufacturing_12_ActualDate").val());
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithActualDate(Difference_In_Days);
        }else{
            var actualDate = new Date();
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithoutActualDate(Difference_In_Days);
        }

        var getClassForDiff = getClassByStatusForDiff(status);
        var getClassForStatus = getClassByStatusForStatus(status);

        if(status == "Open" && Difference_In_Days == "0"){
            getClassForDiff = "form-control rounded-input-grey";
            getClassForStatus1 = "form-control rounded-input-status-blue"
        }

        $("#Manufacturing_12_Status").val(status);
        $("#Manufacturing_12_Status").removeClass();
        $("#Manufacturing_12_Status").addClass(getClassForStatus);
        
        $("#Manufacturing_12_Difference").val(Difference_In_Days);
        $("#Manufacturing_12_Difference").removeClass();
        $("#Manufacturing_12_Difference").addClass(getClassForDiff);
    
    }

    if($("#Manufacturing_13_PlannedDate").val() != ""){

        var plannedDate = new Date($("#Manufacturing_13_PlannedDate").val());

        if($("#Manufacturing_13_ActualDate").val() != ""){
            var actualDate = new Date($("#Manufacturing_13_ActualDate").val());
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithActualDate(Difference_In_Days);
        }else{
            var actualDate = new Date();
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithoutActualDate(Difference_In_Days);
        }

        var getClassForDiff = getClassByStatusForDiff(status);
        var getClassForStatus = getClassByStatusForStatus(status);

        if(status == "Open" && Difference_In_Days == "0"){
            getClassForDiff = "form-control rounded-input-grey";
            getClassForStatus1 = "form-control rounded-input-status-blue"
        }

        $("#Manufacturing_13_Status").val(status);
        $("#Manufacturing_13_Status").removeClass();
        $("#Manufacturing_13_Status").addClass(getClassForStatus);
        
        $("#Manufacturing_13_Difference").val(Difference_In_Days);
        $("#Manufacturing_13_Difference").removeClass();
        $("#Manufacturing_13_Difference").addClass(getClassForDiff);
    
    }

    if($("#SeriesProduction_1_PlannedDate").val() != ""){

        var plannedDate = new Date($("#SeriesProduction_1_PlannedDate").val());

        if($("#SeriesProduction_1_ActualDate").val() != ""){
            var actualDate = new Date($("#SeriesProduction_1_ActualDate").val());
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithActualDate(Difference_In_Days);
        }else{
            var actualDate = new Date();
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithoutActualDate(Difference_In_Days);
        }

        var getClassForDiff = getClassByStatusForDiff(status);
        var getClassForStatus = getClassByStatusForStatus(status);

        if(status == "Open" && Difference_In_Days == "0"){
            getClassForDiff = "form-control rounded-input-grey";
            getClassForStatus1 = "form-control rounded-input-status-blue"
        }

        $("#SeriesProduction_1_Status").val(status);
        $("#SeriesProduction_1_Status").removeClass();
        $("#SeriesProduction_1_Status").addClass(getClassForStatus);
        
        $("#SeriesProduction_1_Difference").val(Difference_In_Days);
        $("#SeriesProduction_1_Difference").removeClass();
        $("#SeriesProduction_1_Difference").addClass(getClassForDiff);
    
    }

    if($("#SeriesProduction_2_PlannedDate").val() != ""){

        var plannedDate = new Date($("#SeriesProduction_2_PlannedDate").val());

        if($("#SeriesProduction_2_ActualDate").val() != ""){
            var actualDate = new Date($("#SeriesProduction_2_ActualDate").val());
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithActualDate(Difference_In_Days);
        }else{
            var actualDate = new Date();
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithoutActualDate(Difference_In_Days);
        }

        var getClassForDiff = getClassByStatusForDiff(status);
        var getClassForStatus = getClassByStatusForStatus(status);

        if(status == "Open" && Difference_In_Days == "0"){
            getClassForDiff = "form-control rounded-input-grey";
            getClassForStatus1 = "form-control rounded-input-status-blue"
        }

        $("#SeriesProduction_2_Status").val(status);
        $("#SeriesProduction_2_Status").removeClass();
        $("#SeriesProduction_2_Status").addClass(getClassForStatus);
        
        $("#SeriesProduction_2_Difference").val(Difference_In_Days);
        $("#SeriesProduction_2_Difference").removeClass();
        $("#SeriesProduction_2_Difference").addClass(getClassForDiff);
    
    }

    if($("#SeriesProduction_3_PlannedDate").val() != ""){

        var plannedDate = new Date($("#SeriesProduction_3_PlannedDate").val());

        if($("#SeriesProduction_3_ActualDate").val() != ""){
            var actualDate = new Date($("#SeriesProduction_3_ActualDate").val());
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithActualDate(Difference_In_Days);
        }else{
            var actualDate = new Date();
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithoutActualDate(Difference_In_Days);
        }

        var getClassForDiff = getClassByStatusForDiff(status);
        var getClassForStatus = getClassByStatusForStatus(status);

        if(status == "Open" && Difference_In_Days == "0"){
            getClassForDiff = "form-control rounded-input-grey";
            getClassForStatus1 = "form-control rounded-input-status-blue"
        }

        $("#SeriesProduction_3_Status").val(status);
        $("#SeriesProduction_3_Status").removeClass();
        $("#SeriesProduction_3_Status").addClass(getClassForStatus);
        
        $("#SeriesProduction_3_Difference").val(Difference_In_Days);
        $("#SeriesProduction_3_Difference").removeClass();
        $("#SeriesProduction_3_Difference").addClass(getClassForDiff);
    
    }

    if($("#SeriesProduction_4_PlannedDate").val() != ""){

        var plannedDate = new Date($("#SeriesProduction_4_PlannedDate").val());

        if($("#SeriesProduction_4_ActualDate").val() != ""){
            var actualDate = new Date($("#SeriesProduction_4_ActualDate").val());
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithActualDate(Difference_In_Days);
        }else{
            var actualDate = new Date();
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithoutActualDate(Difference_In_Days);
        }

        var getClassForDiff = getClassByStatusForDiff(status);
        var getClassForStatus = getClassByStatusForStatus(status);

        if(status == "Open" && Difference_In_Days == "0"){
            getClassForDiff = "form-control rounded-input-grey";
            getClassForStatus1 = "form-control rounded-input-status-blue"
        }
        
        $("#SeriesProduction_4_Status").val(status);
        $("#SeriesProduction_4_Status").removeClass();
        $("#SeriesProduction_4_Status").addClass(getClassForStatus);
        
        $("#SeriesProduction_4_Difference").val(Difference_In_Days);
        $("#SeriesProduction_4_Difference").removeClass();
        $("#SeriesProduction_4_Difference").addClass(getClassForDiff);
    
    }

    if($("#PPAP_1_PlannedDate").val() != ""){

        var plannedDate = new Date($("#PPAP_1_PlannedDate").val());

        if($("#PPAP_1_ActualDate").val() != ""){
            var actualDate = new Date($("#PPAP_1_ActualDate").val());
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithActualDate(Difference_In_Days);
        }else{
            var actualDate = new Date();
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithoutActualDate(Difference_In_Days);
        }

        var getClassForDiff = getClassByStatusForDiff(status);
        var getClassForStatus = getClassByStatusForStatus(status);

        if(status == "Open" && Difference_In_Days == "0"){
            getClassForDiff = "form-control rounded-input-grey";
            getClassForStatus1 = "form-control rounded-input-status-blue"
        }

        $("#PPAP_1_Status").val(status);
        $("#PPAP_1_Status").removeClass();
        $("#PPAP_1_Status").addClass(getClassForStatus);
        
        $("#PPAP_1_Difference").val(Difference_In_Days);
        $("#PPAP_1_Difference").removeClass();
        $("#PPAP_1_Difference").addClass(getClassForDiff);
    
    }
    if($("#PPAP_2_PlannedDate").val() != ""){

        var plannedDate = new Date($("#PPAP_2_PlannedDate").val());

        if($("#PPAP_2_ActualDate").val() != ""){
            var actualDate = new Date($("#PPAP_2_ActualDate").val());
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithActualDate(Difference_In_Days);
        }else{
            var actualDate = new Date();
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithoutActualDate(Difference_In_Days);
        }

        var getClassForDiff = getClassByStatusForDiff(status);
        var getClassForStatus = getClassByStatusForStatus(status);

        if(status == "Open" && Difference_In_Days == "0"){
            getClassForDiff = "form-control rounded-input-grey";
            getClassForStatus1 = "form-control rounded-input-status-blue"
        }

        $("#PPAP_2_Status").val(status);
        $("#PPAP_2_Status").removeClass();
        $("#PPAP_2_Status").addClass(getClassForStatus);
        
        $("#PPAP_2_Difference").val(Difference_In_Days);
        $("#PPAP_2_Difference").removeClass();
        $("#PPAP_2_Difference").addClass(getClassForDiff);
    
    }
    if($("#PPAP_3_PlannedDate").val() != ""){

        var plannedDate = new Date($("#PPAP_3_PlannedDate").val());

        if($("#PPAP_3_ActualDate").val() != ""){
            var actualDate = new Date($("#PPAP_3_ActualDate").val());
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithActualDate(Difference_In_Days);
        }else{
            var actualDate = new Date();
            var Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            var status = calStausWithoutActualDate(Difference_In_Days);
        }

        var getClassForDiff = getClassByStatusForDiff(status);
        var getClassForStatus = getClassByStatusForStatus(status);

        if(status == "Open" && Difference_In_Days == "0"){
            getClassForDiff = "form-control rounded-input-grey";
            getClassForStatus1 = "form-control rounded-input-status-blue"
        }

        $("#PPAP_3_Status").val(status);
        $("#PPAP_3_Status").removeClass();
        $("#PPAP_3_Status").addClass(getClassForStatus);
        
        $("#PPAP_3_Difference").val(Difference_In_Days);
        $("#PPAP_3_Difference").removeClass();
        $("#PPAP_3_Difference").addClass(getClassForDiff);
    
    }


}

function getDayDiffForGridView(plannedDate , actualDate){

    plannedDate = (plannedDate == null)?"":plannedDate;
    actualDate = (actualDate == null)?"":actualDate;
    var Difference_In_Days = 0;
    plannedDate = new Date(plannedDate);
   
    if(plannedDate != ""){
        if(actualDate != ""){
            actualDate = new Date(actualDate);
        }else{
            actualDate = new Date();
        }
        Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
    }
    if(isNaN(Difference_In_Days)){
        Difference_In_Days = 0;
    }
    return Difference_In_Days;
}

function getStatusForGridView(plannedDate , actualDate){

    plannedDate = (plannedDate == null)?"":plannedDate;
    actualDate = (actualDate == null)?"":actualDate;

    var status = "Open";
    var Difference_In_Days = 0;
    plannedDate = new Date(plannedDate);
    if(plannedDate != ""){
        if(actualDate != ""){
            actualDate = new Date(actualDate);
            Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            status = calStausWithActualDate(Difference_In_Days);
        }else{
            actualDate = new Date();
            Difference_In_Days = calDayOfDifference(plannedDate, actualDate);
            status = calStausWithoutActualDate(Difference_In_Days);
        }
    }
    return status;
}

function calDayOfDifference(plannedDate , actualDate){
    // To calculate the time difference of two dates
    var Difference_In_Time = actualDate.getTime() - plannedDate.getTime();
    // To calculate the no. of days between two dates
    var Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));

    return Difference_In_Days;
}

function calStausWithoutActualDate(dayOfDiff){
    if(dayOfDiff <= 0){
        return "Open";
    }else{
        return "Delayed";
    }
}

function calStausWithActualDate(dayOfDiff){
    if(dayOfDiff <= 0){
        return "Closed";
    }else{
        return "D Closed";
    }
}

function getClassByStatusForDiff(status){

    if(status == "Open"){
        return "input-diff form-control rounded-input-grey";
    }else if(status == "Delayed"){
        return "input-diff form-control rounded-input-error";
    }else if(status == "Closed"){
        return "input-diff form-control rounded-input-success";
    }else {
        return "input-diff form-control rounded-input-success";
    }
}

function getClassByStatusForStatus(status){
    if(status == "Open"){
        return "input-status rounded-input-status-blue form-control";
    }else if(status == "Delayed"){
        return "input-status rounded-input-status-red form-control";
    }else if(status == "Closed"){
        return "input-status rounded-input-status-green form-control";
    }else {
        return "input-status rounded-input-status-green form-control";
    }
}



