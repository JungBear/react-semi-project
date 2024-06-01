import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            productName: "스트릿 스프레이 루즈핏 반팔티 5color",
            category: "상의",
            price: 25500,
            color: ["화이트", "베이지", "라이트퍼플", "차콜", "블랙"],
            size: ["free"],
            src: process.env.PUBLIC_URL + "/img/스트릿 스프레이 루즈핏 반팔티 5color.jpg",
            count : 0
        },
        {
            productName: "아이스 쿨 무지 반팔티 2color",
            category: "상의",
            price: 25500,
            color: ["화이트", "블랙"],
            size: ["S/M", "L/XL", "2XL/3XL", "4XL/5XL"],
            src: process.env.PUBLIC_URL + "/img/아이스 쿨 무지 반팔티 2color.jpg",
            count : 0
        },
        {
            productName: "브이앤 나일론 반바지 2color",
            category: "하의",
            price: 37000,
            color: ["스카이블루", "블랙"],
            size: ["S/M", "L/XL", "2XL/3XL", "4XL/5XL"],
            src: process.env.PUBLIC_URL + "/public/img/브이앤 나일론 반바지 2color.jpg",
            count : 0
        }
    ]
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        increseCount(){
            // 수량증가버튼을 누르면 count 증가
        },
        minusCount(){
            // 수량감소버튼을 누르면 count 증가
        },

        addOnCart(){
            // 장바구니 추가 버튼을 누르면 shoppingBasket으로 이동
        },

        deleteFromCart(){

        }
    },
});

export const {increseCount, minusCount,addOnCart, deleteFromCart} = productSlice.actions;
export default productSlice.reducer;