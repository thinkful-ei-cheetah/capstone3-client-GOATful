export default {
  saveVideo(video){
    const stringifiedVideo = JSON.stringify(video)
    localStorage.setItem('public_user_video', stringifiedVideo)
  },
  getVideo(){
    return JSON.parse(localStorage.getItem('public_user_video'))
  }
}