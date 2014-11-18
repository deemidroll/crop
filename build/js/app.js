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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EbWl0cnkvcHJvamVjdHMvaGVsaWNvcHRlci9jcm9wL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL0RtaXRyeS9wcm9qZWN0cy9oZWxpY29wdGVyL2Nyb3Avc3JjL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIkKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJHNlbGVjdEJ0biA9ICQoJyNzZWxlY3RJbWcnKSxcbiAgICAgICAgJHVwbG9hZEJ0biA9ICQoJyN1cGxvYWRJbWcnKSxcbiAgICAgICAgJGlucHV0RmlsZSA9ICQoJyNmaWxlSW1nJyksXG4gICAgICAgICRpbnB1dENvb3JkcyA9ICQoJyNjb29yZHNJbWcnKSxcbiAgICAgICAgJGpjcm9wVGFyZ2V0ID0gJCgnI2pjcm9wVGFyZ2V0JyksXG4gICAgICAgIGRhdGEgPSB7fTtcblxuICAgIGZ1bmN0aW9uIHJlYWRVUkwoaW5wdXQsIGNiKSB7XG4gICAgICAgIGlmIChpbnB1dC5maWxlcyAmJiBpbnB1dC5maWxlc1swXSkge1xuICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyB3aW5kb3cuRmlsZVJlYWRlcigpO1xuXG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihlLnRhcmdldC5yZXN1bHQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGlucHV0LmZpbGVzWzBdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldENvb3JkcyhjKSB7XG4gICAgICAgIHZhciBuYXR1cmFsVyA9ICRqY3JvcFRhcmdldFswXS53aWR0aCxcbiAgICAgICAgICAgIGRpc3BhbHlXID0gJGpjcm9wVGFyZ2V0LndpZHRoKCksXG4gICAgICAgICAgICByYXRlID0gbmF0dXJhbFcvZGlzcGFseVc7XG5cbiAgICAgICAgZGF0YS54ID0gYy54ICogcmF0ZTtcbiAgICAgICAgZGF0YS55ID0gYy55ICogcmF0ZTtcbiAgICAgICAgZGF0YS53ID0gYy53ICogcmF0ZTtcbiAgICAgICAgZGF0YS5oID0gYy5oICogcmF0ZTtcbiAgICAgICAgJGlucHV0Q29vcmRzWzBdLnZhbHVlID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuXG4gICAgJHNlbGVjdEJ0bi5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICRpbnB1dEZpbGUudHJpZ2dlcignY2xpY2snKTtcbiAgICB9KTtcblxuICAgICRpbnB1dEZpbGUub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVhZFVSTCh0aGlzLCBmdW5jdGlvbih1cmwpIHtcbiAgICAgICAgICAgICRqY3JvcFRhcmdldC5hdHRyKCdzcmMnLCB1cmwpO1xuICAgICAgICAgICAgdmFyIGltZ1cgPSAkamNyb3BUYXJnZXQud2lkdGgoKTtcblxuICAgICAgICAgICAgJGpjcm9wVGFyZ2V0Lkpjcm9wKHtcbiAgICAgICAgICAgICAgICBvblNlbGVjdDogc2V0Q29vcmRzLFxuICAgICAgICAgICAgICAgIGFzcGVjdFJhdGlvOiA0LzMsXG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0OiBbKChpbWdXLzIpLTYwKSwgNjAsICgoaW1nVy8yKSs2MCksIDIyMCBdLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgJHVwbG9hZEJ0bi5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkaW5wdXRGaWxlWzBdICYmICEkaW5wdXRGaWxlWzBdLmZpbGVzWzBdKSB7XG4gICAgICAgICAgICBhbGVydCgn0YTQsNC50Lsg0L3QtSDQstGL0LHRgNCw0L0nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgd2luZG93LkZvcm1EYXRhKCk7XG5cbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgJGlucHV0RmlsZVswXS5maWxlc1swXSk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndGV4dCcsICRpbnB1dENvb3Jkc1swXS52YWx1ZSk7XG5cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6J1BPU1QnLFxuICAgICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhLFxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICAgICAgY29udGVudFR5cGU6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdzdWNjZXNzJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKTtcbiAgICAgICAgICAgICAgICBhbGVydCgnZXJyb3InKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTsiXX0=
