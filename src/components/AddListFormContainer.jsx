import * as React from 'react'
import AddListForm from './AddListForm'
import { connect } from 'react-redux'


class AddListFormContainer extends React.PureComponent {


  addList = (title) => {
    this.props.dispatch({
      type: 'ADD_LIST',
      payload: {
        id: Math.ceil(Math.random()*10000),
        ...title,
        data: []
      }
    })
  }


  render() {
// console.log(this.addList);
    return <AddListForm addList={this.addList} />
  }
}

export default connect(null)(AddListFormContainer)
