import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal } from 'react-native';
import { styles } from './index'
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import { Categories } from '../../components/categories'
import { Link } from '../../components/link';
import { Option } from '../../components/option'
import { router } from 'expo-router'
import { categories } from '../../utils/categories'

export default function Index () {
    const [category, setCategory] = useState(categories[0].name)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logo}>M</Text>

                <TouchableOpacity activeOpacity={0.5} onPress={() => router.navigate('/add')}>
                    <MaterialIcons name='add' size={32} color={colors.green[300]} />
                </TouchableOpacity>
            </View>

            <Categories selected={category} onSelected={setCategory} />

            <FlatList
                data={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <Link name='Youtube' url='https://www.youtube.com' onDetails={() => console.log('Clicou...')} />
                )}
                showsVerticalScrollIndicator={false}
                style={styles.links}
                contentContainerStyle={styles.linksContent}
            />
            
            <Modal transparent visible={false}>  
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modelCategory}>Curso</Text>
                            <TouchableOpacity>
                                <MaterialIcons name='close' size={20} color={colors.gray[400]}/>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.modelLinkName}>Youtube</Text>
                        <Text style={styles.modelUrl}>https://www.youtube.com</Text>

                        <View style={styles.modalFooter}>
                            <Option name={'Excluir'} icon='delete' variant='secondary' />
                            <Option name={'Abrir'} icon='open-in-new' />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}