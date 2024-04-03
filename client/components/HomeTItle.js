import React from 'react';
import { WebView, StyleSheet, Text, View } from 'react-native';

    

const Title = () => {
    
  return (
    <View style={styles.container}>
        <text style={styles.titleText}>
            UwUcoms
        </text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10 
  },
});

export default Title;
