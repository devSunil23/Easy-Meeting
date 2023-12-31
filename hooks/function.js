const getDate = (isoDate) => {
    const date = isoDate?.split('T')[0];
    const normalDate = `${date?.split('-')[2]}-${date?.split('-')[1]}-${
        date.split('-')[0]
    }`;
    return normalDate;
};
export default getDate;
