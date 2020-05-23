import React, {Component} from 'react';
import _ from 'lodash'
import ManageTasks from './ManageTasks'
import './todo.scss'

export default class Todo extends Component { 

  constructor(props) {
    super(props)
    this.id = _.uniqueId('')

    this.state = {
      savedTasks: JSON.parse(localStorage.getItem(this.id + ' tasks')) || []
    }
  }

  render() {
    return (
      <ManageTasks id={this.id} savedTasks={this.state.savedTasks}/>
    )
  }
 }