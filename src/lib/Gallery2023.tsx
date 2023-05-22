import Gallery from "react-photo-gallery";
const images = [
    {
        src: require("../images/events/gallery/2023/2023-front.png"),
        width: 3,
        height: 2
    },
    {
        src: require("../images/events/gallery/2023/2023-back.png"),
        width: 3,
        height: 2
    },
    {
        src: require("../images/events/gallery/2023/lion-dance-1.jpg"),
        width: 3,
        height: 2
    },
    {
        src: require("../images/events/gallery/2023/drums-1.jpg"),
        width: 3,
        height: 2
    },
    {
        src: require("../images/events/gallery/2023/dance-1.jpg"),
        width: 3,
        height: 2
    },
    {
        src: require( "../images/events/gallery/2023/qipao-show-1.jpg"),
        width: 3,
        height: 2
    },
    {
        src: require( "../images/events/gallery/2023/calliagraphy-1.jpg"),
        width: 3,
        height: 2
    },
    {
        src: require( "../images/events/gallery/2023/qipao2.jpeg"),
        width: 3,
        height: 2
    },
]

const Gallery2023 = () => {
    return (
        <div>
            <Gallery photos={images}/>
        </div>
    );
};

export default Gallery2023;