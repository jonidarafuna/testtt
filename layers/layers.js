ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:9141").setExtent([7511671.270270, 4723908.961244, 7515913.969544, 4726018.986951]);
var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_Zonat_Kadastrale_Prishitne_1 = new ol.format.GeoJSON();
var features_Zonat_Kadastrale_Prishitne_1 = format_Zonat_Kadastrale_Prishitne_1.readFeatures(json_Zonat_Kadastrale_Prishitne_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9141'});
var jsonSource_Zonat_Kadastrale_Prishitne_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonat_Kadastrale_Prishitne_1.addFeatures(features_Zonat_Kadastrale_Prishitne_1);
var lyr_Zonat_Kadastrale_Prishitne_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonat_Kadastrale_Prishitne_1, minResolution:8.401339845678589,

                style: style_Zonat_Kadastrale_Prishitne_1,
                popuplayertitle: "Zonat_Kadastrale_Prishitne",
                interactive: true,
                title: '<img src="styles/legend/Zonat_Kadastrale_Prishitne_1.png" /> Zonat_Kadastrale_Prishitne'
            });
var format_StacionetBusit_2 = new ol.format.GeoJSON();
var features_StacionetBusit_2 = format_StacionetBusit_2.readFeatures(json_StacionetBusit_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9141'});
var jsonSource_StacionetBusit_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StacionetBusit_2.addFeatures(features_StacionetBusit_2);
var lyr_StacionetBusit_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StacionetBusit_2, 
                style: style_StacionetBusit_2,
                popuplayertitle: "StacionetBusit",
                interactive: true,
                title: '<img src="styles/legend/StacionetBusit_2.png" /> StacionetBusit'
            });
var format_Kufiri_Komunal_Prishitne_3 = new ol.format.GeoJSON();
var features_Kufiri_Komunal_Prishitne_3 = format_Kufiri_Komunal_Prishitne_3.readFeatures(json_Kufiri_Komunal_Prishitne_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9141'});
var jsonSource_Kufiri_Komunal_Prishitne_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kufiri_Komunal_Prishitne_3.addFeatures(features_Kufiri_Komunal_Prishitne_3);
var lyr_Kufiri_Komunal_Prishitne_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kufiri_Komunal_Prishitne_3, 
                style: style_Kufiri_Komunal_Prishitne_3,
                popuplayertitle: "Kufiri_Komunal_Prishitne",
                interactive: true,
                title: '<img src="styles/legend/Kufiri_Komunal_Prishitne_3.png" /> Kufiri_Komunal_Prishitne'
            });
var format_PikatTuristiketePrishtines_4 = new ol.format.GeoJSON();
var features_PikatTuristiketePrishtines_4 = format_PikatTuristiketePrishtines_4.readFeatures(json_PikatTuristiketePrishtines_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9141'});
var jsonSource_PikatTuristiketePrishtines_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PikatTuristiketePrishtines_4.addFeatures(features_PikatTuristiketePrishtines_4);
var lyr_PikatTuristiketePrishtines_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PikatTuristiketePrishtines_4, 
                style: style_PikatTuristiketePrishtines_4,
                popuplayertitle: "Pikat Turistike te Prishtines",
                interactive: true,
    title: 'Pikat Turistike te Prishtines<br />\
    <img src="styles/legend/PikatTuristiketePrishtines_4_0.png" /> Atraksion natyror<br />\
    <img src="styles/legend/PikatTuristiketePrishtines_4_1.png" /> Objekt fetar<br />\
    <img src="styles/legend/PikatTuristiketePrishtines_4_2.png" /> Objekt kulturor<br />'
        });

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_Zonat_Kadastrale_Prishitne_1.setVisible(true);lyr_StacionetBusit_2.setVisible(true);lyr_Kufiri_Komunal_Prishitne_3.setVisible(true);lyr_PikatTuristiketePrishtines_4.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_Zonat_Kadastrale_Prishitne_1,lyr_StacionetBusit_2,lyr_Kufiri_Komunal_Prishitne_3,lyr_PikatTuristiketePrishtines_4];
lyr_Zonat_Kadastrale_Prishitne_1.set('fieldAliases', {'CadastreZo': 'CadastreZo', 'CadastreZ0': 'CadastreZ0', 'CadastreZ1': 'CadastreZ1', 'CadastreZ2': 'CadastreZ2', 'CadastreZ3': 'CadastreZ3', 'CadastreZ4': 'CadastreZ4', 'Municipali': 'Municipali', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_StacionetBusit_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'Linja': 'Linja', 'Stacioni': 'Stacioni', });
lyr_Kufiri_Komunal_Prishitne_3.set('fieldAliases', {'Municipali': 'Municipali', 'Municipal0': 'Municipal0', 'Municipal1': 'Municipal1', 'Municipal2': 'Municipal2', 'Municipal3': 'Municipal3', 'StateId': 'StateId', 'Komuna': 'Komuna', });
lyr_PikatTuristiketePrishtines_4.set('fieldAliases', {'photo': 'photo', 'filename': 'filename', 'longitude': 'longitude', 'latitude': 'latitude', 'Emri': 'Emri', 'Kategoria': 'Kategoria', 'ZonaKad.': 'ZonaKad.', 'Lloji': 'Lloji', 'Nr.i Pikës': 'Nr.i Pikës', });
lyr_Zonat_Kadastrale_Prishitne_1.set('fieldImages', {'CadastreZo': 'TextEdit', 'CadastreZ0': 'TextEdit', 'CadastreZ1': 'TextEdit', 'CadastreZ2': 'TextEdit', 'CadastreZ3': 'TextEdit', 'CadastreZ4': 'TextEdit', 'Municipali': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': 'TextEdit', 'auxiliary_storage_labeling_lineanchorclipping': 'TextEdit', 'auxiliary_storage_labeling_lineanchortype': 'TextEdit', 'auxiliary_storage_labeling_lineanchortextpoint': 'TextEdit', });
lyr_StacionetBusit_2.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'Linja': 'TextEdit', 'Stacioni': 'TextEdit', });
lyr_Kufiri_Komunal_Prishitne_3.set('fieldImages', {'Municipali': 'TextEdit', 'Municipal0': 'TextEdit', 'Municipal1': 'TextEdit', 'Municipal2': 'TextEdit', 'Municipal3': 'TextEdit', 'StateId': 'TextEdit', 'Komuna': 'TextEdit', });
lyr_PikatTuristiketePrishtines_4.set('fieldImages', {'photo': 'ExternalResource', 'filename': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'Emri': 'TextEdit', 'Kategoria': 'TextEdit', 'ZonaKad.': 'TextEdit', 'Lloji': 'TextEdit', 'Nr.i Pikës': 'Range', });
lyr_Zonat_Kadastrale_Prishitne_1.set('fieldLabels', {'CadastreZo': 'no label', 'CadastreZ0': 'inline label - always visible', 'CadastreZ1': 'no label', 'CadastreZ2': 'no label', 'CadastreZ3': 'no label', 'CadastreZ4': 'no label', 'Municipali': 'no label', 'auxiliary_storage_labeling_lineanchorpercent': 'no label', 'auxiliary_storage_labeling_lineanchorclipping': 'no label', 'auxiliary_storage_labeling_lineanchortype': 'no label', 'auxiliary_storage_labeling_lineanchortextpoint': 'no label', });
lyr_StacionetBusit_2.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'Linja': 'no label', 'Stacioni': 'no label', });
lyr_Kufiri_Komunal_Prishitne_3.set('fieldLabels', {'Municipali': 'no label', 'Municipal0': 'no label', 'Municipal1': 'no label', 'Municipal2': 'no label', 'Municipal3': 'no label', 'StateId': 'no label', 'Komuna': 'inline label - always visible', });
lyr_PikatTuristiketePrishtines_4.set('fieldLabels', {'photo': 'no label', 'filename': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'Emri': 'no label', 'Kategoria': 'no label', 'ZonaKad.': 'no label', 'Lloji': 'no label', 'Nr.i Pikës': 'no label', });
lyr_PikatTuristiketePrishtines_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});