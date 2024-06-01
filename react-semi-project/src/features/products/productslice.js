import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {   
            id : 1,
            productName: "스트릿 스프레이 루즈핏 반팔티 5color",
            category: "상의",
            price: 25500,
            color: ["화이트", "베이지", "라이트퍼플", "차콜", "블랙"],
            size: ["free"],
            src: process.env.PUBLIC_URL + "/img/스트릿 스프레이 루즈핏 반팔티 5color.jpg",
            count : 0
        },
        {   
            id : 2,
            productName: "아이스 쿨 무지 반팔티 2color",
            category: "상의",
            price: 25500,
            color: ["화이트", "블랙"],
            size: ["S/M", "L/XL", "2XL/3XL", "4XL/5XL"],
            src: process.env.PUBLIC_URL + "/img/아이스 쿨 무지 반팔티 2color.jpg",
            count : 0
        },
        {
            id : 3,
            productName: "브이앤 나일론 반바지 2color",
            category: "하의",
            price: 37000,
            color: ["스카이블루", "블랙"],
            size: ["S/M", "L/XL", "2XL/3XL", "4XL/5XL"],
            src: process.env.PUBLIC_URL + "/img/브이앤 나일론 반바지 2color.jpg",
            count : 0
        }
    ]
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    // 장바구니에서 상품 수량 증가 액션
    increaseQuantity(state, action) {
        const idToIncrease = action.payload;
        const itemToIncrease = state.cartItems.find(item => item.id === idToIncrease);
        if (itemToIncrease) {
          itemToIncrease.quantity++;
        }
      },
      // 장바구니에서 상품 수량 직접 입력 액션
      changeQuantity(state, action) {
        const { index, quantity } = action.payload;
        state.products[index].count = quantity;
        },
      // 장바구니에서 상품 수량 감소 액션
      decreaseQuantity(state, action) {
        const idToDecrease = action.payload;
        const itemToDecrease = state.cartItems.find(item => item.id === idToDecrease);
        if (itemToDecrease && itemToDecrease.quantity > 1) {
          itemToDecrease.quantity--;
        }
      },
    },
 
});

export const {  increaseQuantity,decreaseQuantity,changeQuantity} = productSlice.actions;
export default productSlice.reducer;