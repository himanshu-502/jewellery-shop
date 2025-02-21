package models

import (
	"time"
)

type User struct {
	ID           uint      `gorm:"primaryKey"`
	Name         string    `json:"name"`
	Email        string    `gorm:"unique" json:"email"`
	PasswordHash string    `json:"password_hash"`
	Phone        *string   `json:"phone"`
	Role         string    `gorm:"default:buyer" json:"role"`
	CreatedAt    time.Time `gorm:"autoCreateTime"`
	Addresses    []string  `gorm:"type:text[]" json:"addresses"`
	Orders       []Order   `gorm:"foreignKey:UserID"`
	Reviews      []Review  `gorm:"foreignKey:UserID"`
	// CartItems     []CartItem `gorm:"foreignKey:UserID"`
	WishlistItems []Wishlist `gorm:"foreignKey:UserID"`
}
