import React, { Component } from 'react';
import FooterTabNavigation from '../components/FooterTabNavigation';
import { Spinner } from "native-base";
import { Font } from "expo";

export default class AppBootstrapper extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    async componentWillMount() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
        this.setState({ loading: false });
    }
    render() {
        if (this.state.loading) {
            return <Spinner style={[{justifyContent: 'center'}, {alignSelf: 'center'}]}
            color='red' />
        }
        return <FooterTabNavigation />;

    }
}