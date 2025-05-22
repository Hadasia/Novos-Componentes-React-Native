import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App() {
  const [selectedValue, setSelectedValue] = useState('opcao1');
  const [sliderValue, setSliderValue] = useState(30);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isTogglerOn, setIsTogglerOn] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Componentes</Text>

      // SLIDER 
      <Text style={styles.label}>Valor do Slider: {sliderValue.toFixed(0)}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={sliderValue}
        onValueChange={setSliderValue}
        minimumTrackTintColor="#0000FF"
        maximumTrackTintColor="#1E90FF"
        thumbTintColor="#1E90FF"
      />

      // SWITCH 
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Switch: {isSwitchOn ? 'Ligado' : 'Desligado'}</Text>
        <Switch
          value={isSwitchOn}
          onValueChange={setIsSwitchOn}
          trackColor={{ false: '#ADD8E6', true: '#ADD8E6' }}
          thumbColor={isSwitchOn ? '#1E90FF' : '#1E90FF'}
        />
      </View>

      // TOGGLER 
      <Text style={styles.label}>Toggler Customizado:</Text>
      <TouchableOpacity
        style={[styles.toggler, isTogglerOn ? styles.togglerOn : styles.togglerOff]}
        onPress={() => setIsTogglerOn(!isTogglerOn)}
        activeOpacity={0.8}
      >
        <Text style={styles.togglerText}>{isTogglerOn ? 'ON' : 'OFF'}</Text>
      </TouchableOpacity>

      // PICKER 
      <Text style={styles.label}>Escolha um estado civil: (Picker)</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={setSelectedValue}
          mode="dropdown"
          style={styles.picker}
        >
          <Picker.Item label="Casado" value="casado" />
          <Picker.Item label="Solteiro" value="Solteiro" />
          <Picker.Item label="Namorando" value="Namorando" />
          <Picker.Item label="Divorciado" value="Divorciado" />

        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0f6',
    paddingTop: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 30,
    color: '#1E90FF',
    ...Platform.select({
      ios: { fontFamily: 'arial' }
    }),
  },
  label: {
    fontSize: 18,
    color: '#ADD8E6',
    marginBottom: 10,
    fontWeight: '600',
  },
  pickerWrapper: {
    width: '100%',
    backgroundColor: '#1E90FF',
    borderRadius: 12,
    marginBottom: 30,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#1E90FF',
  },
  picker: {
    height: 50,
    width: '100%',
    color: '#ADD8E6',
  },
  slider: {
    width: '100%',
    height: 40,
    marginBottom: 30,
  },
  switchContainer: {
    width: '100%',
    backgroundColor: '#1E90FF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#1E90FF',
  },
  toggler: {
    width: 90,
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    alignSelf: 'center',
    shadowColor: '#1E90FF',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  togglerOn: {
    backgroundColor: '#1E90FF',
  },
  togglerOff: {
    backgroundColor: '#1E90FF',
  },
  togglerText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
});
