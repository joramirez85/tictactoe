import React, { useEffect, useRef, memo } from 'react';
import { Animated, Dimensions, TouchableOpacity } from 'react-native';
import styles from './style';
import { CrossIcon } from '../../Icons';
import { Colors } from '../../../constants/Colors';

const Modal = ({ children, open = false, dismiss, closeIcon = true }) => {
  const animation = useRef(new Animated.Value(0)).current;
  const animationMarginTop = useRef(new Animated.Value(0)).current;
  const { height } = Dimensions.get('window');

  useEffect(() => {
    if (open) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();

      Animated.timing(animationMarginTop, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }).start();
    }
  }, [open]);

  const opacityStyle = {
    opacity: animation,
  };

  const marginStyle = {
    marginTop: animationMarginTop,
  };

  const close = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();

    Animated.timing(animationMarginTop, {
      toValue: height,
      duration: 100,
      useNativeDriver: false,
    }).start();
    setTimeout(() => dismiss(false), 200)
  };

  return (
    <>
      {
        open &&
        <TouchableOpacity style={styles.touchableArea} activeOpacity={1} onPress={close}>
          <Animated.View style={[styles.modalContainer, opacityStyle]}>
            <TouchableOpacity
              style={{ width: '90%' }}
              activeOpacity={1}
              onPress={(e) => e.stopPropagation()}
            >
              <Animated.View style={[styles.modal, marginStyle]}>
                {
                  closeIcon &&
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={close}
                    style={styles.closeButton}
                  >
                    <CrossIcon fill={'#BAB6B6'} />
                  </TouchableOpacity>
                }
                {children}
              </Animated.View>
            </TouchableOpacity>
          </Animated.View>
        </TouchableOpacity>
      }
    </>
  )
}

export default memo(Modal);
