import Gallery from "react-photo-gallery";
const images = [
    {
        src: require("../images/events/gallery/2018/2018-front.png"),
        width: 3,
        height: 2
    },
    {
        src: require("../images/events/gallery/2018/2018-back.png"),
        width: 3,
        height: 2
    },
    {
        src: require("../images/events/gallery/2018/cny-2018-1.jpg"),
        width: 3,
        height: 2
    },
    {
        src: require( "../images/events/gallery/2018/cny-2018-2.jpg"),
        width: 3,
        height: 4
    },
    {
        src: require( "../images/events/gallery/2018/cny-2018-3.jpg"),
        width: 3,
        height: 2
    },
    {
        src: require("../images/events/gallery/2018/cny-2018-4.jpg"),
        width: 4,
        height: 3
    },
    {
        src: require("../images/events/gallery/2018/cny-2018-5.jpg"),
        width: 3,
        height: 2
    },
    {
        src: require("../images/events/gallery/2018/cny-2018-6.jpg"),
        width: 3,
        height: 2
    },
    {
        src: require("../images/events/gallery/2018/cny-2018-7.jpg"),
        width: 3,
        height: 2
    },
    {
        src: require("../images/events/gallery/2018/cny-2018-8.jpg"),
        width: 3,
        height: 2
    }
]

const Gallery2018 = () => {
    return (
        <div>
            <Gallery photos={images}/>
        </div>
    );
};

export default Gallery2018;