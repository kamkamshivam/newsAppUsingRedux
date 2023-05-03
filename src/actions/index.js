export const showData = (data) => {
    return{
        type: "SHOWDATA",
        payload: data
    }
};

export const deleteid = (id) => {
    return {
        type: "DELETE",
        payload: id
    }
}