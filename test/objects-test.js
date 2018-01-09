var playlist = {
  'rolling stones': 'brown sugar',
  'elton john': 'tiny dancer',
  'fleetwood mac': 'everywhere',
}
function updatePlaylist(obj, key, value){
  return playlist.assign({}, obj, { [key]: value})
}
updatePlaylist(playlist, 'otis redding:', 'sittin on the dock of the bay')
function removeFromPlaylist(obj, key){
  return playist.assign({}, obj, {[key]: value})
}
