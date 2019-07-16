async function uploadPhoto(photo){
  if (photo.size > 2000000){
    throw new Error('uploaded image must be less than 2 MB')
  }
  const formData = new FormData();
  formData.append('file', photo);
  
  formData.append('upload_preset', process.env.REACT_APP_TOKEN);

  const response = await fetch(process.env.REACT_APP_UPLOAD_URL, {
    method: 'POST',
    body: formData
  })
  
  const resData = await response.json();
  return resData.secure_url;
}

export default uploadPhoto;