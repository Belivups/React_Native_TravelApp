import {css} from "./style/style";

import {View, Text, StatusBar, SafeAreaView} from "react-native";
import Home from "./screen/Home";

export default function App(){

  return(
      <>

          <SafeAreaView style={[css.safeArea, css.flex]}>
              <StatusBar barStyle={'light-content'} />

              <Home/>

          </SafeAreaView>
      </>
  )
}

