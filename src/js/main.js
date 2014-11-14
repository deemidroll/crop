$(function () {
    var $selectBtn = $('#selectImg'),
        // $uploadBtn = $('#uploadImg'),
        $inputFile = $('#fileImg'),
        $jcropTarget = $('#jcropTarget');

    function readURL(input, cb) {
        if (input.files && input.files[0]) {
            var reader = new window.FileReader();

            reader.onload = function (e) {
                if (typeof cb === 'function') cb(e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    }

    $selectBtn.click(function () {
        $inputFile.trigger('click');
    });

    $inputFile.on('change', function () {
        readURL(this, function(url) {
            $jcropTarget.attr('src', url);
            $jcropTarget.Jcrop({
                aspectRatio: 1
            });
        });
    });
});