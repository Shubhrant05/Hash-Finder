import React from 'react'
import { ResponsivePie } from '@nivo/pie'
const Tagchart = props => {
  const data = [
    {
      "id": "Negative ",
      "label": "negative Sentiments",
      "value": Math.round(props.negative * 100) / 100,
      "color": "hsl(0, 100%, 50%)"
    },
    {
      "id": "Neutral ",
      "label": "Neutral Sentiments",
      "value": Math.round(props.neutral * 100) / 100,
      "color": "hsl(68, 26%, 78%)"
    },
    {
      "id": "Positive ",
      "label": "Positive Sentiments",
      "value": Math.round(props.positive * 100) / 100,
      "color": "hsl(147, 50%, 47%)"
    }
  ]
  return (
    <>
      <h3 style={{ textAlign: "center", fontWeight: "600" , margin:"0 20px"}}>Sentiments regarding the hashtag</h3>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: 'data.color', modifiers: [['darker', 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="color"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'data.color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'data.color', modifiers: [['darker', 5]] }}
        colors={{ datum: 'data.color' }}
      />
    </>
  )
}



export default Tagchart