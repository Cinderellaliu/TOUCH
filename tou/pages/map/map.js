// pages/map/map.js
Page({
  data: {
    markers: [
      {
        id: 1,
        latitude: 32.039381,
        longitude: 118.781345, 
        name: '南京博物馆',
        iconPath: "../../images/location.png",
        height:84,
        width:67,
        callout:{
          content:"距离最近",
          color:"#fff",
          fontSize:9,
          borderRadius:10,
          bgColor:"#000",
          padding:7,
          display:"ALWAYS",
          textAlign:"center",
        },
        // label:{
        //   content:"三月桃李芳菲+\n+1.5h",
        //   color:'#fff',
        //   fontSize:'7',
        //   borderRadius:2,
        //   bgColor:"#000",
        //   textAlign:"center",
        //   display: "BYCLICK",
        // }

      },
      {
        id: 2,
        latitude: 32.04788,
        longitude: 118.843677,
        name: '明孝陵',
        iconPath: "../../images/location.png",
        height:84,
        width: 67,
        callout: {
          content: "1.5h 明孝陵",
          color: "#fff",
          fontSize: 9,
          borderRadius: 10,
          bgColor: "#000",
          padding: 7,
          display: "ALWAYS",
          textAlign: "center"
        },
        label: {}
      },
      {
        id: 3,
        latitude: 31.958264,
        longitude: 118.849913,
        name: '明孝陵',
        iconPath: "../../images/location.png",
        height: 84,
        width: 67,
        callout: {
          content: "1.5h 明孝陵",
          color: "#fff",
          fontSize: 9,
          borderRadius: 10,
          bgColor: "#000",
          padding: 7,
          display: "ALWAYS",
          textAlign: "center"
        },
        label: {}
      }
    ],
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  showlabel:function(e){
    
  }
})