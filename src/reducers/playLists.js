const initState = [

  {
    id: 1,
    title: 'Play list 1',
    data: [
      {
        id: 1,
        title: 'DogHeart II',
        artist: 'The Growlers',
        album: 'Gilded Pleasures'
      }, {
        id: 2,
        title: 'Beast of No nation',
        artist: 'Fela Kuti',
        album: 'Finding Fela'
      }, {
        id: 3,
        title: 'Satellite of love',
        artist: 'Lou Reed',
        album: 'Transformer'
      }
    ]
  }, {
    id: 2,
    title: 'Play list 2',
    data: [
      {
        id: 1,
        title: 'Whatever happend to my Rock and Roll',
        artist: 'BlackRebelMoterCycleClub',
        album: 'B.R.M.C'
      }, {
        id: 2,
        title: 'U Sexy Thing',
        artist: 'Crocodiles',
        album: 'CryBaby Demon/ U Sexy Thing'
      }, {
        id: 3,
        title: 'Oh Cody',
        artist: 'NoBunny',
        album: 'Raw Romance'
      }
    ]
  }
]
const reducer = (state = initState, action = {}) => {
  switch (action.type) {

    case 'ADD_LIST':
      return [

        ...state,
        action.payload
      ]
    case 'ADD_SONG':
    // const state = this.getState()

      const index = this.state.findIndex(playlist => playlist.id === action.payload.playlist)

      console.log(index)

      const updatedPlaylistSongs = this.state[index].data
      updatedPlaylistSongs.push(action.playload.song)

      return [
        ...state.slice(0, index), {
          ...state[index],
          ...updatedPlaylistSongs
        },
        ...state.slice(index + 1)
      ]

    default:
      return state
  }
}

export default reducer
