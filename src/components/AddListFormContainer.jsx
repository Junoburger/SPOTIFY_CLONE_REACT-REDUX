import * as React from 'react'
import AddListForm from './AddListForm'
import { connect } from 'react-redux'


class AddListFormContainer extends React.PureComponent {
  addList = (list) => {
    this.props.dispatch({
      type: 'ADD_LIST',
      payload: {
        id: Math.ceil(Math.random()*10000),
        ...list
      }
    })
  }


  render() {
  
    return <AddListForm addList={this.addList} />
  }
}

export default connect(null)(AddListFormContainer)
