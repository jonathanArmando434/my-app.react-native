import { FlatList } from 'react-native'
import { Category } from '@/components/category'
import { categories } from '@/utils/categories'
import { styles } from './styles'

type Props = {
    selected: string,
    onSelected: (category: string) => void
}

export function Categories ({selected, onSelected}: Props) {
    return (
        <FlatList 
            data={categories}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <Category name={item.name} icon={item.icon} isSelected={(item.name === selected) ? true : false} onPress={() => onSelected(item.name)} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.container}
            contentContainerStyle={styles.content}
        />
    )
}