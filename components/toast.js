import { ToastAndroid, Platform, AlertIOS } from 'react-native';

export default function notifyMessage(msg) {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  } else {
    AlertIOS.alert(msg);
  }
}
