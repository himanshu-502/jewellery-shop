package handlers

import (
	"net/http"
	// "github.com/aanvi17/jewellery-shop/Backend/database"
	// "github.com/aanvi17/jewellery-shop/Backend/models"
)

// @Summary Fetch user profile
// @Description Get user profile details by ID
// @Tags User
// @Produce json
// @Param id path string true "User ID"
// @Success 200 {string} string "User profile details"
// @Failure 400 {string} string "Invalid ID"
// @Router /user/profile/{id} [get]
// Fetch or update user profile
func GetUserProfile(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodGet {
		w.Write([]byte("User profile details"))
	} else if r.Method == http.MethodPut {
		w.Write([]byte("User profile updated"))
	}
}

// @Summary Fetch all user addresses
// @Description Retrieve all addresses of a user
// @Tags User
// @Produce json
// @Success 200 {string} string "User addresses"

// User Addresses
func UserAddressesHandler(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet:
		w.Write([]byte("Fetch all user addresses"))
	case http.MethodPost:
		w.Write([]byte("Add new address"))
	case http.MethodPut:
		w.Write([]byte("Update existing address"))
	}
}

// @Summary Create a new user
// @Description Sign up a new user
// @Tags User
// @Accept json
// @Produce json
// @Success 201 {string} string "User created"
// @Failure 400 {string} string "Invalid request"
// @Router /user/signup [post]
// User Signup
func UserSignup(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodPost {
		w.Write([]byte("Add new user details"))
	}
}
