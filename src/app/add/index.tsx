import { View, Text, TouchableOpacity, Alert } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"  
import { styles } from "./styles"
import { colors } from "@/styles/colors"
import { Categories } from "@/components/categories"
import { router } from "expo-router"
import { Input } from "@/components/input"
import { Button } from "@/components/button"
import { useState } from "react"
import { linkStorage } from '@/storage/link-storage'

export default function Add(){
    const [category, setCategory] = useState('')
    const [name, setName] = useState('')
    const [url, setUrl] = useState('')

    const handleAdd = async () => {
        try {
            if(!category) return Alert.alert('Categoria', 'Seleciona uma categoria')
            if(!name) return Alert.alert('Nome', 'O nome é obrigaório')
            if(!url) return Alert.alert('URL', 'A URL é obrigatória')
    
            await linkStorage.save({
                id: new Date().getTime().toString(),
                name,
                url,
                category
            })
    
            Alert.alert('Sucesso', 'Link adicionado com sucesso', [
                {
                    text: 'OK',
                    onPress: () => router.back()
                }
            ])
        } catch (error) {
            console.log(error)
            Alert.alert('Erro', 'Não foi possível adicionar o link')            
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} activeOpacity={0.5}>
                    <MaterialIcons name="arrow-back" color={colors.gray[200]} size={32} />
                </TouchableOpacity>

                <Text style={styles.title} >Novo</Text>
            </View>

            <Text style={styles.label}>Selecione uma categoria</Text>

            <Categories selected={category} onSelected={setCategory} />

            <View style={styles.form}>
                <Input placeholder="Name" onChangeText={(value) => setName(value.trim())} />
                <Input placeholder="URL" onChangeText={(value) => setUrl(value.trim())} autoCapitalize="none" />
                <Button title="Adicionar" onPress={handleAdd} />
            </View>
        </View>
    )
}