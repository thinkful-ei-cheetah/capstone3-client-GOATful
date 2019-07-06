export default {
  saveVideo(video){
    const stringifiedVideo = JSON.stringify(video)
    localStorage.setItem('public_user_vider', stringifiedVideo)
  },
  getVideo(){
    return JSON.parse(localStorage.getItem('public_user_vider'))
  }
}