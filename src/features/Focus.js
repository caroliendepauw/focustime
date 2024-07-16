import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors.js';
import {spacing} from '../utils/sizes';
import { RoundedButton } from '../components/RoundedButton';

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
        <SafeAreaView style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  button: {},
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
});
