import React from "react";
import {View, Text, TouchableOpacity} from "react-native"
import {MaterialIcons} from "@expo/vector-icons"
import {styles} from "../styles/taskitem";

const Taskitem = (props) => {
    return(
        <View>
            <View>
                <Text>{props.index}</Text>
                <Text>{props.task}</Text>
                <TouchableOpacity onPress={() => props.deleteTask()}>
                    <MaterialIcons name="delete"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Taskitem