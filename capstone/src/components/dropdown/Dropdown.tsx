import React from "react";

import "../common.scss";

import { Arrow, Check } from "../../assets/Icons";

type dropdownProps = {
  dropdownText: string;
  valueList?: string[];
  selectedItem: string;
};

type dropdownState = {
  status: boolean;
};

class Dropdown extends React.Component<dropdownProps, dropdownState> {
  constructor(props: dropdownProps) {
    super(props);

    this.state = {
      status: true,
    };

    this.onClickLabel = this.onClickLabel.bind(this);
    // this.onClickItem = this.onClickItem.bind(this);
  }

  onClickLabel() {
    this.setState((previousState, props) => ({
      status: !previousState.status,
    }));
  }

  // onClickItem(value: String) {
  //   this.setState({
  //     this.props.selectedItem: value,
  //   });
  // }

  render() {
    return (
      <div>
        <div
          className={
            this.state.status ? "dropdown-label-clicked" : "dropdown-label"
          }
          onClick={this.onClickLabel}
        >
          <p>{this.props.dropdownText}</p>
          <img src={Arrow} />
        </div>

        {this.state.status ? (
          <div className="dropdown-content">
            {this.props.valueList?.map((value) => (
              <div className="dropdown-item">
                {this.props.selectedItem === value ? (
                  <img src={Check} />
                ) : (
                  <img />
                )}
                <p>{value}</p>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Dropdown;
