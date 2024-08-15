
export const isArrSubsetOfObj = (a: any[], o: any): boolean => {

    const notfound = a.filter(val => o[`${val}`] == undefined);

    if (notfound.length > 0) {
        return false;
    }

    return true;
}