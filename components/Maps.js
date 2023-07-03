import { TouchableOpacity, Linking, Platform } from "react-native";
import React from "react";
import MapView from 'react-native-maps';

export default function Maps({location}) {
  const openMaps = () => {
    const url = Platform.select({
      ios: `http://maps.apple.com/?ll=${location.latitude},${location.longitude}`,
      android: `http://maps.google.com/?q=${location.latitude},${location.longitude}`,
    });
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        }
      })
      .catch((err) => {
        console.error("An error occurred", err);
      });
  };

  return (
    <TouchableOpacity
      onPress={openMaps}
      style={{ backgroundColor: "gray", width: 200, height: 200, borderRadius:14 }}
    >
      <MapView
        style={{ height: 200, width: 200, borderTopEndRadius:14 }}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
        }}
        annotations={[
          {
            latitude: location.latitude,
            longitude: location.longitude,
          },
        ]}
        scrollEnabled={false}
        zoomEnabled={false}
      />
    </TouchableOpacity>
  );
}
