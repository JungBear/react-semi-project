import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            productName: "스트릿 스프레이 루즈핏 반팔티 5color",
            category: "상의",
            price: 25500,
            color: ["화이트", "베이지", "라이트퍼플", "차콜", "블랙"],
            size: ["free"],
            src: "./img/스트릿 스프레이 루즈핏 반팔티 5color.jpg"
        },
        {
            productName: "아이스 쿨 무지 반팔티 2color",
            category: "상의",
            price: 25500,
            color: ["화이트", "블랙"],
            size: ["S/M", "L/XL", "2XL/3XL", "4XL/5XL"],
            src: "./img/아이스 쿨 무지 반팔티 2color.jpg"
        },
        {
            productName: "브이앤 나일론 반바지 2color",
            category: "하의",
            price: 37000,
            color: ["스카이블루", "블랙"],
            size: ["S/M", "L/XL", "2XL/3XL", "4XL/5XL"],
            src: "./img/브이앤 나일론 반바지 2color.jpg"
        }
    ]
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // 여기에 필요한 리듀서 추가
    },
 
});

export const {} = productSlice.actions;
export default productSlice.reducer;