import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Ingredient = ({ name }) => {
  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    setSelected(!selected);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className='p-2 m-1 ${selected ? bg-blue-500 : bg-gray-200} rounded-lg flex-row items-center'
    >
      <Text className='flex-grow text-white ${selected ? text-white : text-black}'>{name}</Text>
      {selected && (
        <Icon name="check" size={18} color="white" />
      )}
    </TouchableOpacity>
  );
};

export default Ingredient;