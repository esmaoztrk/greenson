const ProductReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_INIT":
      return { ...state, isLoggedIn: false, isError: false };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        isError: false,
      };
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        isSignedUp: true,
        user: action.payload,
        isError: false,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isSignedUp: false,
        isError: true,
      };
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
      };

    case "FETCH_SUCCESS":
      return {
        ...state,
        isError: false,
        isLoading: false,
        isSuccess: true,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
      };
    case "CREATE_PRODUCT_SUCCESS":
      return {
        ...state,
        products: [...state.products, action.payload],
        isSuccess: true,
      };

    case "CREATE_CATEGORY_SUCCESS":
      return {
        ...state,
        categories: [...state.categories, action.payload],
        isSuccess: true,
      };

    case "CREATE_ORDER_SUCCESS":
      return {
        ...state,
        orders: [...state.orders, action.payload],
        isSuccess: true,
      };

    case "CREATE_USER_SUCCESS":
      return {
        ...state,
        users: [...state.users, action.payload],
        isSuccess: true,
      };

    case "CREATE_COMMENT_SUCCESS":
      return {
        ...state,
        comments: [...state.comments, action.payload],
        isSuccess: true,
      };

    case "CREATE_PRODUCT_FAILURE":
    case "CREATE_CATEGORY_FAILURE":
    case "CREATE_ORDER_FAILURE":
    case "CREATE_USER_FAILURE":
    case "CREATE_COMMENT_FAILURE":
      return { ...state, isError: true };

    case "UPDATE_PRODUCT_SUCCESS":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
        isSuccess: true,
      };

    case "UPDATE_CATEGORY_SUCCESS":
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.id ? action.payload : category
        ),
        isSuccess: true,
      };

    case "UPDATE_ORDER_SUCCESS":
      return {
        ...state,
        orders: state.orders.map((order) =>
          order.id === action.payload.id ? action.payload : order
        ),
        isSuccess: true,
      };

    case "UPDATE_USER_SUCCESS":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
        isSuccess: true,
      };

    case "UPDATE_COMMENT_SUCCESS":
      return {
        ...state,
        comments: state.comments.map((comment) =>
          comment.id === action.payload.id ? action.payload : comment
        ),
        isSuccess: true,
      };

    case "UPDATE_PRODUCT_FAILURE":
    case "UPDATE_CATEGORY_FAILURE":
    case "UPDATE_ORDER_FAILURE":
    case "UPDATE_USER_FAILURE":
    case "UPDATE_COMMENT_FAILURE":
      return { ...state, isError: true };

    case "DELETE_PRODUCT_SUCCESS":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
        isDeleted: true,
      };

    case "DELETE_CATEGORY_SUCCESS":
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category.id !== action.payload
        ),
        isDeleted: true,
      };

    case "DELETE_PRODUCT_FAILURE":
    case "DELETE_CATEGORY_FAILURE":
      return { ...state, isError: true };

    default:
      throw new Error("Hata");
  }
};

export default ProductReducer;
