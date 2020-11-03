import React from 'react';
import EditModal from '../Modals/EditModal';
import './TableStyle.css';

interface IState {
  isModalOpen: boolean,
  isMouseInside: boolean,
  editData: any,
}
interface IProps {
  data: any,
  head: any,
  handleDelete: any
  updateItem: any
}
class DataTable extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      isMouseInside: false,
      editData: [],
    };
  }

  handleEdit = (data) => {
    this.setState({
      isModalOpen: true,
      editData: data,
    });
  };

  handleModalClose = isshowModal => {
    this.setState({
      isModalOpen: isshowModal,
    });
  };

  mouseEnter = () => {
    this.setState({ isMouseInside: true });
  }

  mouseLeave = () => {
    this.setState({ isMouseInside: false });
  }
  render() {
    console.log(this.props.head)
    return (
      <React.Fragment>
        <EditModal
          showModal={this.state.isModalOpen}
          handleModalClose={this.handleModalClose}
          editData={this.state.editData}
          updateItem={this.props.updateItem}
        />

        <div className="table_style">
          <table className="table table-striped">
            <thead >
              {
                this.props.head.map((header, i) => {
                  return (
                    <tr key={i}>
                      <th>
                        <input
                          type="checkbox"
                          onChange={e => {
                            let value = e.target.checked;
                            this.setState(
                              this.props.data.map(d => {
                                d.select = value;
                                return d;
                              })
                            );
                          }}
                        /> All
                      </th>
                      <th>{header.refNo}</th>
                      <th>{header.name}</th>
                      <th>{header.Reseller}</th>
                      <th>{header.action}</th>
                    </tr>
                  )
                })
              }
            </thead>
            <tbody>
              {this.props.data.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <input
                        type="checkbox"
                        checked={item.select}
                        onChange={e => {
                          let value = e.target.checked;
                          this.setState(
                            this.props.data.map(sd => {
                              if (sd.id === item.id) {
                                sd.select = value;
                              }
                              return sd;
                            })
                          );
                        }}
                      />
                    </td>
                    <td>{item.refNo}</td>
                    <td>{item.name}</td>
                    <td>{item.Reseller}</td>
                    <td onMouseOver={this.mouseEnter} onMouseOut={this.mouseLeave}>
                      <button onClick={() => this.handleEdit(item)} style={ButtonStyel} >
                        <span className="fas fa-pencil-alt"></span>
                      </button>
                      <button onClick={() => this.props.handleDelete(item)} style={ButtonStyel}>
                        <span className="fas fa-trash-alt"></span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}
const ButtonStyel = {
  border: "none",
  background: "none",
  marginTop: "auto"
}

// const mapStateToProps = (state) =>{}
// const mapDispatchToProps = (dispatch) =>{}
export default DataTable;
