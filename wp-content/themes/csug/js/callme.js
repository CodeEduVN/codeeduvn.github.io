function check_empty() {
    if (document.getElementById('phone').value == "") {
        alert("Bạn vui lòng để lại số điện thoại để nhận được tư vấn nhé!");
        return false;
    }
    return true;
}

function div_show() {
    document.getElementById('popupModal').style.display = "block";
}

function div_hide() {
    document.getElementById('popupModal').style.display = "none";
}