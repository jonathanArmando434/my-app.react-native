import React, { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal, Alert } from 'react-native';
import { styles } from './index'
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import { Categories } from '../../components/categories'
import { Link } from '../../components/link';
import { Option } from '../../components/option'
import { router, useFocusEffect } from 'expo-router'
import { categories } from '../../utils/categories'
import { Link as LinkType, linkStorage } from '../../storage/link-storage'

export default function Index () {
    const [category, setCategory] = useState(categories[0].name)
    const [links, setLinks] = useState<LinkType[]>([])
    const [link, setLink] = useState<LinkType>({} as LinkType)
    const [showModel, setShowModel] = useState(false)

    const getLinks = async () => {
        try {
            const links = await linkStorage.get()
            const linksFiltered = links.filter(link => link.category === category)
            setLinks(linksFiltered)
        } catch (error) {
            console.log(error)
            Alert.alert('Error', 'Não foi possível carregar os links')
        }
    }

    const handleDetails = (link: LinkType) => {
        setShowModel(true)
        setLink(link)
    }

    useFocusEffect(useCallback(() => {
        getLinks()
    }, [category]))

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
                data={links}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Link name={item.name} url={item.url} onDetails={() => handleDetails(item)} />
                )}
                showsVerticalScrollIndicator={false}
                style={styles.links}
                contentContainerStyle={styles.linksContent}
            />
            
            <Modal transparent visible={false} animationType='slide'>  
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modelCategory}>Curso</Text>
                            <TouchableOpacity onPress={() => setShowModel(false)}>
                                <MaterialIcons name='close' size={20} color={colors.gray[400]}/>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.modelLinkName}>{link.name}</Text>
                        <Text style={styles.modelUrl}>{link.url}</Text>

                        <View style={styles.modalFooter}>
                            <Option 
                                name={'Excluir'} 
                                icon='delete' 
                                variant='secondary' 
                                onPress={() => {
                                    Alert.alert('Excluir', 'Tem certeza que deseja excluir este link?', [
                                        {text: 'Não', style: 'cancel'},
                                        {text: 'Sim', onPress: async () => {
                                            await linkStorage.remove(link.id)
                                            await getLinks()
                                            setShowModel(false)

                                        }}
                                    ])
                                }} 
                            />
                            <Option 
                                name={'Abrir'} 
                                icon='open-in-new' 
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}