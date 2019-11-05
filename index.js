function theBeatlesPlay(musicians, instruments){
  result = [];
  for(let i = 0; i < musicians.length; i++){
    result.push(musicians + " plays " + instruments);
  }return result;
}
