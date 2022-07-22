class Area extends React.Component {
    constructor()
    {
        super();
        this.state = {}
    }
    render() {
        const text = 'text' in this.state ? this.state.text : this.props.text;
        return (
          <div>
            <textarea defaultValue={text} 
            onChange={event => this.onTextChange(event)}/>
            <h3>{text.length}</h3>
          </div>
        );
      }

      onTextChange(event) {
        this.setState({
          text: event.target.value,
        });
      }
}

Area.defaultProps = {
    text: 'Count me'
}

export default Area;