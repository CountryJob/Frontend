import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, PermissionsAndroid, Platform } from 'react-native';
import WebView, { WebView as WebViewType } from 'react-native-webview';
import Geolocation from 'react-native-geolocation-service';

const HTML = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>
      html, body, #map {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
    <script src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=ee7ba5b1ae7a6d4493fbefadc0859e61&autoload=false"></script>
  </head>
  <body>
    <div id="map"></div>
    <script>
      let map;
      function createMap(lat, lon) {
        const container = document.getElementById('map');
        const options = {
          center: new kakao.maps.LatLng(lat, lon),
          level: 3
        };
        map = new kakao.maps.Map(container, options);

        new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(lat, lon)
        });
      }

      window.addEventListener("message", function(event) {
        try {
          const data = JSON.parse(event.data);
          if (data.type === "location") {
            kakao.maps.load(function () {
              createMap(data.lat, data.lon);
            });
          }
        } catch (e) {
          console.error("JSON parse error", e);
        }
      });
    </script>
  </body>
</html>`;

export default function MapScreen() {
  const webviewRef = useRef<WebViewType>(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.log('❌ 위치 권한 거부됨');
          return;
        }
      }

      const watchId = Geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log('📍 위치:', latitude, longitude);
          const jsCode = `
            window.postMessage(JSON.stringify({
              type: "location",
              lat: ${latitude},
              lon: ${longitude}
            }), "*"); true;
          `;
          webviewRef.current?.injectJavaScript(jsCode);
        },
        (error) => {
          console.log('❌ 위치 에러:', error.message);
        },
        {
          enableHighAccuracy: true,
          distanceFilter: 0,
          interval: 5000,
          fastestInterval: 2000,
          forceRequestLocation: true, // 중요: 강제로 fresh 위치 요청
          showLocationDialog: true,
        }
      );

      return () => {
        if (watchId != null) {
          Geolocation.clearWatch(watchId);
        }
      };
    })();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <WebView
        ref={webviewRef}
        originWhitelist={['*']}
        source={{ html: HTML }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        geolocationEnabled={true}
        allowFileAccess={true}
        allowUniversalAccessFromFileURLs={true}
        style={StyleSheet.absoluteFill}
      />
    </View>
  );
}
