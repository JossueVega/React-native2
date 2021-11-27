import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import moment from 'moment-timezone';

const FutureForecast = ({ data }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {data && data.length > 0 ? (
        data.map(
          (data, idx) =>
            idx !== 0 && <FutureForecastItem key={idx} forecastItem={data} />
        )
      ) : (
        <View />
      )}
    </View>
  );
};

const FutureForecastItem = ({ forecastItem }) => {
  const img = {
    uri:
      'http://openweathermap.org/img/wn/' +
      forecastItem.weather[0].icon +
      '@2x.png',
  };
  return (
    <View style={styles.futureForecastItemContainer}>
      <Text style={styles.day}>
        {moment(forecastItem.dt * 1000).format('ddd')}
      </Text>
      <Image source={img} style={styles.image} />
      <Text style={styles.temp}>Noche - {forecastItem.temp.night}&#176;C</Text>
      <Text style={styles.temp}>Dia - {forecastItem.temp.day}&#176;C</Text>
    </View>
  );
};

export default FutureForecast;

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 60,
  },
  futureForecastItemContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#3c3c44',
    borderRadius: 15,
    borderColor: '#eee',
    borderWidth: 1,
    padding: 20,
    marginLeft: 10,
  },
  day: {
    fontSize: 20,
    color: 'white',
    backgroundColor: '#3c3c44',
    padding: 10,
    textAlign: 'center',
    borderRadius: 50,
    fontWeight: '200',
    marginBottom: 10,
  },
  temp: {
    fontSize: 12,
    color: 'white',
    fontWeight: '100',
    textAlign: 'center',
  },
});
