import Gallery from "react-photo-gallery";
const images = [
    {
        src: require("../images/events/gallery/2015/cny-2015-1.jpg"),
        width: 3,
        height: 2
    },
    {
        src: require( "../images/events/gallery/2015/cny-2015-2.jpg"),
        width: 3,
        height: 4
    },
    {
        src: require( "../images/events/gallery/2015/cny-2015-3.jpg"),
        width: 3,
        height: 2
    },
    {
        src: require("../images/events/gallery/2015/cny-2015-4.jpg"),
        width: 3,
        height: 2
    },
    {
        src: require("../images/events/gallery/2015/cny-2015-5.jpg"),
        width: 3,
        height: 2
    },
    {
        src: require("../images/events/gallery/2015/cny-2015-6.jpg"),
        width: 3,
        height: 4
    },
    {
        src: require("../images/events/gallery/2014/cny-2014-5.jpg"),
        width: 3,
        height: 4
    }
]

const Gallery2015 = () => {
    return (
        <div>
            <Gallery photos={images}/>
        </div>
    );
};

export default Gallery2015;