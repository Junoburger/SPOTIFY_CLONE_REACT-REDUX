const songsList = [

  {
    id: 1,
    title: 'DogHeart II',
    artist: 'The Growlers',
    album: 'Gilded Pleasures'
  },
  {
    id: 2,
    title: 'Beast of No nation',
    artist: 'Fela Kuti',
    album: 'Finding Fela'
  },
  {
    id: 3,
    title: 'Satellite of love',
    artist: 'Lou Reed',
    album: 'Transformer'
  }
]
const reducer = (state = songsList, action = {}) => {
  switch (action.type) {
  default:
    return state
  }
}

export default reducer
