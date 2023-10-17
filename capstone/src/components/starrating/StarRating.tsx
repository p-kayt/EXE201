import React from "react";

type Props = {
  maxRating: number;
  defaultRating?: number;
  setRatingVal?: (params: any) => any;
};

function StarRating(props: Props) {
  const { maxRating } = props;
  const stars = [];
  for (var i = 0; i < maxRating; i++) {
    stars.push(i);
  }
  return (
    <div className="rating-element">
      {stars.map((item) => (
        <div>a</div>
      ))}
    </div>
  );
}

export default StarRating;

// class StarRating extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             stars: [],
//             rating: 0,
//             hovered: 0,
//             selectedIcon: "★",
//             deselectedIcon: "☆"
//         };

//         let outOf = props.outOf ? props.outOf : 5;

//         for (var i = 0; i < outOf; i++) {
//             this.state.stars.push(i + 1);
//         }
//     }

//     changeRating(newRating) {
//         this.setState({
//             rating: newRating
//         });

//         if (this.props.onChange)
//             this.props.onChange(newRating);
//     }

//     hoverRating(rating) {
//         this.setState({
//             hovered: rating
//         });
//     }

//     render() {

//         const { stars, rating, hovered, deselectedIcon, selectedIcon } = this.state;

//         return (
//             <div>
//                 <div className="rating" style={{ fontSize: '5em', color: "#38d39f" }}>

//                     {stars.map(star => {
//                         return (
//                             <span
//                                 style={{ cursor: 'pointer' }}
//                                 onClick={() => { this.changeRating(star); }}
//                                 onMouseEnter={() => { this.hoverRating(star); }}
//                                 onMouseLeave={() => { this.hoverRating(0); }}
//                             >
//                                 {rating < star ?
//                                     hovered < star ? deselectedIcon : selectedIcon
//                                     :
//                                     selectedIcon
//                                 }
//                             </span>
//                         );
//                     })}

//                 </div>
//             </div>
//         );
//     }
// }
