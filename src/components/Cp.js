
import React, { useState } from 'react';
import {View, StyleSheet} from 'react-native';
/**
* Override styles that get passed from props
**/




const CircularProgress = ({percent}) => {
    const [width, setWidth] = useState(0);

    propStyle = (percent, base_degrees) => {
        const rotateBy = base_degrees + (percent * 3.6);
        return {
            transform:[{rotateZ: `${rotateBy}deg`}]
        };
    }
    
    renderThirdLayer = (percent) => {
        if(percent > 50){
            /**
             * Third layer circle default is 45 degrees, so by default it occupies the right half semicircle.
             * Since first 50 percent is already taken care  by second layer circle, hence we subtract it
             * before passing to the propStyle function
             **/
            return <View style={[styles.secondProgressLayer,propStyle((percent - 50), 45) ,{borderWidth:width,borderRadius:width}]}></View>
        }else{
            return <View style={{...styles.offsetLayer,borderWidth:width,borderRadius:width}}></View>
        }
    }
  
  let firstProgressLayerStyle;
  if(percent > 50){
      firstProgressLayerStyle = propStyle(50, -135);
  }else {
    firstProgressLayerStyle = propStyle(percent, -135);
  }
  return(
    <View  onLayout={(e) => setWidth(e.nativeEvent.layout.width/2)} style={{...styles.container,borderWidth:width,borderRadius:width}}>
      <View style={[styles.firstProgressLayer, firstProgressLayerStyle,{borderWidth:width,borderRadius:width}]}></View>
      {renderThirdLayer(percent)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 1,
    borderWidth: 186,
    borderRadius: 186,
    borderColor: '#EDE299',
    justifyContent: 'center',
    alignItems: 'center'
  },
  firstProgressLayer: {
    width: '100%',
    aspectRatio: 1,
    borderWidth: 186,
    borderRadius: 186,
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#ff0',
    borderTopColor: '#ff0',
    transform:[{rotateZ: '-135deg'}]
  },
  secondProgressLayer:{
    width: '100%',
    aspectRatio: 1,
    position: 'absolute',
    borderWidth: 186,
    borderRadius: 186,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#ff0',
    borderTopColor: '#ff0',
    transform: [{rotateZ: '45deg'}]
  },
  offsetLayer: {
    width: '100%',
    aspectRatio: 1,
    position: 'absolute',
    borderWidth: 186,
    borderRadius: 186,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#EDE299',
    borderTopColor: '#EDE299',
    transform:[{rotateZ: '-135deg'}]
  }
});

export default CircularProgress;