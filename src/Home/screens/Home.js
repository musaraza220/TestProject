import React from 'react';
import {
    SafeAreaView,
    Dimensions,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image
} from 'react-native';
import { connect } from 'react-redux';
import ApiTester from '../../components/apiTester'
import * as appActions from '../../actions';
const Home = (props) => {

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? '#000' : '#E5E5E5',
        padding: 10
    };

    const { state, actions } = props;
    return (
        <SafeAreaView style={backgroundStyle}>
            <View style={styles.userNameStyle}>
                <Image style={styles.imgVector} source={require('../../asserts/vector.png')} />
                <Text>john.near</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.head}>My NFTs</Text>
                <Text style={styles.nftStyle}> + Create NFT</Text>
            </View>

            <View style={styles.nftListStyle}>
                <Image style={{ width: '98%', height: 120 }} source={require('../../asserts/illust.png')} />
                <Text>Vectory Illustration</Text>
                <Text style={{ color: 'lightgray' }}>#17372</Text>
            </View>

            <View style={styles.nftListStyle}>
                <Image style={{ width: '98%', height: 120 }} source={require('../../asserts/illustt.png')} />
                <Text>Vectory Illustration</Text>
                <Text style={{ color: 'lightgray' }}>#17372</Text>
            </View>

            <ApiTester
                apiMsg={state.apiTester.apiMsg}
                {...actions}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    userNameStyle: {
        padding: 8,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 4
    },
    imgVector: {
        marginEnd: 7
    },
    head: {
        fontWeight: 'bold',
        fontSize: 16
    },
    nftStyle: {
        color: '#2F80ED',
        alignSelf: 'flex-end'
    },
    nftListStyle: {
        width: Dimensions.get('window').width / 1.1,
        borderRadius: 9,
        backgroundColor: 'white',
        alignSelf: "center",
        marginBottom: 10
    }
});
function mapStateToProps(state) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(appActions.actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
