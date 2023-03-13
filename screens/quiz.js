import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";

const Quiz = ({ navigation }) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  function shuffleArr(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var rand = Math.floor(Math.random() * (i + 1));
      [array[i], array[rand]] = [array[rand], array[i]];
    }
  }

  const generateOptionsAndShuffle = (_question) => {
    const options = [..._question.incorrect_answers];
    options.push(_question.correct_answer);
    shuffleArr(options);
    return options;
  };

  const handleNextPress = () => {
    setQues((ques) => ques + 1);

    setOptions(generateOptionsAndShuffle(questions[ques + 1]));
  };

  const handleSeclectOption = (_option) => {
    if (_option === questions[ques].correct_answer) {
      setScore(score + 10);
    }
    if (ques === 9) return;
    handleNextPress();
  };
  const getQuizz = async () => {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986"
    );
    const data = await res.json();
    console.log(data.results);
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[ques]));
    setLoading(false);
  };
  useEffect(() => {
    getQuizz();
  }, []);
  return (
    <View style={styles.container}>
      {loading ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : (
        questions && (
          <>
            <View style={styles.top}>
              <Text style={styles.question}>
                {decodeURIComponent(questions[ques].question)}
              </Text>
            </View>

            <View style={styles.options}>
              {options.length > 0 &&
                options.map((item) => (
                  <TouchableOpacity
                    onPress={() => handleSeclectOption(item)}
                    key={item}
                    style={styles.optionButton}
                  >
                    <Text style={styles.option}>
                      {decodeURIComponent(item)}
                    </Text>
                  </TouchableOpacity>
                ))}
            </View>

            <View style={styles.bottom}>
              {/* <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Skip</Text>
              </TouchableOpacity> */}

              {ques !== 9 ? (
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleNextPress}
                >
                  <Text style={styles.buttonText}>Skip</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    navigation.navigate("Result", { score });
                  }}
                >
                  <Text style={styles.buttonText}>Show Result</Text>
                </TouchableOpacity>
              )}
            </View>
          </>
        )
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    height: "100%",
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 24,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#1a759f",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 36,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
  question: {
    fontSize: 24,
  },
  option: {
    fontSize: 18,
    color: "#fff",
  },
  optionButton: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginVertical: 6,
    backgroundColor: "#34a0a4",
    borderRadius: 10,
  },
});
