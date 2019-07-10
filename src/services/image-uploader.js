async function uploadPhoto(photo){
  console.log(photo.size)
  if (photo.size > 2000000){
    //call error handler;
    return
  }
  const formData = new FormData();
  formData.append('file', photo);
  
  formData.append('upload_preset', process.env.REACT_APP_TOKEN);

  try{
    const response = await fetch(process.env.REACT_APP_UPLOAD_URL, {
      method: 'POST',
      body: formData
    })
    
    const resData = await response.json();
    return resData.secure_url;
        // localStorage.setItem('passportUrl', uploadedFileUrl);
  } catch(e){
    console.log(e)
    console.log(e.message)
  }
}

export default uploadPhoto;