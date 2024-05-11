import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import Icon from 'react-native-vector-icons/FontAwesome';

const Ingredient = ({ name }) => {
  const [selected, setSelected] = useState(false);
  const tailwind = useTailwind();

  const handlePress = () => {
    setSelected(!selected);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={tailwind(`p-2 m-1 ${selected ? 'bg-blue-500' : 'bg-gray-200'} rounded-lg flex-row items-center`)}
    >
      <Text style={tailwind(`flex-grow text-white ${selected ? 'text-white' : 'text-black'}`)}>{name}</Text>
      {selected && (
        <Icon name="check" size={18} color="white" />
      )}
    </TouchableOpacity>
  );
};

export default Ingredient;