import moment from 'moment'

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

export function shuffle(arr) {
  let random;

  for (let i=0; i<arr.length; i++) {
    random = Math.floor(Math.random() * arr.length);
    swap(arr, i, random);
  }
  return arr;
}

export function randomIntFromInterval(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

export function formatDuration(yt_duration) {
  const time_extractor = /([0-9]*H)?([0-9]*M)?([0-9]*S)?$/;
  const extracted = time_extractor.exec(yt_duration);
  const hours = parseInt(extracted[1], 10) || 0;
  const minutes = parseInt(extracted[2], 10) || 0;
  const seconds = parseInt(extracted[3], 10) || 0;
  let result = ''
  if (hours > 0) {
    result += hours+':'
  }
  if (minutes > 0) {
    result += minutes
  } else {
   result += '0' 
  }
  result += ':'
  if (seconds >= 10) {
    result += seconds
  } else if (seconds > 0) {
    result += '0'+seconds
  } else {
    result += '00'
  }
  return result
}

export function formatPublishedAtDate(dateTime) {
  if (!dateTime) return false
  moment(dateTime)
  return moment(dateTime, "YYYYMMDD").fromNow();
}

export function formatViewCount(strNum) {
  if (!strNum) return false
  let viewCount = Number(strNum)
  const billion = 1000000000
  const million = 1000000
  const hundred_thousand = 100000
  const ten_thousand = 10000
  if (viewCount >= billion) {
    const quotient = viewCount/billion
    if (quotient > 9.9) {
      return `${Math.floor(quotient)}B` 
    } else {
      return `${Number(quotient).toFixed(1)}B`
    }
  } else if (viewCount >= million) {
    const quotient = viewCount/million
    if (quotient > 9.9) {
      return `${Math.floor(quotient)}M` 
    } else {
      return `${Number(quotient).toFixed(1)}M`
    }
  } else if (viewCount >= hundred_thousand) {
    //999,999
    //999 k
    viewCount += ''
    return `${viewCount.slice(0,3)}K`
  } else if (viewCount >= ten_thousand) {
    // 99,999
    viewCount += ''
    return `${viewCount.slice(0,2)}K`
  } else if ((viewCount/1000) >= 1) {
    //9999
    //9.9K
    //1000
    const quotient = Number(viewCount / 1000)
    if (quotient > 1) {
      return `${Number(quotient).toFixed(1)}K`
    } else {
      return `${quotient}K`
    }
  } else {
    return `${viewCount}`
  }
}

export const tagStringToArray = str => {
  const tagsArr = str.split(/,||, /).filter(Boolean);
  if (tagsArr.length > 3){
    tagsArr.length = 3;
    return tagsArr
  }
  return tagsArr;
}

export const errorCheckNewVideo = (video) =>{
  const errorObject = {status: false, error: ""}
  for (let key in video){
    
    if (key === 'tags'){
      if (video[key][0].trim() === ""){
        return {status: true, error: 'Invalid tags'}
      }
    let allowedFormat = /[a-zA-Z0-9-_]$/;
    video[key].forEach(item => {
      if (!allowedFormat.test(item)){
        errorObject.status = true;
        errorObject.error = 'Invalid tags. Tags must be alphanumeric. "-", "_" are allowed.';
      }
    })

    if (errorObject.status === true) return errorObject;
    
    } else{
      if (video[key].trim() === ""){
        return {status: true, error: `Invalid ${key}`}
      }
    }
  } 
  return errorObject
}

export const checkTime = timeStr => {
  const allowedFormat = /^(\d{1,3}:)?\d{1,2}(:\d{1,2})$/;
  const isLegit = allowedFormat.test(timeStr)
  const formattedTime = {googleTimeString: "", error: null}

  if(!isLegit){
    formattedTime.error= 'Invalid format. Please enter time in the format h:m:s' 
    return formattedTime      
  }

  const timeArray = timeStr.split(':');
  const timeSectionCount = timeArray.length;
 
  const mins = Number(timeArray[timeSectionCount - 2])
  const secs = Number(timeArray[timeSectionCount - 1])
  const hrs = (timeSectionCount === 3) ? Number(timeArray[0]) : null;

  if(hrs){
    if (hrs > 597){
      formattedTime.error = 'YouTube videos cannot be longer than 597 hours'
      return formattedTime;
    }
    if (hrs === 597 && (mins !== 0 || secs !== 0)){
      formattedTime.error = 'YouTube videos cannot be longer than 597 hours'
      return formattedTime;
    }
  }
    if (mins > 59 || secs > 59){
      formattedTime.error = 'Invalid time format'
      return formattedTime;
    }

  let google_hours, google_mins, google_secs
  if(hrs){
    google_hours = 0 ? null : hrs;
  }
  google_mins = 0 ? null : mins;
  google_secs = 0 ? null : secs;

  formattedTime.googleTimeString = `PT${google_hours ? google_hours +'H' : ''}${google_mins ? google_mins +'M' : ''}${google_secs ? google_secs +'S' : ''}`

  if (formattedTime.googleTimeString === "PT"){
    formattedTime.error = 'Invalid time format'
  }
  return formattedTime;
}