// database connection setup
package database

import (
	"fmt"
	"log"

	"github.com/aanvi17/jewellery-shop/Backend/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDB() {
	dsn := "host=localhost user=postgres password=12345 dbname=mydb port=5432 sslmode=disable"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to database:", err)
	}
	DB = db
	fmt.Println("Database connected successfully!")

	// Migrate the schema
	err = db.AutoMigrate(
		&models.User{},
		&models.Category{},
		&models.Product{},
		&models.Order{},
		&models.OrderItem{},
		&models.Review{},
		&models.Wishlist{},
	)
	if err != nil {
		log.Fatal("Migration failed:", err)
	}
	fmt.Println("Database migrated successfully!")
}
