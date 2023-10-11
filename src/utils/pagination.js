const paginationLogic = (currentPage,residents) => {
    if(residents.length===0){
        return {
            pages: [1],
            residentes__in__page: [],
        }
    }
    const residents__per__page = 10;
    const total__pages = Math.ceil(residents.length/residents__per__page);
    console.log(total__pages)
    const slice__end = currentPage*residents__per__page;
    const slice__start = slice__end-residents__per__page;
    const residentes__in__page = residents.slice(slice__start,slice__end);
    const pages = [];
    for (let i = 1; i <= total__pages; i++) {
        pages.push(i);
    }
    return {
        residentes__in__page,
        pages,
    }
}

export {
    paginationLogic
}