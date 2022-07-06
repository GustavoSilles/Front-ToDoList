import react, { useState } from "react"
import { KeyboardAvoidingView, TextInput, TouchableOpacity, View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import styles from "../styles/taskinputfield"

const Taskinputfield = (props) => {
    const [descricao, setdescricao] = useState('')
    const handleDescricaoChange = descricao => setdescricao(descricao)
    const postTask = async () => {
        if (descricao != "") {
            try {
                const requestOptions = {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        descricao: descricao
                    })
                }
                await fetch('http://localhost:3000/task/', requestOptions)
                props.addTask()
            } catch (error) {
                console.log('Erro:' + error)
                setdescricao('')
            }
        } else {

        }


    }
    return (
        <KeyboardAvoidingView>
            <TextInput
                value={descricao}
                placeholder="Escreva uma tarefa"
                onChangeText={handleDescricaoChange}
            />
            <TouchableOpacity onPress={postTask}>
                <MaterialIcons name="add" size={24} />
            </TouchableOpacity>

        </KeyboardAvoidingView>
    )
}
export default Taskinputfield

