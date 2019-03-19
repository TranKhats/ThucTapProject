import React, { Component } from 'react';
import { WebView, View, Text } from 'react-native';

class PolicyScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <WebView
                source={{ uri: 'http://thanhbuoibus.com.vn/Contents/1' }}
                style={{ marginTop: 20 }}
            />
        );
    }
}

export default PolicyScreen