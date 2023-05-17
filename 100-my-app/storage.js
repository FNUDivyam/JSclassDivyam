function getData() {
    const dataJSON = localStorage.getItem("data");
    if(dataJSON !== null) {
        return JSON.parse(dataJSON)
    } else {
        return []
    }
}

function saveData(data) {
    localStorage.setItem("data", JSON.stringify(data));
}

export { getData, saveData }