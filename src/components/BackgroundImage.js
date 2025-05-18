// components/BackgroundImage.js
export default function BackgroundImage({ img,color = "black", width = "auto", height = "auto%", children }) {
    const style = {
        backgroundColor: color,
        maskImage: `url(${img})`,
        maskSize: "cover",
        maskPosition: "center",
        width,
        height,
    };

    return (
        <div style={style} className="relative">
            {children}
        </div>
    );
}
