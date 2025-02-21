package handlers

import (
	"net/http"
	// "github.com/aanvi17/jewellery-shop/Backend/database"
	// "github.com/aanvi17/jewellery-shop/Backend/models"
)

// @Summary Fetch user orders
// @Description Get all orders of a user
// @Tags User
// @Produce json
// @Param id path string true "User ID"
// @Success 200 {string} string "User orders"

// User Orders
func UserOrders(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet:
		w.Write([]byte("Fetch all orders of the user"))
	case http.MethodPost:
		w.Write([]byte("Place a new order"))
	}
}

// @Summary Fetch user cart
// @Description Get all cart items for a user
// @Tags User
// @Produce json
// @Param id path string true "User ID"
// @Success 200 {string} string "User cart items"
// @Router /user/cart/{id} [get]
// User Cart
func UserCart(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet:
		w.Write([]byte("Get cart items of the user"))
	case http.MethodPost:
		w.Write([]byte("Set cart items if empty"))
	case http.MethodPut:
		w.Write([]byte("Update the cart"))
	}
}
