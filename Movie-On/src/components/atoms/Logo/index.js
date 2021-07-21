import { StyleSheet, View , Image} from 'react-native';
import logoImage from '../../../../assets/logo.png';
import React from 'react';
import { LogoImage } from './styles';


export const Logo =() => {
    return (
        <LogoImage source= {logoImage}/>
    );
  }


const styles = StyleSheet.create({

    logo:{
      height:64,
      width:64
  
    },
  });