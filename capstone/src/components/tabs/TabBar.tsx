import React from "react";

type Props = {
  valueList?: string[];
  selectedItem: string;
};

class TabBar extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {
      selected: this.props.selectedItem,
    };

    this.onClickItem = this.onClickItem.bind(this);
  }

  onClickItem(value: String) {
    console.log(value);

    this.setState({ selected: value });
  }

  render() {
    return (
      <div className="tab-conatainer">
        {this.props.valueList?.map((value, index) => (
          <div
            key={index}
            className={
              "tab-item" +
              (this.props.selectedItem === value ? " selected" : "")
            }
            onClick={() => this.onClickItem(value)}
          >
            <span>{value}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default TabBar;
