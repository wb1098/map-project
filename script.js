var mapSpots = [];
var spotMap = function (id, xLoc, yLoc, note) {
    this.id = id;
    this.xLoc = xLoc + 'px';
    this.yLoc = yLoc + 'px';
    this.note = note;
    this.seen = true;
}

var headerMsg = new Vue({
    el: '#hdrMsg',
    data: {
        message: 'Map It App - Find It, Mark It and Note It!'
    }
});


var cnt = 0;
var newV = new Vue({
    el: '#mapBase',
    data: {
        mapPins: mapSpots,
    },
    methods: {
        onClick: function (e) {
            if (e.target.id !== "mpin") {
                var notes = prompt('Enter your Map Pin Note Here', 'New Map Pin Notes')
                var spot = new spotMap(cnt++, e.layerX, e.layerY, notes);
                mapSpots.push(spot);
            }

        },
        removePin: function (event, spot, index) {
            spot.seen = false;
        }

    }

})
