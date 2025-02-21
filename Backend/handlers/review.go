package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/aanvi17/jewellery-shop/Backend/database"
	"github.com/aanvi17/jewellery-shop/Backend/models"
)

func GetReviews(w http.ResponseWriter, r *http.Request) {
	var reviews []models.Review

	// Fetch all reviews from the database
	if err := database.DB.Preload("User").Preload("Product").Find(&reviews).Error; err != nil {
		http.Error(w, "Failed to fetch reviews", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(reviews)
}

// @Summary Add a review
// @Description Submit a review for a product
// @Tags Review
// @Accept json
// @Produce json
// @Success 201 {string} string "Review added"
// @Router /reviews [post]
// Add or edit a review
func ReviewHandler(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodPost:
		w.Write([]byte("Add a review or rating"))
	case http.MethodPut:
		w.Write([]byte("Edit a review or rating"))
	}
}
