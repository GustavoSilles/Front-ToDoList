import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Keyboard} from "react-native"
import Taskinputfield from "./src/components/TaskInputFild"
import Taskitem from "./src/components/TaskItem"



const App = () => {
  const [tasks, setTasks] = useState([])
  const addTask = () => {
    getTasks()
    Keyboard.dismiss()
  }
  const deleteTask = async (deleteid) => {
    const requestOptions = {
      method: 'delete',
      headers: {'Content-type': 'application/json'}
    }
    try{
      await fetch('http://localhost:3000/task/' + deleteid, requestOptions)
      setTasks(tasks.filter(task => task.id != deleteid))
    } catch(error){
      console.log("Erro: " + error)
      setTasks([])
    }
  }

  const getTasks =  async () => {
    try{
      const response = await fetch('http://localhost:3000/task')
      const data = response.json()
      data.then(
        (val) => setTasks(val)
      )
    } catch(error){
      console.log('Erro: ' + error)
      setTasks([])
    }
  }
  

  useEffect (() => {
    getTasks()
  }, [])


  return (
    <View>
      <Text>Lista de tarefa</Text>
      <ScrollView>
        {
          tasks.map(data => {
            return(
              <View key={data.id}>
                <Taskitem
                index={data.id}
                task = {data.descricao}
                deleteTask={() => deleteTask(data.id)}
                />
              </View>
            )
          })
        }
      </ScrollView>
      <Taskinputfield addTask={addTask} />
    </View>
  )
}
export default App