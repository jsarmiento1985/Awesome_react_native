import React from 'react';
import {View, TouchableOpacity, Text, } from 'react-native';
import styles from './Styles';
import {Task} from './App';


interface ItemProps{
    tarea: Task;
    markDone: (task : Task) => void;
    deleteFunction: (task : Task)=> void;

}

export default function RenderItem({tarea, markDone, deleteFunction}:ItemProps){
    return (
        <View style={styles.itemContainer}>
          <TouchableOpacity onPress={()=>markDone(tarea)}>
            <Text style= {tarea.done ? styles.textDone : styles.text}>{tarea.title}</Text>
            <Text style= {tarea.done ? styles.textDone : styles.text}>
              {new Date (tarea.date).toLocaleDateString()}
            </Text>
          </TouchableOpacity>
          {
            tarea.done && (
              <TouchableOpacity style={ styles.removeButton} onPress={()=>deleteFunction(tarea)}>
              <Text style={styles.whiteText}>Eliminar</Text>
            </TouchableOpacity>
            )
          }
        </View>
      );
      
}