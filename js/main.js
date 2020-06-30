$(function () {
    $("#eyeshape img").click(function () {
        var X = $(this).attr("id").substr(1);
        $("#ans").attr("src", "image/眼睛/ans" + X + ".jpg");
    });
})

$(function () {
    $("#eyebrowshape img").click(function () {
        var X = $(this).attr("id").substr(1);
        $("#ans").attr("src", "image/眉毛/ans" + X + ".jpg");
    });
})

$(function () {
    $("#noseshape img").click(function () {
        var X = $(this).attr("id").substr(1);
        $("#ans").attr("src", "image/鼻子/ans" + X + ".jpg");
    });
})
$(function () {
    $("#mouthshape img").click(function () {
        var X = $(this).attr("id").substr(1);
        $("#ans").attr("src", "image/嘴巴/ans" + X + ".jpg");
    });
})
$(function () {
    $("#earshape img").click(function () {
        var X = $(this).attr("id").substr(2);
        $("#ans").attr("src", "image/耳朵/ans" + X + ".jpg");
    });
})