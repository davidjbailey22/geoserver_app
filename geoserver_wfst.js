/**
 * Adding spatial records to PostGIS via Geoserver WFS-T
 * By D. Bailey
 */

// Intiate jquery
$(document).ready(function (){

  var post_wfs = 'http://host:8080/geoserver/workspace_name/wfs';

  // build XML for WFST
  var postData =
          '<wfs:Transaction\n'
     + '  service="WFS"\n'
     + '  version="1.1.0"\n'
     + '  xmlns:workspace_name="http://host:8080/geoserver/workspace_name"\n'
     + '  xmlns:wfs="http://www.opengis.net/wfs"\n'
     + '  xmlns:gml="http://www.opengis.net/gml"\n'
     + '  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n'
     + '  xsi:schemaLocation="http://www.opengis.net/wfs\n'
     + '                      http://schemas.opengis.net/wfs/1.1.0/WFS-transaction.xsd\n'
    + '                      http://host:8080/geoserver/workspace_name\n'
     + '                      http://host:8080/geoserver/workspace_name/wfs/DescribeFeatureType?typename=workspace_name:layer_name">\n'
     + '  <wfs:Insert>\n'
     + '    <layer_name>\n'
     + '      <workspace_name:point>\n' //name of geometry field
     + '        <gml:Point srsDimension="2" srsName="urn:x-ogc:def:crs:EPSG:4326">\n'
     + '          <gml:coordinates decimal="." cs="," ts=" ">' + "lat" + ',' + "lng" + '</gml:coordinates>\n'
     + '        </gml:Point>\n'
     + '      </workspace_name:point>\n'
    + '      <workspace_name:field_name1>value</workspace_name:field_name1>\n'
    + '      <workspace_name:field_name2>value</workspace_name:field_name2>\n'
     + '    </layer_name>\n'
     + '  </wfs:Insert>\n'
     + '</wfs:Transaction>';

    // AJAX to post XML data
    $.ajax({
        type: "POST",
        url: post_wfs,
        dataType: "xml",
        contentType: "text/xml",
        data: postData,
        //: Error handling
        success: function(xml) {
         console.log("success")
        //TODO: User feedback
    }

});// end Javascript
