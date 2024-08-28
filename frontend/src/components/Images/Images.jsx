import images from "~/assets/images";

function Image({ src, alt = 'image', ...passProps }) {
    return <img src={src} alt={alt} {...passProps} onError={({currentTarget}) => {
        currentTarget.src = images.noImage;
        currentTarget.onerror = null;
    }}/>;
}

export default Image;
