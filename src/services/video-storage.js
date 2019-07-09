export default {
  saveVideo(video, key='public_user_video'){
    const stringifiedVideo = JSON.stringify(video)
    localStorage.setItem(key, stringifiedVideo)
  },

  saveKey(key,value){
    const stringifiedValue = JSON.stringify(value)
    localStorage.setItem( key , stringifiedValue )
  },

  getVideo(key='public_user_video'){
    return JSON.parse(localStorage.getItem(key))
  }
}