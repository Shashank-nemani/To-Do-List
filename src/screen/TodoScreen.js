import { 
    FlatList, 
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View,
    Button,
} from 'react-native';
import React, { useState } from 'react';
import { IconButton } from 'react-native-paper';
import Fallback from '../components/Fallback';


console.log(Date.now().toString());


const TodoScreen = ({navigation}) => {
    // Init local states
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([])
    const [editedTodo, setEditedTodo] = useState(null);

    // Handle Add Todo
    
    const handleAddTodo = ()=>{
        // structure of a single todo item
        //{
        // id:
        // title:
        //}

        if(todo === ""){
            return; // early return
        }
        
        setTodoList([...todoList, {id: Date.now().toString(), title: todo }]);
        setTodo("");
    };

    // Handle Delete
    const handleDeleteTodo = (id)=>{
        const updateTodoList = todoList.filter((todo)=> todo.id !== id);
        
        setTodoList(updateTodoList);
    };

    // Handle Edit todo

    const handleEditTodo = (todo) => {
        setEditedTodo(todo);
        setTodo(todo.title);
      };

      // Handle Update

      const handleUpdateTodo = () => {
        const updatedTodos = todoList.map((item) => {
          if (item.id === editedTodo.id) {
            return { ...item, title: todo };
          }
    
          return item;
        });
        setTodoList(updatedTodos);
        setEditedTodo(null);
        setTodo("");
      };

    // Render todo
    const renderTodos = ({item, index }) => {
        return(
            <View 
                style={{
                    backgroundColor: "#1e90ff", 
                    borderRadius: 6, 
                    paddingHorizontal: 6,
                    paddingVertical: 8,
                    marginBottom: 12, 
                    flexDirection: "row",
                    alignItems: "center",
                    shadowColor: "#000",
                    shadowOffset:{width: 0, height: 2},
                    shadowOpacity: 0.8,
                    shadowRadius: 3,
                }}
            >
                <Text style={{color: "#fff", fontSize: 20, fontWeight: "800", flex: 1}}>
                    {item.title}
                </Text>
                <IconButton 
                    icon= "pencil" 
                    iconColor='#fff' 
                    onPress={()=>handleEditTodo(item)}
                />
                <IconButton 
                    icon= "trash-can" 
                    iconColor='#fff' 
                    onPress={()=>handleDeleteTodo(item.id)}
                />
                <Button  
                    title="Details"  
                    onPress={() => navigation.navigate("Details Of Todo")}
                />  
            </View>
        );
    };

    return (
        <View style={{ marginHorizontal: 16}}>
            <TextInput 
                style={{ 
                    borderWidth: 2, 
                    borderColor: "#1e90ff", 
                    borderRadius: 6, 
                    paddingVertical: 8, 
                    paddingHorizontal: 16,
                    marginTop: 60,
                }}
                placeholder="Add a Task"
                value={todo}
                onChangeText={(userText)=> setTodo(userText)}
            />

            {
                editedTodo ? <TouchableOpacity 
                style={{ 
                    backgroundColor: "#000", 
                    borderRadius: 6, 
                    paddingVertical: 12,
                    marginVertical: 34,
                    alignItems: "center",
                }}
                onPress={() => handleUpdateTodo()}
            >
                <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
                    Save
                </Text>
            </TouchableOpacity> :
            <TouchableOpacity 
            style={{ 
                backgroundColor: "#000", 
                borderRadius: 6, 
                paddingVertical: 12,
                marginVertical: 34,
                alignItems: "center",
            }}
            onPress={() => handleAddTodo()}
        >
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
                Add
            </Text>
        </TouchableOpacity>


            }
            {/* Render todo list */}

            <FlatList data={todoList} renderItem={renderTodos} />
            
            {todoList.length <= 0 && <Fallback/>}
              
        </View>
    )
}
export default TodoScreen

const styles = StyleSheet.create({})