import React from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import {
  Button,
  Header,
  Screen,
  Text,
  GradientBackground,
  AutoImage as Image,
} from "../../components"
 import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"

import { color, spacing, typography } from "../../theme"
import * as Styling from "../styling"

const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.background,
  paddingHorizontal: spacing.large,
}

const HEADER_CONTAINER: ViewStyle = {
  marginTop: spacing.huge,
  marginBottom: spacing.medium,
}





export const QuestionScreen = observer(function QuestionScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
   const navigation = useNavigation()
  const welcomeScreen = () => navigation.navigate("welcome")
  return (
    <Screen style={ROOT} preset="scroll">
      <View style={HEADER_CONTAINER}>
        <Text preset="header" tx="questionScreen.header" />
        <Button
          testID="question-screen-button1"
          style={Styling.CONTINUE}
          textStyle={Styling.CONTINUE_TEXT}
          tx="questionScreen.continue"
          onPress={welcomeScreen}
        />
      </View>
    </Screen>
  )
})
