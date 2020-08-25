// //import react
// import React from "react";

// //
// // more info, see my post on http://stackoverflow.com/questions/27203977/google-api-address-components
// const getCity=(geocodeResponse) =>{
//    type = "locality";  //the function will look through the results and find a component with type = 'locatily'.  Then it returns that
//   for( i=0; i < geocodeResponse.address_components.length; i++) {
//     for ( j=0; j < geocodeResponse.address_components[i].types.length; j++) {
//       if (geocodeResponse.address_components[i].types[j] == type) {
//         return geocodeResponse.address_components[i].long_name;
//       }
//     }
//   }
//   return '';
// }

// const GetCityName =(props)=> {
// latlon = new google.maps.LatLng(lat, lon);
//     // okay, now we have the position (as a google maps latLng object),
//     // now we send this position to geocoder
//     // @see  https://developers.google.com/maps/documentation/javascript/geocoding
//     geocoder = new google.maps.Geocoder();
//     // geocoder.geocode({'latLng': latlon}, function(results, status) {
//     //   if (status == google.maps.GeocoderStatus.OK) {
//     //     var city = getCity(results[0]);
//     //     x.innerHTML = 'city: ' + city;
//     //   }
//     // }

// if (status == google.maps.GeocoderStatus.OK) {
//         var city = getCity(results[0]);
//    return(
//        <div>
//          <br />
//         <div className="ui horizontal label">Longitude: </div>
//         <span>{props.longitude}</span>
//        </div>
//    );
// }
//   };
// export default GetCityName;
