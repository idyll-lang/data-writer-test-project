const React = require('react');
import { VegaLite } from 'react-vega';

class VL extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      handler: null
    }
  }

  componentDidMount() {
    const { Handler } = require('vega-tooltip')
    this.setState({
      handler: new Handler().call
    })
  }
  render() {
    const { spec, data, ...props } = this.props;
    const { handler } = this.state;
    const adjustedSpec = { ...this.props.spec, data: { values: data } };
    return (
      <div>
        <VegaLite
          {...props}
          spec={adjustedSpec}
          tooltip={handler} />
      </div>
    );
  }
}

VL._idyll = {
  name: 'VL',
  tagType: 'closed',
  props: [
    {
      name: 'spec',
      type: 'expression',
      example: `\`{
        mark: "line",
        encoding: {
          x: {
            field: "x",
            type: "quantitative"
          },
          y: {
            field: "y",
            type: "quantitative"
          }
        }
      }\``
    },
    {
      name: 'data',
      type: 'expression',
      example: `\`[{x: 0, y: 0}, {x: 1, y: 1}]\``
    }
  ]
};


module.exports = VL;