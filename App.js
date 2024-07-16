import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory';

export default function App() {
  const [currenSubject, setCurrentSubject] = useState('null');
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currenSubject ? (
        <>
        <Focus addSubject={setCurrentSubject} />
        <FocusHistory history={history}/>
        </>

      ) : (
        <Timer 
          focusSubject={currenSubject}
          onTimerEnd={(subject)=>{
            setHistory([...history, subject])
          }}
          clearSubject={()=>setCurrentSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
