import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor(){
        this._types = [
            {id: 1, name: "Клавиатуры"},
            {id: 2, name: "Наушники"},
            {id: 3, name: "Ноутбуки"},
            {id: 4, name: "Компьютерные мыши"},
            {id: 5, name: "Зарядные устройства"},
            {id: 6, name: "Фонарики"},
            {id: 7, name: "Батарейки"},
            {id: 8, name: "Роутеры"},
            {id: 9, name: "Портативные зарядные устройства"},
        ]

        this._brands = [
            {id: 1, name: "A4Tech"},
            {id: 2, name: "Sony"},
            {id: 3, name: "Logitech"},
            {id: 4, name: "TP-Link"},
            {id: 5, name: "Samsung"},
            {id: 6, name: "Xiaomi"},
            {id: 7, name: "Apple"},
            {id: 8, name: "Sennheiser"},
            {id: 9, name: "JBL"},
            {id: 10, name: "Baseus"},
            {id: 11, name: "Lenovo"},
            {id: 12, name: "Asus"},
            {id: 13, name: "Acer"},
            {id: 14, name: "Huawei"},
        ]

        this._devices = [
            {id: "1", name: "B310N", price: "50", rating: "0", img: "ad0aac0d-f9f5-41eb-80b8-fcd1c7d4cc2e.jpg"},
            {id: "2", name: "WH-1000XM4B", price: "200", rating: "0", img: "98f9a453-966b-42f5-8227-a63dd45c2aa9.jpg"},
            {id: "3", name: "MR590 Sports", price: "55", rating: "0", img: "0fcdba09-77c1-4975-8069-22a4e5a28214.jpg"},

            {id: "4", name: "B310N", price: "50", rating: "0", img: "ad0aac0d-f9f5-41eb-80b8-fcd1c7d4cc2e.jpg"},
            {id: "5", name: "WH-1000XM4B", price: "200", rating: "0", img: "98f9a453-966b-42f5-8227-a63dd45c2aa9.jpg"},
            {id: "6", name: "MR590 Sports", price: "55", rating: "0", img: "0fcdba09-77c1-4975-8069-22a4e5a28214.jpg"},

            {id: "7", name: "B310N", price: "50", rating: "0", img: "ad0aac0d-f9f5-41eb-80b8-fcd1c7d4cc2e.jpg"},
            {id: "8", name: "WH-1000XM4B", price: "200", rating: "0", img: "98f9a453-966b-42f5-8227-a63dd45c2aa9.jpg"},
            {id: "9", name: "MR590 Sports", price: "55", rating: "0", img: "0fcdba09-77c1-4975-8069-22a4e5a28214.jpg"},
        ]

        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types;
    }
    
    setBrands(brands){
        this._brands = brands;
    }

    setDevices(devices){
        this._devices = devices;
    }

    setSelectedType(type){
        this._selectedType = type
    }

    setSelectedBrand(brand){
        this._selectedBrand = brand
    }

    get types(){
        return this._types;
    }

    get brands(){
        return this._brands;
    }

    get devices(){
        return this._devices;
    }

    get selectedType(){
        return this._selectedType;
    }

    get selectedBrand(){
        return this._selectedBrand;
    }
}