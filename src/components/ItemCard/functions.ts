import Item from "../../types/item.type";
import LQIPMedia from "../../types/lqip-media.type";

export const handleItemClick = (item: Item, index: number, elementRef: HTMLDivElement | null, navigate: (to: string, options?: { replace?: boolean; state?: unknown }) => void,
    setLeftPosition: React.Dispatch<React.SetStateAction<number>>, setTopPosition: React.Dispatch<React.SetStateAction<number>>,
    setImageUrl: React.Dispatch<React.SetStateAction<LQIPMedia>>, setIsAnimated: React.Dispatch<React.SetStateAction<boolean>>) => {

    if (elementRef) {
        const rect = elementRef.getBoundingClientRect();
        setLeftPosition(rect.left);
        setTopPosition(rect.top + window.scrollY - 100);
    }
    setIsAnimated(true);
    // setTimeout(() => setImageUrl(item.content), 150)
    setTimeout(() =>
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        }), 100)
    setTimeout(() => {
        navigate(`${index}`);
        setIsAnimated(false);
    }, 250);
}