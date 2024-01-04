

import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import BluetoothModule from './bluetoothmodule'; 

const BluetoothDeviceList = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    //  Bluetooth devices
    const fetchBluetoothDevices = async () => {
      try {
        const dummyDevices = [
          { id: '1', name: 'OPPOF11' },
          { id: '2', name: 'VIVO5' },
          { id: '3', name: 'REDMI5' },
        ];

        setDevices(dummyDevices);
      } catch (error) {
        console.error('Error fetching Bluetooth devices:', error);
      }
    };

    // Fetch Bluetooth devices when the component mounts
    fetchBluetoothDevices();
  }, []);

  return (
    <View style={styles.container}>
      {/* Bluetooth icon */}
      <Icon name="bluetooth" size={50} color="#333333" />
      {/* Text indicating available Bluetooth devices */}
      <Text style={styles.devicesHeader}>Available Bluetooth Devices:</Text>
      {devices.map((device) => (
        <Text key={device.id} style={styles.deviceText}>
          {device.name || 'Unknown Device'}
        </Text>
      ))}
      {/* Button to enable Bluetooth */}
      <Button
        title="Enable Bluetooth"
        onPress={() => BluetoothModule.enableBluetooth()}
        color="blue"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  devicesHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333333',
  },
  deviceText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555555',
  },
});

export default BluetoothDeviceList;
