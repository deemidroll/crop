/* Made by deemidroll | 2014 | deemidroll@gmail.com */
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
            console.log(rate);

        data.x = Math.ceil(c.x * rate);
        data.y = Math.ceil(c.y * rate);
        data.w = Math.ceil(c.w * rate);
        data.h = Math.ceil(c.h * rate);
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
                aspectRatio: 3.6860465116,
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EbWl0cnkvcHJvamVjdHMvaGVsaWNvcHRlci9jcm9wL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL0RtaXRyeS9wcm9qZWN0cy9oZWxpY29wdGVyL2Nyb3Avc3JjL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiQoZnVuY3Rpb24gKCkge1xuICAgIHZhciAkc2VsZWN0QnRuID0gJCgnI3NlbGVjdEltZycpLFxuICAgICAgICAkdXBsb2FkQnRuID0gJCgnI3VwbG9hZEltZycpLFxuICAgICAgICAkaW5wdXRGaWxlID0gJCgnI2ZpbGVJbWcnKSxcbiAgICAgICAgJGlucHV0Q29vcmRzID0gJCgnI2Nvb3Jkc0ltZycpLFxuICAgICAgICAkamNyb3BUYXJnZXQgPSAkKCcjamNyb3BUYXJnZXQnKSxcbiAgICAgICAgZGF0YSA9IHt9O1xuXG4gICAgZnVuY3Rpb24gcmVhZFVSTChpbnB1dCwgY2IpIHtcbiAgICAgICAgaWYgKGlucHV0LmZpbGVzICYmIGlucHV0LmZpbGVzWzBdKSB7XG4gICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IHdpbmRvdy5GaWxlUmVhZGVyKCk7XG5cbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKGUudGFyZ2V0LnJlc3VsdCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoaW5wdXQuZmlsZXNbMF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0Q29vcmRzKGMpIHtcbiAgICAgICAgdmFyIG5hdHVyYWxXID0gJGpjcm9wVGFyZ2V0WzBdLndpZHRoLFxuICAgICAgICAgICAgZGlzcGFseVcgPSAkamNyb3BUYXJnZXQud2lkdGgoKSxcbiAgICAgICAgICAgIHJhdGUgPSBuYXR1cmFsVy9kaXNwYWx5VztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJhdGUpO1xuXG4gICAgICAgIGRhdGEueCA9IE1hdGguY2VpbChjLnggKiByYXRlKTtcbiAgICAgICAgZGF0YS55ID0gTWF0aC5jZWlsKGMueSAqIHJhdGUpO1xuICAgICAgICBkYXRhLncgPSBNYXRoLmNlaWwoYy53ICogcmF0ZSk7XG4gICAgICAgIGRhdGEuaCA9IE1hdGguY2VpbChjLmggKiByYXRlKTtcbiAgICAgICAgJGlucHV0Q29vcmRzWzBdLnZhbHVlID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuXG4gICAgJHNlbGVjdEJ0bi5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICRpbnB1dEZpbGUudHJpZ2dlcignY2xpY2snKTtcbiAgICB9KTtcblxuICAgICRpbnB1dEZpbGUub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVhZFVSTCh0aGlzLCBmdW5jdGlvbih1cmwpIHtcbiAgICAgICAgICAgICRqY3JvcFRhcmdldC5hdHRyKCdzcmMnLCB1cmwpO1xuICAgICAgICAgICAgdmFyIGltZ1cgPSAkamNyb3BUYXJnZXQud2lkdGgoKTtcblxuICAgICAgICAgICAgJGpjcm9wVGFyZ2V0Lkpjcm9wKHtcbiAgICAgICAgICAgICAgICBvblNlbGVjdDogc2V0Q29vcmRzLFxuICAgICAgICAgICAgICAgIGFzcGVjdFJhdGlvOiAzLjY4NjA0NjUxMTYsXG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0OiBbKChpbWdXLzIpLTYwKSwgNjAsICgoaW1nVy8yKSs2MCksIDIyMCBdLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgJHVwbG9hZEJ0bi5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkaW5wdXRGaWxlWzBdICYmICEkaW5wdXRGaWxlWzBdLmZpbGVzWzBdKSB7XG4gICAgICAgICAgICBhbGVydCgn0YTQsNC50Lsg0L3QtSDQstGL0LHRgNCw0L0nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgd2luZG93LkZvcm1EYXRhKCk7XG5cbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgJGlucHV0RmlsZVswXS5maWxlc1swXSk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndGV4dCcsICRpbnB1dENvb3Jkc1swXS52YWx1ZSk7XG5cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6J1BPU1QnLFxuICAgICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhLFxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICAgICAgY29udGVudFR5cGU6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdzdWNjZXNzJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKTtcbiAgICAgICAgICAgICAgICBhbGVydCgnZXJyb3InKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTsiXX0=
