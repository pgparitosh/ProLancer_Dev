import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export default {
    container: {
        backgroundColor: "#000"
    },
    logo: {
        flex: 1,
        alignSelf: "center"
    },
    heading: {
        fontSize: 30,
        marginTop: 10,
        alignItems: "center"
    },
    header: {
        flex: 1,
        padding: 10
    },
    headerText: {
        fontWeight: "bold",
        color: "white"
    },
    screenHeader: {
        backgroundColor: "green",
        fontColor: "white"
    },
    alignCenter: {
        alignSelf: "center"
    },
    textWhite: {
        color: "white"
    },
    textGreen: {
        color: "green"
    },
    questionText: {
        fontSize: 20,
        color: "green",
        padding: 20,
        fontWeight: "bold"
    },
    questionContainer: {
        backgroundColor: "#efefef"
    },
    padding20: {
        padding: 20
    },
    margin10: {
        margin: 10
    },
    bgGreen: {
        backgroundColor: "green"
    },
    resultText: {
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: 20,
        color: "green"
    },
    bgYellow: {
        backgroundColor: "f0ad4e"
    },
    iconWithBadge: {
        width: 24,
        height: 24,
        margin: 5
    },
    iconWithBadgeInnerContent: {
        position: 'absolute',
        right: -6,
        top: -3,
        backgroundColor: 'red',
        borderRadius: 6,
        width: 12,
        height: 12
    },
    iconWithBadgeInnerContentText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold'
    },
    bgRed: {
        backgroundColor: '#9f0001',
    },
    alignChildCenter: {
        alignItems: 'center'
    },
    bgBlack: {
        backgroundColor: '#000'
    }
};
