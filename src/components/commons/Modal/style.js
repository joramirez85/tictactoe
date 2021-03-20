import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../../constants/Colors";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  touchableArea: {
    position: 'absolute',
    top: 0,
    left: 0,
    width,
    height,
    zIndex: 999,
    elevation: 999,
  },
  modalContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width,
    height,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // justifyContent: 'center', // Position of modal in vertical align
    paddingTop: 10,
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#FFF',
    width: '100%',
    height: 300,
    borderRadius: 20,
    alignItems: 'center',
    overflow: 'hidden',
    marginTop: height,
  },
  closeButton: {
    position: 'absolute',
    top: -20,
    left: -20,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
    elevation: 99,
  },
});

export default styles;
