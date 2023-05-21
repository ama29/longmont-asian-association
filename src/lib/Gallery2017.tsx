import Gallery from "react-photo-gallery";
const images = [
    {
        src: require("../images/events/gallery/2017/2017-front.jpg"),
        width: 3,
        height: 2
    },
    {
        src: require("../images/events/gallery/2017/cny-2017-back.jpg"),
        width: 3,
        height: 2
    },
    {
        src: require("../images/events/gallery/2017/cny-2017-1.jpg"),
        width: 3,
        height: 2
    },
    {
        src: require( "../images/events/gallery/2017/cny-2017-2.jpg"),
        width: 3,
        height: 2
    },
    {
        src: require( "../images/events/gallery/2017/cny-2017-3.jpg"),
        width: 3,
        height: 2
    },
    {
        src: require("../images/events/gallery/2017/cny-2017-4.jpg"),
        width: 3,
        height: 2
    },
    {
        src: require("../images/events/gallery/2017/cny-2017-5.jpg"),
        width: 3,
        height: 2
    },
    {
        src: require("../images/events/gallery/2017/cny-2017-6.jpg"),
        width: 3,
        height: 2
    },
    {
        src: require("../images/events/gallery/2017/cny-2017-7.jpg"),
        width: 3,
        height: 4
    },
    {
        src: require("../images/events/gallery/2017/cny-2017-8.jpg"),
        width: 3,
        height: 2
    },
    {
        src: require("../images/events/gallery/2017/cny-2017-9.jpg"),
        width: 3,
        height: 2
    },
    {
        src: require("../images/events/gallery/2017/cny-2017-10.jpg"),
        width: 3,
        height: 2
    },
    {
        src: require("../images/events/gallery/2017/cny-2017-11.jpg"),
        width: 3,
        height: 2
    },
    {
        src: require("../images/events/gallery/2017/cny-2017-12.jpg"),
        width: 3,
        height: 2
    }
]

const Gallery2017 = () => {
    return (
        <div>
            <Gallery photos={images}/>
        </div>
    );
};

export default Gallery2017;