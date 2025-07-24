import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { UserNavigationProp } from 'src/types/navigation';

export default function MapScreen() {
  const navigation = useNavigation<UserNavigationProp>();
  return (
    <View>

    </View>
  )
}
