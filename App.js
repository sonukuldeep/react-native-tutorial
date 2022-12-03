import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import {useState} from 'react'

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("")
  const [coarseGoals, setCoarseGoals] = useState([])
  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler(){
    setCoarseGoals(currentVal=>[...currentVal,enteredGoalText])
  }
  return (
    <View style={styles.container}>
      <View style={styles.space}>
        <TextInput style={styles.text} placeholder="Your course goals!" onChangeText={goalInputHandler}/>
        <Button title="Add goals" onPress={addGoalHandler}/>
      </View>
      <View>
        <Text style={styles.space}>List of goals...</Text>
        <View>
          {coarseGoals.map((item,index)=><Text key={index}>{item}</Text>)}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 30,
  },
  space: {
    margin: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    borderColor: 'green',
    borderWidth: 1,
    padding: 18,
    margin: 16,
  },
});
