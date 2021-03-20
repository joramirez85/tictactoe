import React from 'react'
import { View, Text, Button } from 'react-native'

import { Modal } from '../../commons'
// import { Button } from '../../atoms'

const renderMessage = (styles, message) => {
  if (typeof message === 'string') {
    return (
      <Text style={styles.modalMessage}>
        { message }
      </Text>
    )
  } else {
    return message
  }
}

const CustomModal = ({
  openModal,
  setOpenModal,
  styles,
  IconHeader,
  title,
  message,
  btnsOpts = []
}) => {
  return (
    <Modal
      open={openModal}
      dismiss={setOpenModal}
    >
      <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.blueSize(60)}>
          <Text style={styles.titleModal}>
            Detalles de Evento
          </Text>
        </View>
        <Text style={styles.modalTitle}>
          { title }
        </Text>
        {renderMessage(styles, message)}
        <View style={[styles.buttonContainer, { width: '100%', paddingHorizontal: 32 }]}>
          {btnsOpts.map( (button) => (
            <Button
            title={button.title}
            onPress={ button.onHandle }
            />
          ))}
        </View>
      </View>
    </Modal>
  )
}

export default CustomModal
