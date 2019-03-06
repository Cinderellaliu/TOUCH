// pages/create/create.js
Page({
	data:{
    // text:"这是一个页面"
    open:false
  },
  showitem:function(){
      this.setData({
          open:!this.data.open
      })
  },
switch1Change: function (e){
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  },
  switch2Change: function (e){
    console.log('switch2 发生 change 事件，携带值为', e.detail.value)
  }
})