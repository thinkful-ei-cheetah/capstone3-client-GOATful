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
  const tagsArr = str.split(', ').filter(Boolean);
  if (tagsArr.length > 3){
    tagsArr.length = 3;
    return tagsArr
  }
  return tagsArr;
}

export const errorCheckNewVideo = (video) =>{
  for (let key in video){
    if (key === 'tags'){
      if (video[key][0].trim() === ""){
        return {status: true, message: 'Invalid tags'}
      } 
    } else{
      if (video[key].trim() === ""){
        return {status: true, message: `Invalid ${key}`}
      }
    }
  } 
  return {status: false}
}

export const checkTime = timeStr => {
  const strLength = timeStr.length;
  const allowedFormat = /^(\d{3}:)?\d{2}(:\d{2})$/;
  const isLegit = allowedFormat.test(timeStr)
  if(!isLegit){
    return { message: 'Invalid format. Please enter time in the format hhh:mm:ss or mm:ss'
    }
  }
  const problem = { message: ''}
  let hrs;
  const secs = timeStr.substr(strLength - 2);
  const mins = timeStr.substr(strLength - 5, 2);
  if (timeStr.length > 5){
    hrs = timeStr.substr(0, 3);
    if (Number(hrs) > 597){
      problem.message = 'YouTube videos cannot be longer than 597 hours'
      return problem;
    } else if (Number(hrs) === 597){
      if (mins !== '00' || secs !== '00'){
      problem.message = 'YouTube videos cannot be longer than 597 hours';
      return problem;
      }
    } 
  } else if(Number(mins) > 59 || Number(secs) > 59){
    problem.message = 'Invalid time format.'
    return problem;
  }
  let google_hours, google_mins, google_secs
  if(hrs){
    google_hours = (hrs === '000') ? null : Number(hrs);
  }
  google_mins = (mins === '00') ? null : Number(mins);
  google_secs = (secs === '00') ? null : Number(secs);

  const formattedTimeObject = {formattedTime: `PT${google_hours ? google_hours +'H' : ''}${google_mins ? google_mins +'M' : ''}${google_secs ? google_secs +'S' : ''}`}
  if (formattedTimeObject.formattedTime === "PT"){
    problem.message = 'Invalid time format.'
    return problem;
  }
  return formattedTimeObject;
}