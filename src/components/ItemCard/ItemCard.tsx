import { FC, useRef, useState } from "react";
import useGlobalStyles from "../../pages/MainPage/styles";
import Item from "../../types/item.type";
import { ItemImage } from "../ItemImage/ItemImage";
import useStyles from "./styles";
import { handleClick } from "./functions";
import { useNavigate } from "react-router-dom";

const ItemCard: FC<{ item: Item, index: number }> = ({ item, index }) => {
    const navigate = useNavigate();

    const [isAnimated, setIsAnimated] = useState(false);
    const [leftPosition, setLeftPosition] = useState(0);
    const [topPosition, setTopPosition] = useState(0);
    const [imageUrl, setImageUrl] = useState(item.content);
    const elementRef = useRef<HTMLDivElement>(null);
    const classes = useStyles({ topPosition: topPosition, leftPosition: leftPosition });
    useGlobalStyles();

    return <span onClick={() => handleClick(item, index, elementRef.current || null, navigate, setLeftPosition, setTopPosition, setImageUrl, setIsAnimated)} key={index} className={`${classes.cardContainer} ${isAnimated ? classes.animated : ''}`}>
        <span className={classes.cardContent}>
            <span className={classes.itemText}>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
            </span>
            <span>
                <span className={classes.imgContainer} ref={elementRef}>
                    <ItemImage image={imageUrl} title={item.title}></ItemImage>
                </span>
            </span>
        </span>
        <span className={classes.metaData}>
            <p>{item.metaData.publisher}</p>
            <p>{item.metaData.date}</p>
        </span>
    </span>
}
export { ItemCard };

