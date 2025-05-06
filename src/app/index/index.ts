import { StyleSheet } from "react-native";
import { colors } from '@/styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 62,
        paddingHorizontal: 12, 
    },
    title: {
        fontSize: 22,
        color: colors.green[900],
    },
    header: {
        paddingHorizontal: 24,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 32
    },
    logo: {
        color: colors.green[300],
        // height: 32,
        // width: 38,
        fontWeight: 'bold',
        fontSize: 32,
    },
    links: {
        borderTopWidth: 1,
        borderTopColor: colors.gray[600],
    },
    linksContent: {
        gap: 20,
        padding: 24,
        paddingBottom: 100
    },
    modal: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: colors.gray[900],
        borderTopWidth: 1,
        borderTopColor: colors.gray[800],
        paddingBottom: 42,
        padding: 24
    },
    modalHeader: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 32
    },
    modelCategory: {
        flex: 1,
        fontSize: 16,
        fontWeight: '500',
        color: colors.gray[400],
    },
    modelLinkName: {
        fontSize: 18,
        fontWeight: '600',
        color: colors.gray[200],
    },
    modelUrl: {
        fontSize: 14,
        color: colors.gray[400],
    }
})