var size = 0;
var placement = 'point';

var style_Zonat_Kadastrale_Prishitne_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#ffd56b";
    var bufferColor = "#fafafa";
    var bufferWidth = 0.2;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(223,206,242,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.95}),fill: new ol.style.Fill({color: 'rgba(229,182,54,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
