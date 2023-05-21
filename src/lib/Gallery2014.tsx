import Gallery from "react-photo-gallery";
const images = [
    {
        src: require("../images/events/gallery/2014/2014-front.png"),
        width: 2,
        height: 1
    },
    {
        src: require("../images/events/gallery/2014/2014-back.png"),
        width: 2,
        height: 1
    },
    {
        src: require("../images/events/gallery/2014/cny-2014-1.jpg"),
        width: 3,
        height: 2
    },
    {
        src: require( "../images/events/gallery/2014/cny-2014-2.jpg"),
        width: 3,
        height: 2
    },
    {
        src: require( "../images/events/gallery/2014/cny-2014-3.jpg"),
        width: 3,
        height: 2
    },
    {
        src: require("../images/events/gallery/2014/cny-2014-4.jpg"),
        width: 3,
        height: 2
    }
]

const Gallery2014 = () => {
    return (
        <div>
            <Gallery photos={images} />
        </div>
    );
};

export default Gallery2014;