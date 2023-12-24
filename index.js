var jpdbBaseURL = 'http://api.login2explore.com:5577';
var jpdbIRL = '/api/irl';
var jpdbIML = '/api/iml';
var collegeDBName = 'COLLEGE-DB';
var projectRelationName = 'PROJECT-TABLE';
var connToken = '90931933|-31949300184543313|90960847';

$('#Pid').focus();

function saveRecNo2LS(jsonObj) {
    var lvData = JSON.parse(jsonObj.data);
    localStorage.setItem('recno', lvData.rec_no);
}

function getProjectIDAsJsonObj() {
    var pId = $('#Pid').val();
    var jsonStr = {
        Pid: pId
    };
    return JSON.stringify(jsonStr);
}

function fillData(jsonObj) {
    saveRecNo2LS(jsonObj);
    var record = JSON.parse(jsonObj.data).record;
    $("#Pname").val(record.Pname);
    $('#assign').val(record.assign);
    $('#assign_date').val(record.assign_date);
    $("#deadline").val(record.enrollment_date);
}

function resetForm() {
    $('#Pid').val("");
    $('#Pname').val("");
    $('#assign').val("");
    $('#assign_date').val("");
    $('#deadline').val("");
    $('#Pid').prop("disabled", false);
    $('#save').prop("disabled", true);
    $('#change').prop("disabled", true);
    $('#reset').prop("disabled", true);
    $('#Pid').focus();
}

function validateData() {
    var ProjectId, ProjectName, Assign, Assignment_date, Deadline;
    ProjectId = $("#Pid").val();
    ProjectName = $("#Pname").val();
    Assign = $("#assign").val();
    Assignment_date = $("assign_date").val();
    Deadline = $("#deadline").val();

    if (ProjectId == '') {
        alert("Project id. missing");
        $("#Pid").focus();
        return "";
    }
    if (ProjectName == '') {
        alert("Project Name missing");
        $("#Pname").focus();
        return "";
    }
    if (Assign == '') {
        alert("Assign_to missing");
        $("#assign").focus();
        return "";
    }
    if (Assignment_date == '') {
        alert("Assignment date missing");
        $("#assign_date").focus();
        return "";
    }
    if (Deadline == '') {
        alert("Deadline missing");
        $("#deadline").focus();
        return "";
    }

     var jsonStrObj = {
        Pid:ProjectId ,
        Pname:ProjectName ,
        assign:Assign,
        assign_date:Assignment_date,
       deadline:Deadline       
   };
    return JSON.stringify(jsonStrObj);
}

function getProject() {
    var projectNoJsonObj = getProjectIDAsJsonObj();
    var getRequest = createGET_BY_KEYRequest(connToken, collegeDBName, projectRelationName,projectNoJsonObj );
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(getRequest, jpdbBaseURL, jpdbIRL);
    jQuery.ajaxSetup({async: true});
    if (resJsonObj.status == 400) {
        $('#save').prop('disabled', false);
        $('#reset').prop('disabled', false);
        $('#Pname').focus();

    } else if (resJsonObj.status == 200) {
        $('#Pid').prop('disabled', true);
        fillData(resJsonObj);
        $('#change').prop('disabled', false);
        $('#reset').prop('disabled', false);
        $('#Pname').focus();
    }
}

function saveData() {
    var jsonStrObj = validateData();
    if (jsonStrObj == '') {
        return "";
    }
    var putRequest = createPUTRequest(connToken, jsonStrObj, collegeDBName, projectRelationName);
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(putRequest, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({async: true});
    resetForm();
    $('#Pid').focus();
}

function changeData() {
    $('#change').prop("disabled", true);
    jsonChg = validateData();
    var updateRequest = createUPDATERecordRequest(connToken, jsonChg, collegeDBName, projectRelationName, localStorage.getItem("recno"));
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(updateRequest, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({async: true});
    console.log(resJsonObj);
    resetForm();
    $('#Pid').focus();
}
