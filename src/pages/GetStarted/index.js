import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {ILLogo, ILGetStarted} from '../../assets';
import {Button, Gap} from '../../components';

export default function GetStarted({navigation}) {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Button
          type="secondary"
          title="Sign In"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {padding: 40, justifyContent: 'space-between', flex: 1},
  title: {
    fontSize: 28,
    color: 'black',
    marginTop: 91,
    color: 'white',
    fontFamily: 'Nunito-SemiBold',
  },
});
