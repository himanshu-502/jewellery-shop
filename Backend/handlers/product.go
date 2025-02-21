package handlers

import (
	"encoding/json"

	"net/http"

	"github.com/aanvi17/jewellery-shop/Backend/database"
	"github.com/aanvi17/jewellery-shop/Backend/models"
)

func GetProducts(w http.ResponseWriter, r *http.Request) {
	var products []models.Product

	// Fetch all products from the database
	if err := database.DB.Preload("Categories").Find(&products).Error; err != nil {
		http.Error(w, "Failed to fetch products", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(products)
}
