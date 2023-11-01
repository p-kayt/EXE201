import React from "react";

type Props = {
  valueList: string[];
  selectedIndex: number;
  setSelectedIndex: (params: any) => any;
  style?: object;
};

const TabBar = (props: Props) => {
  const { valueList, selectedIndex, setSelectedIndex } = props;

  const onClickItem = (value: string) => {
    setSelectedIndex(valueList.indexOf(value));
  };

  return (
    <div>
      <div className="tab-container">
        {props.valueList?.map((value, index) => (
          <div
            key={index}
            className={
              "tab-item" + (selectedIndex === index ? " selected" : "")
            }
            onClick={() => onClickItem(value)}
          >
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// class TabBar extends React.Component<Props> {
//   constructor(props: Props) {
//     super(props);

//     this.state = {
//       selected: this.props.selectedItem,
//     };

//     this.onClickItem = this.onClickItem.bind(this);
//   }

//   onClickItem(value: String) {
//     console.log(value);

//     this.setState({ selected: value });
//   }

//   render() {
//     return (
// <div className="tab-conatainer">
//   {this.props.valueList?.map((value, index) => (
//     <div
//       key={index}
//       className={
//         "tab-item" +
//         (this.props.selectedItem === value ? " selected" : "")
//       }
//       onClick={() => this.onClickItem(value)}
//     >
//       <span>{value}</span>
//     </div>
//   ))}
// </div>
//     );
//   }
// }

export default TabBar;
