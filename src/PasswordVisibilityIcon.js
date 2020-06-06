import React from 'react';
import { TouchableOpacity } from 'react-native';
import IconHide from './icons/IconHide';
import IconShow from './icons/IconShow';

export default function PasswordVisibilityIcon({ showPassword, onIconTapped }) {
  return (
    <TouchableOpacity
        onPress={onIconTapped}
        hitSlop={{ top: 16, left: 16, bottom: 16, right: 16 }}
        style={{
            right: 0,
            position: 'absolute',
            top: 10,
            zIndex: 1,
        }}
    >
        {showPassword? <IconShow/> : <IconHide/>}
    </TouchableOpacity>
  );
}
