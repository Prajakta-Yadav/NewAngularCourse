class SecureData {
    constructor(data) {
        this._data = data;
    }

    updateData(newData) {
        this._data = newData;
    }

    getData() {
        return this._data;
    }
}

let data = new SecureData();

data.updateData("Hello");
data.getData("Hello");