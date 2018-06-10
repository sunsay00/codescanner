import * as React from 'react';

export default <Props extends {}>(Wrapped: ReactComponent<Props & NavigatorProps>): ReactComponent<Props> => {
  return class extends React.Component<Props, {}> {
    static contextTypes = {
      navigator: React.PropTypes.object
    };
    render() {
      return <Wrapped navigator={this.context.navigator as INavigator} {...this.props} />
    }
  };
};

