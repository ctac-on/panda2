(function($){
    let rgb = [40, 50, 100];
    let color = ["#ef2929", "#8ae234", "#729fcf"];
    let css = ['background', "color"]
    let currenColor = 0,
        currenCss = 0;

    //смена цвета
    $('#radio2 input[type="radio"]').click(function (){
        currenColor = $(this).val();
        $('#slider1').slider("value", rgb[$(this).val()]);
        $('#slider1 .ui-slider-range').css('background', color[$(this).val()]);
    });

    //смена css
    $('#radio1 input[type="radio"]').click(function (){
        currenCss = $(this).val();
    });

    function hexFromRGB(r, g, b) {
        let hex = [
            r.toString(16),
            g.toString(16),
            b.toString(16)
        ];
        $.each(hex, function (nr, val) {
            if (val.length === 1) {
                hex[nr] = "0" + val;
            }
        });
        return hex.join("").toUpperCase();
    }

    function refreshSwatch() {
        let v = $('#slider1').slider('value');
        rgb[currenColor] = v;
        let hex = hexFromRGB(rgb[0], rgb[1], rgb[2]);
        $('#block').css(css[currenCss], "#"+hex);
    }
    //слайдер ui
    $("#slider1").slider({
        orientation: "horizontal",
        range: "min",
        max: 255,
        value: 0,
        slide: refreshSwatch,
        change: refreshSwatch
    });

    //при загрузке
    if ($('#radio2 input[type="radio"]').is(':checked')) {
        let chk = $('#radio2 input[type="radio"]:checked').val();
        currenColor = chk;
        $('#slider1').slider("value", rgb[chk]);
        $('#slider1 .ui-slider-range').css('background', color[chk]);
    } else {
        $('#radio2 #radio-1').prop('checked', true);
        $('#slider1').slider("value", rgb[0]);
        $('#slider1 .ui-slider-range').css('background', color[0]);
    }
    if ($('#radio1 input[type="radio"]').is(':checked')) {
        let chk = $('#radio1 input[type="radio"]:checked').val();
        currenCss = chk;
    } else {
        $('#radio1 #css1').prop('checked', true);
    }

    //радио кнопки ui
    $("input").checkboxradio();
})(jQuery)
