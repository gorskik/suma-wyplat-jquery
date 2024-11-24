$('document').ready(function() {
    $('#count-sum').on('click', function() {
        let totalSum = 0;

        $('.salary').each(function() {
            totalSum += parseFloat($(this).text());
        });

        $('#sum').text(totalSum);
    });
});