import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // 테스트 데이터로 productslice에 있는 데이터 하나 넣기
  cartItems: [
    
  ], // 장바구니에 담긴 상품 목록을 담을 배열
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // 장바구니에서 상품 수량 직접 입력 액션
    changecount(state, action) {
      const { index, count } = action.payload;
      state.cartItems[index].count = count;
      },
    // 장바구니에 상품 추가 액션
    addToCart(state, action) {
      const newItem = action.payload;
      // 이미 장바구니에 있는 상품인지 체크
      const existingItem = state.cartItems.find(item => item.id === newItem.id);
      console.log(newItem);
      if (existingItem) {
        // 이미 장바구니에 있는 상품이면 수량을 증가시킴
        existingItem.count++;
      } else {
        // 장바구니에 없는 상품이면 새로 추가
        state.cartItems.push({ ...newItem, count: newItem.count });
      }
    },
    // 장바구니에서 상품 제거 액션
    removeFromCart(state, action) {
      const idToRemove = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== idToRemove);
    },    
    // 장바구니에서 상품 수량 증가 액션
    increasecount(state, action) {
        const idToIncrease = action.payload;
        const itemToIncrease = state.cartItems.find(item => item.id === idToIncrease.id);
        if (itemToIncrease) {
          itemToIncrease.count++;
        }
      },     
       // 장바구니에서 상품 수량 감소 액션
      decreasecount(state, action) {
        const idToDecrease = action.payload;
        const itemToDecrease = state.cartItems.find(item => item.id === idToDecrease.id);
        if (itemToDecrease && itemToDecrease.count > 1) {
          itemToDecrease.count--;
        }
      },
  },
});

export const {
  addToCart,
  removeFromCart,
  changecount,
  increasecount,
  decreasecount
} = cartSlice.actions;

export default cartSlice.reducer;