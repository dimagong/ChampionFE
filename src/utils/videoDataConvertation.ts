import { IAnnounceVideoCard, IVideoImages } from "@src/interfaces"

export const convertName = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1)
}

export const convertVideoImages = (
    video: IVideoImages[],
    images: IVideoImages[],
): IAnnounceVideoCard[] => {
    const coincidence = images.map(image => {
        const name: string =
            image.name?.substring(
                image.name.indexOf('/') + 1,
                image.name.indexOf('.'),
            ) ?? ''
        const findVideo = video.find(el =>
            name ? el.name?.includes(name) ?? {} : {},
        )
        const playerTeamData = name ? name.split('-') : []
        const player: string =
            playerTeamData[0] === 'autogol'
                ? 'Autogol'
                : convertName(playerTeamData[0]) +
                ' ' +
                convertName(playerTeamData[1])
        const team: string =
            playerTeamData[0] === 'autogol'
                ? convertName(playerTeamData[1]) +
                ' ' +
                convertName(playerTeamData[2])
                : convertName(playerTeamData[2]) +
                ' ' +
                convertName(playerTeamData[3])
        return {
            name,
            player,
            team,
            imageUrl: image.url as string,
            videoUrl: findVideo?.url as string,
        }
    })
    return coincidence
}