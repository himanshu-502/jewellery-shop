package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/aanvi17/jewellery-shop/Backend/database"
	"github.com/aanvi17/jewellery-shop/Backend/models"
)

func GetCategories(w http.ResponseWriter, r *http.Request) {
	var categories []models.Category

	// Fetch all categories from the database
	if err := database.DB.Preload("Products").Find(&categories).Error; err != nil {
		http.Error(w, "Failed to fetch categories", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(categories)
}
