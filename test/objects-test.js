var playlist = {
  'rolling stones': 'brown sugar',
  'elton john': 'tiny dancer',
  'fleetwood mac': 'everywhere',
}
function updatePlaylist(obj, key, value) {
  obj[key] = value

  return obj
}
const playlist = {
  'rolling stones': 'brown sugar',
  'elton john': 'tiny dancer',
  'fleetwood mac': 'everywhere',
}
updatePlaylist(playlist, 'otis redding:', 'sittin on the dock of the bay')

function removeFromPlaylist(obj, key){
  return playist.assign({}, obj, {[key]: value})
}
