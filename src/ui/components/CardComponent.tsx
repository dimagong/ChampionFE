import {FC} from 'react'
import {StyleSheet, View} from 'react-native'

import {Avatar, Card, Title, IconButton, MD3Theme} from 'react-native-paper'
import {IArticle} from '@src/interfaces'
import {useTheme} from 'react-native-paper'
import {IArticleContent} from '@src/interfaces'
import RenderHtml from 'react-native-render-html'

interface ICardComponent extends IArticle {
    onClickHandler?: () => void
}

export const CardComponentTitle: FC<Partial<ICardComponent>> = ({
    title,
    subTitle,
    onClickHandler,
    url,
}) => {
    return (
        <Card onPress={onClickHandler} style={styles.card}>
            <Card.Title
                titleStyle={styles.titleStyle}
                title={title}
                subtitle={subTitle}
                titleNumberOfLines={3}
                // left={props => <Avatar.Icon {...props} icon="folder" />}

                left={props => (
                    <Avatar.Image {...props} size={40} source={{uri: url}} />
                )}
                right={props => (
                    <IconButton
                        {...props}
                        icon="dots-vertical"
                        onPress={() => {}}
                    />
                )}
            />
        </Card>
    )
}

export const CardComponent = (props: ICardComponent) => {
    const {title, subTitle, url, content, onClickHandler} = props

    const theme: MD3Theme = useTheme()
    return (
        <Card onPress={onClickHandler} style={styles.card}>
            <Card.Cover source={{uri: url}} />
            <Card.Content>
                <Title style={styles.contentTitle}>{title ?? ''}</Title>
                {subTitle && <Title>{subTitle}</Title>}
                <View style={styles.card__content}>
                    <RenderHtml source={{html: content as string}} />
                </View>
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 5,
        marginBottom: 30,
    },
    card__content: {
        display: 'flex',
    },
    titleStyle: {
        fontSize: 16,
        fontWeight: '700',
    },
    contentTitle: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: '600',
    },
    contentSubTitle: {
        fontSize: 18,
        fontWeight: '500',
    },
    question: {
        paddingTop: 10,
        paddingBottom: 2,
        fontWeight: '700',
    },
})
