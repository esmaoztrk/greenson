import http from "./http-common";

const ApiService = {
  // Products
  async getAllProducts() {
    const response = await http.get("/products");
    return response.data;
  },

  async getProduct(id) {
    const response = await http.get(`/products/${id}`);
    return response.data;
  },

  // // Categories
  // async getAllCategories() {
  //   const response = await http.get("/categories");
  //   return response.data;
  // },

  // async getCategory(id) {
  //   const response = await http.get(`/categories/${id}`);
  //   return response.data;
  // },

  // async createCategory(category) {
  //   const response = await http.post("/categories", category);
  //   return response.data;
  // },

  // async updateCategory(id, category) {
  //   const response = await http.put(`/categories/${id}`, category);
  //   return response.data;
  // },

  // async deleteCategory(id) {
  //   const response = await http.delete(`/categories/${id}`);
  //   return response.data;
  // },

  // Orders
  async getAllOrders() {
    const response = await http.get("/orders");
    return response.data;
  },

  async getOrder(id) {
    const response = await http.get(`/orders/${id}`);
    return response.data;
  },

  async createOrder(order) {
    const response = await http.post("/orders", order);
    return response.data;
  },

  async updateOrder(id, order) {
    const response = await http.put(`/orders/${id}`, order);
    return response.data;
  },

  async deleteOrder(id) {
    const response = await http.delete(`/orders/${id}`);
    return response.data;
  },

  // Users
  async getAllUsers() {
    const response = await http.get("/users");
    return response.data;
  },

  async getUser(id) {
    const response = await http.get(`/users/${id}`);
    return response.data;
  },

  async createUser(user) {
    const response = await http.post("/users", user);
    return response.data;
  },

  async updateUser(id, user) {
    const response = await http.put(`/users/${id}`, user);
    return response.data;
  },

  async deleteUser(id) {
    const response = await http.delete(`/users/${id}`);
    return response.data;
  },
  async addFavorite(userId, productId, token) {
    try {
      const response = await http.post(
        `/users/${userId}/favorites`,
        { productId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error("Favori eklenirken bir hata oluştu");
    }
  },

  async getFavorites(userId, token) {
    try {
      const response = await http.get(`/users/${userId}/favorites`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error("Favori ürünler alınırken bir hata oluştu");
    }
  },

  async removeFavorite(userId, productId, token) {
    try {
      const response = await http.delete(`/users/${userId}/favorites`, {
        data: { productId },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error("Favori kaldırılırken bir hata oluştu");
    }
  },

  // Login and Sign Up
  async login(data) {
    const response = await http.post("/login", data);
    return response.data;
  },

  async register(data) {
    const response = await http.post("/register", data);
    return response.data;
  },

  //Comment
  async getComment(productID, commentID) {
    const response = await http.get(
      `/products/${productID}/comments/${commentID}`
    );
    return response.data;
  },
  async updateComment(productID, commentID, data, token) {
    const response = await http.put(
      `/products/${productID}/comments/${commentID}`,
      data,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  },
  async addComment(productID, data, token) {
    const response = await http.post(`/products/${productID}/comments`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },
  async removeComment(productID, commentID, token) {
    const response = await http.delete(
      `/products/${productID}/comments/${commentID}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  },

  //Bags

  async addBag(product, amount) {
    const response = await http.post("/addBag", { product, amount });
    return response.data;
  },
  async getBags(){
    const response = await http.get("/bags");
    return response.data;
  }
};

export default ApiService;
