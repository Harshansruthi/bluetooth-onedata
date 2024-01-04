// MainScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, Button, ActivityIndicator, Alert } from 'react-native';
import BluetoothDeviceList from './bluetoothdevicelist';
import { fetchDataFromApi } from './apiservice';
import styles from './mainscreenstyles';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the Bluetooth icon

const MainScreen = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleApiCall = async () => {
    try {
      setLoading(true);
      setError('');
     
      const apiData = await fetchDataFromApi();
      console.log('Data from API:', apiData);

      // Perform actions with the API data as needed

      Alert.alert('API Call Success', 'Data fetched successfully!');
    } catch (err) {
      console.error('Error fetching data from API:', err);
      setError('Failed to fetch data from the API.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Additional logic to run on component mount if needed
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.mainScreenText}></Text>
      <BluetoothDeviceList />
      <View style={styles.buttonContainer}>
        <Button
          title={loading ? 'Loading...' : 'Fetch Data from API'}
          onPress={handleApiCall}
          disabled={loading}
          color="#4CAF50"
        />
        {/* Add Bluetooth icon next to the button */}
        <Icon name="bluetooth" size={30} color="#4CAF50" />
      </View>
      {loading && <ActivityIndicator style={styles.loadingIndicator} size="large" color="#4CAF50" />}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default MainScreen;
