import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from './components/Task';

export default function App() {
  // Creating our much needed data
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  // Adding a task to our array and clearing input state for next task to be added
  const handleAddTask = () => {
    Keyboard.dismiss();
    // Adding this task into our array of tasks (which will be mapped out)
    setTaskItems([...taskItems, task]);
    // Setting the text input area to nothing to be able to add a new task again
    setTask(null);
  }

  // Deleting an item
  const completeTask = (index) => {
    // Copying the task items array
    let itemsCopy = [...taskItems];
    // Removing the specific completed task
    itemsCopy.splice(index, 1);
    // Resetting our items array
    setTaskItems(itemsCopy);

  }

  return (
    <View style={styles.container}>
       {/* Added this scroll view to enable scrolling when list gets longer than the page */}
       <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'>

        {/* Today's tasks */}
        <View style={styles.taskWrapper}>
          <Text style={styles.sectionTitle}>Today's Tasks</Text>
          <View style={styles.items}>
            {/* This is where the tasks will go, specifically, they will be mapped out */}
            {
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                    <Task text={item} /> 
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>
      </ScrollView>
        
      {/* Write a task section */}
      {/* Ensuring our contents arise when our keyboard rises */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}>

          {/* Our text input area */}
          <TextInput style={styles.input} placeholder={"Write a task!"} value={task} onChangeText={text => setTask(text)}/>
          {/* Adding out button */}
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
      </KeyboardAvoidingView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE8E8',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    // borderWidth: 1,
    // borderColor: '#C0C0C0',
    width: 250,
    color: "#000",
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#F65555',
    borderRadius: 60,
    // borderWidth: 1,
    // borderColor: '#C0C0C0',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  addText: {
    color: "#fff",
  },
});
