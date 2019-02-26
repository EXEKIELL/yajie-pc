$(function () {
    $('.csBox select').change(function () {
        $(this).prev('p').text($(this).val());
    });
});