package models

import (
	"time"
)

type Product struct {
	ID          uint       `gorm:"primaryKey"`
	Name        string     `json:"name"`
	Description *string    `json:"description"`
	Price       float64    `json:"price"`
	Stock       int        `json:"stock"`
	Version     int        `gorm:"default:1"`
	CreatedAt   time.Time  `gorm:"autoCreateTime"`
	Categories  []Category `gorm:"many2many:product_categories"`
	Images      []byte     `json:"images"`
	Reviews     []Review   `gorm:"foreignKey:ProductID"`
}
