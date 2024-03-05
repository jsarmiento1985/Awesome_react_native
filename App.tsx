import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, 
  TouchableOpacity, 
  SafeAreaView,
  FlatList,

} from 'react-native';
import styles from './Styles';
import RenderItem from './RenderItem';
import AsyncStorage from '@react-native-async-storage/async-storage';


export interface Task {
  title: string;
  done: boolean;
  date: Date;
}

export default function App() {
const [t, setText] = useState(''); //Hooks
const [tasks, setTasks] = useState<Task[]>([]);

const storeData = async (value: Task[]) => {
  try {
    await AsyncStorage.setItem('mytodo-tasks', JSON.stringify(value));
  } catch (e) {
    // saving error
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('mytodo-tasks');
    if (value !== null) {
     const tasksLocal = JSON.parse(value);
     setTasks(tasksLocal);
    }
  } catch (e) {
    // error reading value
  }
};

useEffect(()=>{
  getData();
},[])
const addTask = () =>{
  const tmp = [...tasks];// crea una copia del array basado en uno existente
  const newTask ={
  title: t,
  done: false,
  date: new Date(),
 };
 tmp.push(newTask);
 setTasks(tmp);
 storeData(tmp);
 setText('');
}

  const markDone = (task:Task) =>{
    const tmp = [...tasks];// crea una copia del array basado en uno existente
    const index = tmp.findIndex(eleme => eleme.title === task.title);
    const todo = tmp[index];
    todo.done = !todo.done;
    setTasks(tmp);
    storeData(tmp);
  }


  const deleteFuntion = (task:Task) =>{
    const tmp = [...tasks];// crea una copia del array basado en uno existente
    const index = tmp.findIndex(eleme => eleme.title === task.title);
    console.log('james');
    tmp.splice(index,1);
    setTasks(tmp);
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={[styles.title, styles.safeArea]}>Mis tareas por hacer</Text>
      </SafeAreaView>
      <View style={styles.inputContainer}>
          <TextInput 
          placeholder='Agregar una nueva tarea'
          onChangeText={(t:string)=>setText(t)} 
          value={t}
          style={styles.TextInput} />


          <TouchableOpacity onPress={addTask} style={styles.addButton}>
            <Text style={styles.whiteText}>
              Agregar
            </Text>
          </TouchableOpacity>
      </View>

      <View  style={styles.scrollContainer}>
        < FlatList
         renderItem={({item})=> (
            <RenderItem 
              tarea={item} 
              deleteFunction={deleteFuntion} 
              markDone={markDone}
            />
          )} 
          data={tasks}>
        </FlatList>
      </View>

    </View>
  );
  
}