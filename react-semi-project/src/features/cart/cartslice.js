import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // 테스트 데이터로 productslice에 있는 데이터 하나 넣기
  cartItems: [
    {   id : 1,
        productName: "스트릿 스프레이 루즈핏 반팔티 5color",
        category: "상의",
        price: 25500,
        color: ["화이트", "베이지", "라이트퍼플", "차콜", "블랙"],
        size: ["free"],
        src: process.env.PUBLIC_URL + "/img/스트릿 스프레이 루즈핏 반팔티 5color.jpg",
        quantity : 1
    }, {   
      id : 2,
      productName: "아이스 쿨 무지 반팔티 2color",
      category: "상의",
      price: 32500,
      color: ["화이트", "블랙"],
      size: ["S/M", "L/XL", "2XL/3XL", "4XL/5XL"],
      src: process.env.PUBLIC_URL + "/img/아이스 쿨 무지 반팔티 2color.jpg",
      quantity : 1
  },
  ], // 장바구니에 담긴 상품 목록을 담을 배열
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // 장바구니에서 상품 수량 직접 입력 액션
    changeQuantity(state, action) {
      const { index, quantity } = action.payload;
      state.cartItems[index].quantity = quantity;
      },
    // 장바구니에 상품 추가 액션
    addToCart(state, action) {
      const newItem = action.payload;
      // 이미 장바구니에 있는 상품인지 체크
      const existingItem = state.cartItems.find(item => item.id === newItem.id);
      if (existingItem) {
        // 이미 장바구니에 있는 상품이면 수량을 증가시킴
        existingItem.quantity++;
      } else {
        // 장바구니에 없는 상품이면 새로 추가
        state.cartItems.push({ ...newItem, quantity: 1 });
      }
    },
    // 장바구니에서 상품 제거 액션
    removeFromCart(state, action) {
      const idToRemove = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== idToRemove);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  changeQuantity
} = cartSlice.actions;

export default cartSlice.reducer;