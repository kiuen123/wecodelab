// thông báo thời gian còn lại của trang web
setInterval(() => {
    let ngayketthuc = new Date(2023, 5, 19, 0, 0, 0, 0);
    let hientai = new Date();
    let thoigianconlai = ngayketthuc.getTime() - hientai.getTime();
    let thoigianconlai_ngay = Math.floor(thoigianconlai / (1000 * 60 * 60 * 24));
    let thoigianconlai_gio = Math.floor(
        (thoigianconlai - thoigianconlai_ngay * 1000 * 60 * 60 * 24) / (1000 * 60 * 60)
    );
    let thoigianconlai_phut = Math.floor(
        (thoigianconlai - thoigianconlai_ngay * 1000 * 60 * 60 * 24 - thoigianconlai_gio * 1000 * 60 * 60) / (1000 * 60)
    );
    let thoigianconlai_giay = Math.floor(
        (thoigianconlai -
            thoigianconlai_ngay * 1000 * 60 * 60 * 24 -
            thoigianconlai_gio * 1000 * 60 * 60 -
            thoigianconlai_phut * 1000 * 60) /
            1000
    );
    let date =
        thoigianconlai_ngay +
        " ngày " +
        thoigianconlai_gio +
        " giờ " +
        thoigianconlai_phut +
        " phút " +
        thoigianconlai_giay +
        " giây";

    let timeleft = document.getElementById("timeleft");
    timeleft.innerHTML = date;
}, 1000);
