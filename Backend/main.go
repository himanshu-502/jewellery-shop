package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/aanvi17/jewellery-shop/Backend/database"
	"github.com/aanvi17/jewellery-shop/Backend/handlers"
	httpSwagger "github.com/swaggo/http-swagger"
)

// Home Page Handler
func homeHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Welcome to Jewellery Shop API")
}

// Products API Handler (Example)
func productsHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "This is the Products API")
}

// const (
// 	connStr = "host=localhost user=postgres dbname=jewellery_shop sslmode=disable password=12345"
// )

// @title Jewelry E-Commerce API
// @version 1.0
// @description This is the API documentation for the jewelry e-commerce backend.
// @host localhost:8080
// @BasePath /
func main() {
	database.ConnectDB()

	// Routes
	http.HandleFunc("/", homeHandler)
	http.HandleFunc("/api/products", productsHandler)
	http.HandleFunc("/products", handlers.GetProducts)
	http.HandleFunc("/categories", handlers.GetCategories)
	http.HandleFunc("/reviews", handlers.GetReviews)
	http.HandleFunc("/user/profile/", handlers.GetUserProfile)
	http.HandleFunc("/user/addresses", handlers.UserAddressesHandler)
	http.HandleFunc("/user/signup", handlers.UserSignup)
	http.HandleFunc("/user/orders/", handlers.UserOrders)
	http.HandleFunc("/user/cart/", handlers.UserCart)
	// http.HandleFunc("/user/reviews/", handlers.ReviewHandler)
	http.HandleFunc("/user/reviews", handlers.ReviewHandler)
	http.HandleFunc("/user/wishlist/", handlers.UserWishlistHandler)

	// Swagger UI
	http.HandleFunc("/swagger/", httpSwagger.WrapHandler)

	log.Println("Server started on :8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal("Failed to start server:", err)
	}
}
