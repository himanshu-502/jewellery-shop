package handlers

import (
	"net/http"
)

// @Summary Get wishlist items
// @Description Retrieve all wishlist items of a user
// @Tags Wishlist
// @Produce json
// @Param id path string true "User ID"
// @Success 200 {string} string "User wishlist items"
// @Router /user/wishlist/{id} [get]
// User Wishlist
func UserWishlistHandler(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet:
		w.Write([]byte("Get wishlist items of the user"))
	case http.MethodPost:
		w.Write([]byte("Set wishlist if empty"))
	case http.MethodPut:
		w.Write([]byte("Update wishlist"))
	}
}
