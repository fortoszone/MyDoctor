import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Header, Input, Button, Gap} from '../../components';

export default function Register({navigation}) {
  return (
    <View>
      <Header title={'Daftar Akun'} onPress={() => navigation.goBack()} />
      <View style={styles.page}>
        <Input label={'Full Name'} />
        <Gap height={24} />
        <Input label={'Pekerjaan'} />
        <Gap height={24} />
        <Input label={'Email Address'} />
        <Gap height={24} />
        <Input label={'Password'} />
        <Gap height={40} />
        <Button title={'Continue'} onPress={() => navigation.navigate('UploadPhoto')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {padding: 40, paddingTop: 0},
});
