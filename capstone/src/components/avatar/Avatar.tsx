import React from 'react'

type avatarProps = {
  source: string,
  type: "rounded" | "squared",
  size: number,
}

class Avatar extends React.Component<avatarProps> {
  constructor(props: avatarProps) {
    super(props);
  }

  render() {
    return (
      <img src={this.props.source} className={this.props.type + "-" + "avatar"} style={{width: this.props.size, height: this.props.size}}/>
    )
  }

}

export default Avatar