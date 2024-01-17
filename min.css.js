var currentURL = window.location.href;
var pathArray = currentURL.split('/');
var filenameWithExtension = pathArray.pop();
var filename = filenameWithExtension.split('.')[0];

if (filename !== 'index' && filename !== 'activities') {
        Swal.fire({
            title: "อาจเกิดข้อผิดพลาด",
            text: "การใช้งานโคดร่วมกับไฟล์อื่นหรือใช้ผิดไฟล์ อาจเกิดข้อผิดพลาดขึ้นได้ โปรดติดต่อผู้พัฒนา หากท่านต้องการแก้ไขไฟล์",
            icon: "warning"
        });
}
