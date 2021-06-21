(function() {
    let el = document.querySelectorAll('.skill');
    for (let i = 0; i < el.length; i++) {
        var options = {
            percent: el[i].getAttribute('data-percent') || 25,
            size: el[i].getAttribute('data-size') || 220,
            text: el[i].getAttribute('data-text') || 220,
            lineWidth: el[i].getAttribute('data-line') || 10,
            rotate: el[i].getAttribute('data-rotate') || 0
        }

        let canvas = document.createElement('canvas');
        let span = document.createElement('span');
        span.classList.add('skill__text');
        span.textContent = options.text;

        if (typeof(G_vmlCanvasManager) !== 'undefined') {
            G_vmlCanvasManager.initElement(canvas);
        }

        var ctx = canvas.getContext('2d');
        canvas.width = canvas.height = options.size;

        el[i].appendChild(span);
        el[i].appendChild(canvas);

        ctx.translate(options.size / 2, options.size / 2);
        ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI);

        //imd = ctx.getImageData(0, 0, 240, 240);
        var radius = (options.size - options.lineWidth) / 2;

        var drawCircle = function(color, lineWidth, percent) {
            percent = Math.min(Math.max(0, percent || 1), 1);
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
            ctx.strokeStyle = color;
            ctx.lineWidth = lineWidth
            ctx.stroke();
        };

        drawCircle('hsla(0,0%,100%,.3)', 1, 100 / 100);
        drawCircle('#dc9322', options.lineWidth, options.percent / 100);

    }
})()