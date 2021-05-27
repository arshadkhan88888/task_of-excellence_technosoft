import React, { Component } from 'react';

class Table extends Component {
  fnEdit(data) {
    debugger;
    this.props.fnEdit(data);
  }
  fnDelete(data) {
    this.props.fnDelete(data);
  }

  render() {
    return (
      <div>
        <table className='table table-bordered table-dark'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Password</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((obj) => {
              return (
                <tr>
                  <td>{obj.name}</td>
                  <td>{obj.password}</td>
                  <td>
                    <button onClick={this.fnEdit.bind(this, obj)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={this.fnDelete.bind(this, obj)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
