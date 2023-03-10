import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import { colors, fonts } from '../../utils';

export default function Login() {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label={'Email Address'} />
      <Gap height={24} />
      <Input label={'Password'} />
      <Gap height={10} />
      <Link title={'Forgot My Password'} size={12} />
      <Gap height={40} />
      <Button title={'Sign In'} />
      <Gap height={30} />
      <Link title={'Create New Account'} size={16} align={'center'} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {padding: 40, flex: 1},
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    marginVertical: 40,
    color: colors.secondary,
    maxWidth: 153,
  },
});
