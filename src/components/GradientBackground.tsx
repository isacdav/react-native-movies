import React, {useContext, useEffect} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../context/GradientContext';
import useFade from '../hooks/useFade';

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const GradientBackground = ({children}: IProps) => {
  const {colors, prevColors, setPrevMainColors} = useContext(GradientContext);

  const {opacity, fadeIn, fadeOut} = useFade();

  useEffect(() => {
    fadeIn(() => {
      setPrevMainColors(colors);
      fadeOut(0);
    });
  }, [colors, fadeIn, fadeOut, setPrevMainColors]);

  return (
    <View style={styles.gradientContainer}>
      <LinearGradient
        style={styles.linearGradient}
        colors={[prevColors.primary, prevColors.secondary, 'white']}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.9, y: 0.7}}
      />

      <Animated.View style={{...StyleSheet.absoluteFillObject, opacity}}>
        <LinearGradient
          style={styles.linearGradient}
          colors={[colors.primary, colors.secondary, 'white']}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.9, y: 0.7}}
        />
      </Animated.View>

      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  linearGradient: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default GradientBackground;
