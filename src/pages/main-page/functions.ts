export const handlePageTransitioning = (setIsTransitioning: React.Dispatch<React.SetStateAction<boolean>>) => {
    setIsTransitioning(true);
    const timeOut = setTimeout(() => setIsTransitioning(false), 100);
    return timeOut;
};
