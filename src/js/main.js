$(function () {
    var $selectBtn = $('#selectImg'),
        $uploadBtn = $('#uploadImg'),
        $inputFile = $('#fileImg'),
        $inputCoords = $('#coordsImg'),
        $jcropTarget = $('#jcropTarget'),
        data = {};

    function readURL(input, cb) {
        if (input.files && input.files[0]) {
            var reader = new window.FileReader();

            reader.onload = function (e) {
                if (typeof cb === 'function') cb(e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    }

    function setCoords(c) {
        var naturalW = $jcropTarget[0].width,
            dispalyW = $jcropTarget.width(),
            rate = naturalW/dispalyW;

        data.x = c.x * rate;
        data.y = c.y * rate;
        data.w = c.w * rate;
        data.h = c.h * rate;
        $inputCoords[0].value = JSON.stringify(data);
    }

    $selectBtn.click(function () {
        $inputFile.trigger('click');
    });

    $inputFile.on('change', function () {
        readURL(this, function(url) {
            $jcropTarget.attr('src', url);
            var imgW = $jcropTarget.width();

            $jcropTarget.Jcrop({
                onSelect: setCoords,
                aspectRatio: 4/3,
                setSelect: [((imgW/2)-60), 60, ((imgW/2)+60), 220 ],
            });
        });
    });

    $uploadBtn.click(function () {
        if ($inputFile[0] && !$inputFile[0].files[0]) {
            alert('файл не выбран');
            return;
        }
        var formData = new window.FormData();

        formData.append('file', $inputFile[0].files[0]);
        formData.append('text', $inputCoords[0].value);

        $.ajax({
            type:'POST',
            url: '',
            data: formData,
            cache: false,
            contentType: 'multipart/form-data',
            processData: false,
            success: function () {
                console.log('success');
                alert('success');
            },
            error: function () {
                console.log('error');
                alert('error');
            }
        });
    });
});